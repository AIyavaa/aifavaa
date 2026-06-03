import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { useLanguage } from '@/contexts/LanguageContext';

interface SectionLockProps {
  sectionId: string;
  sectionTitle?: string;
  children: React.ReactNode;
}

const content = {
  zh: {
    lockTitle: '此内容需要解锁才能查看',
    lockDesc: '请填写您的信息，我们将在审核后为您开放访问权限。',
    namePlaceholder: '您的姓名',
    emailPlaceholder: '您的邮箱',
    companyPlaceholder: '公司 / 机构（选填）',
    submitBtn: '申请查看',
    submitting: '提交中...',
    successTitle: '申请已提交',
    successDesc: '我们将尽快审核您的申请，通过后会通过邮件通知您。',
    errorMsg: '提交失败，请稍后重试。',
    contactHint: '或直接联系我们',
    contactEmail: 'contact@aifavaa.com',
  },
  en: {
    lockTitle: 'This content requires access',
    lockDesc: 'Please fill in your information and we will grant you access after review.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    companyPlaceholder: 'Company / Organization (optional)',
    submitBtn: 'Request Access',
    submitting: 'Submitting...',
    successTitle: 'Request Submitted',
    successDesc: 'We will review your request shortly and notify you by email once approved.',
    errorMsg: 'Submission failed, please try again later.',
    contactHint: 'Or contact us directly',
    contactEmail: 'contact@aifavaa.com',
  },
};

const STORAGE_KEY = 'aifavaa_unlocked_sections';

export function getUnlockedSections(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function unlockSection(sectionId: string) {
  try {
    const current = getUnlockedSections();
    if (!current.includes(sectionId)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, sectionId]));
    }
  } catch {}
}

function markSectionRequested(sectionId: string) {
  try {
    localStorage.setItem(`aifavaa_requested_${sectionId}`, 'true');
  } catch {}
}

function isSectionRequested(sectionId: string): boolean {
  try {
    return localStorage.getItem(`aifavaa_requested_${sectionId}`) === 'true';
  } catch {
    return false;
  }
}

export function isSectionUnlocked(sectionId: string): boolean {
  return getUnlockedSections().includes(sectionId);
}

// Placeholder preview shown when section is locked
function LockedPreview({ sectionId }: { sectionId: string }) {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const [requested, setRequested] = useState(() => isSectionRequested(sectionId));

  const requestAccess = trpc.access.request.useMutation({
    onSuccess: () => {
      markSectionRequested(sectionId);
      setRequested(true);
    },
    onError: () => {
      setError(T.errorMsg);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setError('');
    requestAccess.mutate({ sectionId, name, email, company });
  };

  return (
    <div className="relative py-20 lg:py-28 flex items-center justify-center overflow-hidden">
      {/* Subtle background pattern matching site style */}
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

      {/* Lock card */}
      <div className="relative mx-4 w-full max-w-md">
        {/* Glow border */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/30 via-transparent to-cyan-500/30 pointer-events-none" />
        <div className="relative rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl p-8 shadow-2xl">
          {requested ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-3xl">
                ✅
              </div>
              <h3 className="text-lg font-bold text-white">{T.successTitle}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{T.successDesc}</p>
              <p className="mt-4 text-xs text-slate-500">
                {T.contactHint}:{' '}
                <a
                  href={`mailto:${T.contactEmail}`}
                  className="text-cyan-400 hover:text-cyan-300 transition underline underline-offset-2"
                >
                  {T.contactEmail}
                </a>
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/15 text-3xl">
                  🔒
                </div>
                <h3 className="text-lg font-bold text-white">{T.lockTitle}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{T.lockDesc}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={T.namePlaceholder}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={T.emailPlaceholder}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition"
                />
                <input
                  type="text"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  placeholder={T.companyPlaceholder}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition"
                />

                {error && <p className="text-xs text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={requestAccess.isPending || !name.trim() || !email.trim()}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {requestAccess.isPending ? T.submitting : T.submitBtn}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-slate-500">
                {T.contactHint}:{' '}
                <a
                  href={`mailto:${T.contactEmail}`}
                  className="text-cyan-400 hover:text-cyan-300 transition underline underline-offset-2"
                >
                  {T.contactEmail}
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SectionLock({ sectionId, children }: SectionLockProps) {
  const [unlocked] = useState(() => isSectionUnlocked(sectionId));

  if (unlocked) {
    return <>{children}</>;
  }

  // Do NOT render children to DOM when locked — show placeholder only
  return <LockedPreview sectionId={sectionId} />;
}
