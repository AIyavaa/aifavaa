import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';
import { trpc } from '@/lib/trpc';

export default function ConsultationForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    interest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitMutation = trpc.consultation.submit.useMutation({
    onSuccess: () => {
      toast.success(language === 'zh' ? '提交成功！我们将在 24 小时内与您联系。' : 'Submitted! We will contact you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', company: '', role: '', interest: '', message: '' });
      setIsSubmitting(false);
    },
    onError: () => {
      toast.error(language === 'zh' ? '提交失败，请直接通过邮件联系我们。' : 'Submission failed. Please contact us directly via email.');
      setIsSubmitting(false);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      toast.error(t('errorMessage', language));
      return;
    }
    setIsSubmitting(true);
    submitMutation.mutate({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      position: formData.role || undefined,
      investmentStage: formData.interest || undefined,
      message: formData.message || undefined,
    });
  };

  return (
    <section id="consultation" className="relative py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 lg:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>💼</span>
            <span>{language === 'zh' ? '投资者咨询' : 'Investor Consultation'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {t('consultationTitle', language)}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">{t('consultationSubtitle', language)}</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            {t('consultationDescription', language)}
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-5 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  {t('name', language)} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('namePlaceholder', language)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  {t('email', language)} <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('emailPlaceholder', language)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                  required
                />
              </div>
            </div>

            {/* Phone & Company Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  {t('phone', language)}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('phonePlaceholder', language)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  {t('company', language)} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('companyPlaceholder', language)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                  required
                />
              </div>
            </div>

            {/* Role & Interest Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  {t('role', language)}
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder={t('rolePlaceholder', language)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  {t('interest', language)}
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                >
                  <option value="">{t('selectPlaceholder', language)}</option>
                  <option value="investment">{t('investmentOpportunity', language)}</option>
                  <option value="partnership">{t('businessPartnership', language)}</option>
                  <option value="product">{t('productExperience', language)}</option>
                  <option value="other">{t('other', language)}</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-white mb-2">
                {t('message', language)}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('messagePlaceholder', language)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-400/30 text-white hover:from-blue-500/40 hover:to-cyan-500/40 hover:border-blue-400/50 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (language === 'zh' ? '提交中...' : 'Submitting...') : t('submit', language)}
              </button>
              <button
                type="reset"
                className="px-6 py-3 rounded-xl font-bold text-sm border border-white/12 text-slate-300 hover:text-white hover:bg-white/5 transition-all hover:-translate-y-0.5"
              >
                {t('clear', language)}
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-slate-400 mb-3">{t('contactUs', language)}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="mailto:evaforwork@163.com" className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
                  <span>📧</span>
                  <span>evaforwork@163.com</span>
                </a>
                <a href="https://wa.me/6593463156" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
                  <span>💬</span>
                  <span>WhatsApp: +65 93463156</span>
                </a>
                <div className="flex items-center gap-2 text-blue-300">
                  <span>🔗</span>
                  <span>WeChat: Yyyyylyll99</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
