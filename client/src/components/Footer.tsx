import { useLanguage } from "@/contexts/LanguageContext";
const { language } = useLanguage();
export default function Footer() {
  return (
    <footer className="relative py-12 lg:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-10 mb-12 lg:mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30" />
              <span className="font-black text-white">AIyavaa</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              AI 视频生态平台，连接模型、创作者、品牌与用户。
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-white mb-4">产品</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#premium" className="hover:text-white transition-colors">AI 视频生成工作室</a></li>
              <li><a href="#premium" className="hover:text-white transition-colors">AI 品牌营销平台</a></li>
              <li><a href="#premium" className="hover:text-white transition-colors">AI 创作者经纪人</a></li>
              <li><a href="#premium" className="hover:text-white transition-colors">AI 内容交易市场</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">资源</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#market" className="hover:text-white transition-colors">市场机会</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">平台架构</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">发展路线图</a></li>
              <li><a href="#funding" className="hover:text-white transition-colors">融资计划</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">联系我们</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>Email: evaforwork@163.com</li>
              <li>Website: www.aiyavaa.com</li>
              <li>WeChat: Yyyyylyll99</li>
              <li>whatsapp: +65 93463156</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 lg:pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>&copy; 2026 AIyavaa. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
