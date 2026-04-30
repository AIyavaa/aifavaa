import { useState } from 'react';
import { toast } from 'sonner';

export default function ConsultationForm() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 验证必填字段
      if (!formData.name || !formData.email || !formData.company) {
        toast.error('请填写所有必填字段');
        setIsSubmitting(false);
        return;
      }

      // 发送邮件到您的邮箱
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('感谢您的咨询！我们会尽快与您联系。');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          role: '',
          interest: '',
          message: '',
        });
      } else {
        // 如果后端不可用，显示备选联系方式
        toast.success('感谢您的咨询！请直接联系我们：evaforwork@163.com 或 WeChat: Yyyyylyll99');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          role: '',
          interest: '',
          message: '',
        });
      }
    } catch (error) {
      // 显示备选联系方式
      toast.success('感谢您的咨询！请直接联系我们：evaforwork@163.com 或 WeChat: Yyyyylyll99');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        interest: '',
        message: '',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation" className="relative py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 lg:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>💼</span>
            <span>Investor Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            加入 AIyavaa 投资者社群
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">Let&apos;s build the AI video ecosystem together</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            如果您对 AIyavaa 的投资机会感兴趣，或想了解更多关于平台的信息，请填写下方表单。我们的团队会在 24 小时内与您联系。
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  姓名 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="请输入您的姓名"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  邮箱 <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="请输入您的邮箱"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                  required
                />
              </div>
            </div>

            {/* Phone & Company Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  电话
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="请输入您的电话号码"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  公司名称 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="请输入您的公司名称"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                  required
                />
              </div>
            </div>

            {/* Role & Interest Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  职位
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="例如：投资总监、基金经理"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  您的兴趣
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all"
                >
                  <option value="">请选择</option>
                  <option value="investment">投资机会</option>
                  <option value="partnership">商业合作</option>
                  <option value="product">产品体验</option>
                  <option value="other">其他</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-white mb-2">
                备注信息
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="请告诉我们您的想法或问题..."
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
                {isSubmitting ? '提交中...' : '提交咨询'}
              </button>
              <button
                type="reset"
                className="px-6 py-3 rounded-xl font-bold text-sm border border-white/12 text-slate-300 hover:text-white hover:bg-white/5 transition-all hover:-translate-y-0.5"
              >
                清空
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-slate-400 mb-3">或直接联系我们：</p>
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
