import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { useLanguage } from '@/contexts/LanguageContext';

interface SectionLockProps {
  sectionId: string;
  children: React.ReactNode;
}

const T = {
  zh: {
    lockTitle: '此内容需要解锁才能查看',
    lockDesc: '请填写您的信息申请访问权限，审核通过后即可查看全部内容。',
    namePlaceholder: '您的姓名',
    emailPlaceholder: '您的邮箱',
    companyPlaceholder: '公司 / 机构（选填）',
    submitBtn: '申请查看',
    submitting: '提交中...',
    successTitle: '申请已提交',
    successDesc: '我们将尽快审核，通过后您将可以查看全部内容。',
    errorMsg: '提交失败，请稍后重试。',
    contactHint: '或直接联系我们',
    contactEmail: 'contact@aifavaa.com',
  },
  en: {
    lockTitle: 'This content requires access',
    lockDesc: 'Fill in your information to request access. Once approved, all locked sections will be unlocked.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    companyPlaceholder: 'Company / Organization (optional)',
    submitBtn: 'Request Access',
    submitting: 'Submitting...',
    successTitle: 'Request Submitted',
    successDesc: 'We will review your request shortly. Once approved, all content will be unlocked.',
    errorMsg: 'Submission failed, please try again.',
    contactHint: 'Or contact us directly',
    contactEmail: 'contact@aifavaa.com',
  },
};

// ─── Global unlock state (localStorage) ───────────────────────────────────────
const GLOBAL_UNLOCK_KEY = 'aifavaa_global_unlocked';
const GLOBAL_REQUESTED_KEY = 'aifavaa_global_requested';

function isGloballyUnlocked(): boolean {
  try {
    return localStorage.getItem(GLOBAL_UNLOCK_KEY) === 'true';
  } catch {
    return false;
  }
}

function isGloballyRequested(): boolean {
  try {
    return localStorage.getItem(GLOBAL_REQUESTED_KEY) === 'true';
  } catch {
    return false;
  }
}

function markGloballyRequested() {
  try {
    localStorage.setItem(GLOBAL_REQUESTED_KEY, 'true');
  } catch {}
}

// Call this from admin/unlock flow to grant access
export function grantGlobalAccess() {
  try {
    localStorage.setItem(GLOBAL_UNLOCK_KEY, 'true');
  } catch {}
}

// ─── Lock overlay shown when not unlocked ─────────────────────────────────────
function LockOverlay() {
  const { language } = useLanguage();
  const lang = (language as 'zh' | 'en') === 'en' ? 'en' : 'zh';
  const copy = T[lang];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [requested, setRequested] = useState(() => isGloballyRequested());

  const requestAccess = trpc.access.request.useMutation({
    onSuccess: () => {
      markGloballyRequested();
      setRequested(true);
    },
    onError: () => {
      setErrorMsg(copy.errorMsg);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setErrorMsg('');
    requestAccess.mutate({
      sectionId: 'all',
      name,
      email,
      company,
    });
  };

  return (
    <div className="relative py-20 lg:py-28 flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-900/20 to-cyan-950/30" />
      </div>

      {/* Card */}
      <div className="relative mx-4 w-full max-w-md">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/30 via-transparent to-cyan-500/30 pointer-events-none" />
        <div className="relative rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl p-8 shadow-2xl">
          {requested ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-3xl">
                ✅
              </div>
              <h3 className="text-lg font-bold text-white">{copy.successTitle}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{copy.successDesc}</p>
              <p className="mt-4 text-xs text-slate-500">
                {copy.contactHint}:{' '}
                <a
                  href={`mailto:${copy.contactEmail}`}
                  className="text-cyan-400 hover:text-cyan-300 transition underline underline-offset-2"
                >
                  {copy.contactEmail}
                </a>
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/15 text-3xl">
                  🔒
                </div>
                <h3 className="text-lg font-bold text-white">{copy.lockTitle}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{copy.lockDesc}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={copy.namePlaceholder}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={copy.emailPlaceholder}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition"
                />
                <input
                  type="text"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  placeholder={copy.companyPlaceholder}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition"
                />

                {errorMsg && <p className="text-xs text-red-400">{errorMsg}</p>}

                <button
                  type="submit"
                  disabled={requestAccess.isPending || !name.trim() || !email.trim()}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {requestAccess.isPending ? copy.submitting : copy.submitBtn}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-slate-500">
                {copy.contactHint}:{' '}
                <a
                  href={`mailto:${copy.contactEmail}`}
                  className="text-cyan-400 hover:text-cyan-300 transition underline underline-offset-2"
                >
                  {copy.contactEmail}
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function SectionLock({ children }: SectionLockProps) {
  const [unlocked] = useState(() => isGloballyUnlocked());

  if (unlocked) {
    return <>{children}</>;
  }

  // Do NOT render children to DOM when locked
  return <LockOverlay />;
}
