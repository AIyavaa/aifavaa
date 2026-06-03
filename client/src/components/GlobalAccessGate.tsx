import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { useLanguage } from '@/contexts/LanguageContext';

const GLOBAL_UNLOCK_KEY = 'aifavaa_global_unlocked';
const GLOBAL_REQUESTED_KEY = 'aifavaa_global_requested';

function markRequested() {
  try { localStorage.setItem(GLOBAL_REQUESTED_KEY, 'true'); } catch {}
}
function isRequested(): boolean {
  try { return localStorage.getItem(GLOBAL_REQUESTED_KEY) === 'true'; } catch { return false; }
}

const T = {
  zh: {
    badge: '需要访问权限',
    title: '申请查看完整内容',
    desc: '以下板块包含 AIFavaa 的核心战略信息，需要申请后方可查看。审核通过后，您将可以一次性解锁全部内容。',
    sections: ['03 平台架构', '04 竞争分析', '05 谁在用', '06 商业模式', '07 我们是谁', '09 怎么实现'],
    namePlaceholder: '您的姓名 *',
    emailPlaceholder: '您的邮箱 *',
    companyPlaceholder: '公司 / 机构（选填）',
    submitBtn: '提交申请',
    submitting: '提交中...',
    successTitle: '申请已提交，感谢您的关注',
    successDesc: '我们将尽快审核您的申请，通过后将通过邮件通知您，届时您可以查看全部内容。',
    errorMsg: '提交失败，请稍后重试。',
    contactHint: '如有紧急需求，请直接联系我们',
    contactEmail: 'contact@aifavaa.com',
  },
  en: {
    badge: 'Access Required',
    title: 'Request Full Access',
    desc: 'The following sections contain core strategic information about AIFavaa. Submit a request to unlock all content at once.',
    sections: ['03 Architecture', '04 Competition', '05 Who Uses It', '06 Business Model', '07 Who We Are', '09 How We Do It'],
    namePlaceholder: 'Your Name *',
    emailPlaceholder: 'Your Email *',
    companyPlaceholder: 'Company / Organization (optional)',
    submitBtn: 'Submit Request',
    submitting: 'Submitting...',
    successTitle: 'Request Submitted — Thank You',
    successDesc: 'We will review your request shortly and notify you by email once approved.',
    errorMsg: 'Submission failed. Please try again.',
    contactHint: 'For urgent inquiries, contact us directly',
    contactEmail: 'contact@aifavaa.com',
  },
};

interface GlobalAccessGateProps {
  onUnlocked?: () => void;
}

export default function GlobalAccessGate({ onUnlocked }: GlobalAccessGateProps) {
  const { language } = useLanguage();
  const lang = (language as 'zh' | 'en') === 'en' ? 'en' : 'zh';
  const copy = T[lang];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [requested, setRequested] = useState(() => isRequested());

  const requestAccess = trpc.access.request.useMutation({
    onSuccess: () => {
      markRequested();
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
    requestAccess.mutate({ sectionId: 'all', name, email, company });
  };

  // Dev unlock shortcut via URL hash (e.g. #unlock=dev2024)
  if (typeof window !== 'undefined' && window.location.hash.includes('unlock=')) {
    const token = window.location.hash.split('unlock=')[1];
    if (token) {
      try { localStorage.setItem(GLOBAL_UNLOCK_KEY, 'true'); } catch {}
      onUnlocked?.();
    }
  }

  return (
    <section className="relative py-24 lg:py-32">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute left-1/3 top-1/3 w-64 h-64 bg-cyan-500/6 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-300">
            <span>🔒</span>
            {copy.badge}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-3">
          {copy.title}
        </h2>
        <p className="text-center text-sm text-slate-400 leading-relaxed mb-8">
          {copy.desc}
        </p>

        {/* Locked sections list */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {copy.sections.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/4 px-3 py-1.5 text-xs text-slate-400"
            >
              <span className="text-slate-600">🔒</span>
              {s}
            </span>
          ))}
        </div>

        {/* Card */}
        <div className="relative">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/25 via-transparent to-cyan-500/25 pointer-events-none" />
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-8 shadow-2xl">
            {requested ? (
              <div className="text-center py-4">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-4xl">
                  ✅
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{copy.successTitle}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">{copy.successDesc}</p>
                <div className="mt-6 pt-6 border-t border-white/8">
                  <p className="text-xs text-slate-500">
                    {copy.contactHint}:{' '}
                    <a
                      href={`mailto:${copy.contactEmail}`}
                      className="text-cyan-400 hover:text-cyan-300 transition underline underline-offset-2"
                    >
                      {copy.contactEmail}
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>
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
                  className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 py-3.5 text-sm font-bold text-white transition hover:opacity-90 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
                >
                  {requestAccess.isPending ? copy.submitting : copy.submitBtn}
                </button>

                <p className="text-center text-xs text-slate-500 pt-1">
                  {copy.contactHint}:{' '}
                  <a
                    href={`mailto:${copy.contactEmail}`}
                    className="text-cyan-400 hover:text-cyan-300 transition underline underline-offset-2"
                  >
                    {copy.contactEmail}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
