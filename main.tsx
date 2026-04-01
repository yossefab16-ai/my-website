import { useState } from 'react';
// react-router-dom not needed in this page
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Check, Shield, Gift } from 'lucide-react';
import Header from '../components/Header';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white font-['Inter']" dir="rtl">
      <Header />

      <div className="relative min-h-[calc(100vh-120px)] flex items-center justify-center py-12 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00d4ff]/8 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#0051ff]/8 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#7c3aed]/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            
            {/* Left Side - Form */}
            <div className="bg-[#1a1a2e] p-8 md:p-12 order-2 lg:order-1">
              {/* Toggle Tabs */}
              <div className="flex items-center bg-[#0f0f23] rounded-2xl p-1.5 mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    isLogin
                      ? 'bg-gradient-to-r from-[#00d4ff] to-[#0051ff] text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  تسجيل الدخول
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    !isLogin
                      ? 'bg-gradient-to-r from-[#00d4ff] to-[#0051ff] text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  إنشاء حساب جديد
                </button>
              </div>

              {/* Header */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                  {isLogin ? 'مرحباً بعودتك! 👋' : 'انضم إلينا الآن! 🚀'}
                </h2>
                <p className="text-gray-400 text-sm">
                  {isLogin
                    ? 'قم بتسجيل الدخول للوصول إلى حسابك ومتابعة رهاناتك'
                    : 'أنشئ حسابك واحصل على مكافأة ترحيبية تصل إلى $500'}
                </p>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: '🔵', name: 'Facebook' },
                  { icon: '🔴', name: 'Google' },
                  { icon: '⬛', name: 'Apple' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="https://1xbet.com/ar/registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all text-sm text-gray-300 hover:text-white"
                  >
                    <span>{social.icon}</span>
                    <span className="hidden sm:inline text-xs">{social.name}</span>
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gradient-to-l from-white/10 to-transparent"></div>
                <span className="text-gray-500 text-xs font-medium">أو</span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  if (!isLogin) {
                    window.open('https://1xbet.com/ar/registration', '_blank', 'noopener,noreferrer');
                  }
                }}>
                {/* Name (Register only) */}
                {!isLogin && (
                  <div className="space-y-1.5">
                    <label className="text-gray-400 text-xs font-semibold block">الاسم الكامل</label>
                    <div className="relative">
                      <User size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="أدخل اسمك الكامل"
                        className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-[#0f0f23] border border-white/10 focus:border-[#00d4ff]/50 focus:ring-2 focus:ring-[#00d4ff]/20 text-white placeholder-gray-600 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-gray-400 text-xs font-semibold block">البريد الإلكتروني</label>
                  <div className="relative">
                    <Mail size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@email.com"
                      className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-[#0f0f23] border border-white/10 focus:border-[#00d4ff]/50 focus:ring-2 focus:ring-[#00d4ff]/20 text-white placeholder-gray-600 text-sm outline-none transition-all"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Phone (Register only) */}
                {!isLogin && (
                  <div className="space-y-1.5">
                    <label className="text-gray-400 text-xs font-semibold block">رقم الهاتف</label>
                    <div className="relative">
                      <Phone size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+966 5XX XXX XXXX"
                        className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-[#0f0f23] border border-white/10 focus:border-[#00d4ff]/50 focus:ring-2 focus:ring-[#00d4ff]/20 text-white placeholder-gray-600 text-sm outline-none transition-all"
                        dir="ltr"
                      />
                    </div>
                  </div>
                )}

                {/* Password */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-gray-400 text-xs font-semibold">كلمة المرور</label>
                    {isLogin && (
                      <button className="text-[#00d4ff] text-xs font-medium hover:underline">نسيت كلمة المرور؟</button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pr-12 pl-12 py-3.5 rounded-xl bg-[#0f0f23] border border-white/10 focus:border-[#00d4ff]/50 focus:ring-2 focus:ring-[#00d4ff]/20 text-white placeholder-gray-600 text-sm outline-none transition-all"
                      dir="ltr"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {/* Password Strength (Register only) */}
                  {!isLogin && password.length > 0 && (
                    <div className="flex items-center gap-2 mt-2">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`flex-1 h-1 rounded-full transition-all ${
                            password.length >= level * 3
                              ? level <= 1
                                ? 'bg-red-500'
                                : level <= 2
                                ? 'bg-orange-500'
                                : level <= 3
                                ? 'bg-yellow-500'
                                : 'bg-green-500'
                              : 'bg-white/10'
                          }`}
                        ></div>
                      ))}
                      <span className="text-xs text-gray-500">
                        {password.length < 4 ? 'ضعيفة' : password.length < 7 ? 'متوسطة' : password.length < 10 ? 'جيدة' : 'قوية'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Checkbox */}
                {isLogin ? (
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                        rememberMe
                          ? 'bg-gradient-to-r from-[#00d4ff] to-[#0051ff] border-transparent'
                          : 'border-gray-600 group-hover:border-gray-400'
                      }`}
                      onClick={() => setRememberMe(!rememberMe)}
                    >
                      {rememberMe && <Check size={12} className="text-white" />}
                    </div>
                    <span className="text-gray-400 text-sm">تذكرني</span>
                  </label>
                ) : (
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all mt-0.5 flex-shrink-0 ${
                        agreed
                          ? 'bg-gradient-to-r from-[#00d4ff] to-[#0051ff] border-transparent'
                          : 'border-gray-600 group-hover:border-gray-400'
                      }`}
                      onClick={() => setAgreed(!agreed)}
                    >
                      {agreed && <Check size={12} className="text-white" />}
                    </div>
                    <span className="text-gray-400 text-sm leading-relaxed">
                      أوافق على{' '}
                      <a href="#" className="text-[#00d4ff] hover:underline">الشروط والأحكام</a>
                      {' '}و{' '}
                      <a href="#" className="text-[#00d4ff] hover:underline">سياسة الخصوصية</a>
                      {' '}وأؤكد أن عمري 18 عامًا أو أكثر
                    </span>
                  </label>
                )}

                {/* Submit Button */}
                {isLogin ? (
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-base bg-gradient-to-r from-[#00d4ff] to-[#0051ff] hover:from-[#00b8d9] hover:to-[#0040cc] text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
                  >
                    تسجيل الدخول
                    <ArrowRight size={18} className="rotate-180" />
                  </button>
                ) : (
                  <a
                    href="https://1xbet.com/ar/registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl font-bold text-base bg-gradient-to-r from-[#00d4ff] to-[#0051ff] hover:from-[#00b8d9] hover:to-[#0040cc] text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 mt-2 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#ff6b35] to-[#ff3366] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative flex items-center gap-2">
                      🚀 إنشاء حساب في 1xBet الرسمي
                      <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                    </span>
                  </a>
                )}

                {/* Redirect Notice for Register */}
                {!isLogin && (
                  <div className="mt-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                    <p className="text-green-400 text-xs font-medium flex items-center justify-center gap-2">
                      <Shield size={14} />
                      سيتم تحويلك إلى موقع 1xBet الرسمي لإكمال التسجيل بأمان
                    </p>
                  </div>
                )}
              </form>

              {/* Bottom Link */}
              <p className="text-center text-gray-500 text-sm mt-6">
                {isLogin ? (
                  <>
                    ليس لديك حساب؟{' '}
                    <a
                      href="https://1xbet.com/ar/registration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00d4ff] font-semibold hover:underline"
                    >
                      🚀 سجل الآن في 1xBet
                    </a>
                  </>
                ) : (
                  <>
                    لديك حساب بالفعل؟{' '}
                    <button
                      onClick={() => setIsLogin(true)}
                      className="text-[#00d4ff] font-semibold hover:underline"
                    >
                      تسجيل الدخول
                    </button>
                  </>
                )}
              </p>
            </div>

            {/* Right Side - Promotional */}
            <div className="relative bg-gradient-to-br from-[#00d4ff] to-[#0051ff] p-8 md:p-12 flex flex-col justify-center order-1 lg:order-2 min-h-[300px] lg:min-h-0">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}></div>

              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center text-3xl animate-bounce" style={{ animationDuration: '3s' }}>
                ⚽
              </div>
              <div className="absolute bottom-12 right-8 w-14 h-14 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center text-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                🏆
              </div>
              <div className="absolute top-1/2 right-12 w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center text-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                🎰
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Gift size={16} className="text-yellow-300" />
                  <span className="text-white text-sm font-medium">عرض حصري للأعضاء الجدد</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  مكافأة
                  <br />
                  <span className="text-yellow-300">100%</span>
                  <br />
                  ترحيبية
                </h2>

                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  احصل على مكافأة تصل إلى <strong className="text-yellow-300">$500</strong> على أول إيداع لك + 150 دورة مجانية
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {[
                    'سحب فوري لأرباحك',
                    'أكثر من 50 رياضة متاحة',
                    'بث مباشر مجاني',
                    'دعم على مدار الساعة',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-white/90 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Register Button */}
                <a
                  href="https://1xbet.com/ar/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-yellow-400 hover:bg-yellow-300 text-gray-900 shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 mt-2 group"
                >
                  <span className="text-xl group-hover:animate-bounce">🚀</span>
                  سجّل الآن في 1xBet
                  <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                </a>

                {/* Trust */}
                <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield size={16} className="text-yellow-300" />
                    <span className="text-white/80 text-xs">مرخص وآمن</span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/80 text-xs">🔒 SSL مشفر</span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/80 text-xs">🔞 +18</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Login Options */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-xs mb-3">أو سجل مباشرة عبر الموقع الرسمي</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {['📱 رقم الهاتف', '💬 Telegram', '🆔 بطاقة الهوية', '🔑 رمز التفعيل'].map((method) => (
                <a
                  key={method}
                  href="https://1xbet.com/ar/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#1a1a2e] border border-white/5 hover:border-[#00d4ff]/30 text-gray-400 hover:text-[#00d4ff] text-xs font-medium transition-all"
                >
                  {method}
                </a>
              ))}
            </div>
            {/* Big CTA to official site */}
            <a
              href="https://1xbet.com/ar/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#ff6b35] to-[#ff3366] hover:from-[#ff5722] hover:to-[#e91e63] text-white font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
            >
              🌟 التسجيل السريع في موقع 1xBet الرسمي
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
