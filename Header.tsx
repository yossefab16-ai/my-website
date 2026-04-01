import { Shield, Award, Headphones, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] border-t border-[#16213e]">
      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { icon: Shield, title: 'آمان مضمون', desc: 'تشفير SSL 256-bit' },
            { icon: Award, title: 'مرخص عالمياً', desc: 'ترخيص كوراساو' },
            { icon: Headphones, title: 'دعم 24/7', desc: 'فريق دعم متخصص' },
            { icon: CreditCard, title: 'سحب فوري', desc: 'أكثر من 100 طريقة دفع' },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#0051ff]/10 border border-[#00d4ff]/20 flex items-center justify-center group-hover:border-[#00d4ff]/50 transition">
                <item.icon size={20} className="text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="border-t border-[#16213e] pt-8 mb-8">
          <h4 className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-4 text-center">طرق الدفع المتاحة</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['💳 Visa', '💳 MasterCard', '₿ Bitcoin', 'Ξ Ethereum', '🏦 تحويل بنكي', '📱 Apple Pay', '📱 Google Pay', '💰 Skrill', '💰 Neteller', '💰 Perfect Money'].map((method) => (
              <span
                key={method}
                className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 text-xs font-medium hover:bg-white/10 hover:text-white transition cursor-pointer border border-white/5 hover:border-white/10"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {[
            {
              title: 'الرياضة',
              links: ['كرة القدم', 'كرة السلة', 'التنس', 'الكريكيت', 'الهوكي'],
            },
            {
              title: 'الكازينو',
              links: ['سلوتس', 'بلاك جاك', 'روليت', 'بوكر', 'باكارات'],
            },
            {
              title: 'معلومات',
              links: ['عن الموقع', 'الشروط والأحكام', 'سياسة الخصوصية', 'المقامرة المسؤولة'],
            },
            {
              title: 'المساعدة',
              links: ['الأسئلة الشائعة', 'اتصل بنا', 'الدعم المباشر', 'قواعد المراهنة'],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold text-sm mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm hover:text-[#00d4ff] transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-[#16213e] pt-6 text-center">
          <p className="text-gray-600 text-xs leading-relaxed max-w-2xl mx-auto mb-3">
            هذا الموقع للأغراض التعليمية فقط. المقامرة قد تسبب الإدمان. يرجى اللعب بمسؤولية. يجب أن يكون عمرك 18 عامًا أو أكثر للمشاركة.
          </p>
          <p className="text-gray-700 text-xs">
            © 2024 1xBet. جميع الحقوق محفوظة. | 🔞 +18
          </p>
        </div>
      </div>
    </footer>
  );
}
