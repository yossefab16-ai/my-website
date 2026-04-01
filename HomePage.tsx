import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-[#1a1a2e] border-b border-[#16213e] sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#0f0f23] text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-gray-400">
            <span className="flex items-center gap-1 hover:text-[#00d4ff] cursor-pointer transition">
              <Globe size={12} />
              العربية
              <ChevronDown size={10} />
            </span>
            <span className="hidden sm:inline">🔥 عروض حصرية للأعضاء الجدد</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <span className="hover:text-white cursor-pointer transition">📱 تحميل التطبيق</span>
            <span className="hover:text-white cursor-pointer transition">💬 الدعم المباشر</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff] to-[#0051ff] rounded-xl flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-105">
                1X
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff6b35] rounded-full flex items-center justify-center">
                <span className="text-[6px] font-bold text-white">BET</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black text-white tracking-tight">
                1x<span className="text-[#00d4ff]">Bet</span>
              </h1>
              <p className="text-[10px] text-gray-500 -mt-1 tracking-widest uppercase">Sports & Casino</p>
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { name: '⚽ الرياضة', active: true },
              { name: '🎰 الكازينو', active: false },
              { name: '🎮 الرياضات الإلكترونية', active: false },
              { name: '🃏 ألعاب مباشرة', active: false },
              { name: '🎲 ألعاب سريعة', active: false },
            ].map((item) => (
              <button
                key={item.name}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  item.active
                    ? 'bg-gradient-to-r from-[#00d4ff]/20 to-[#0051ff]/20 text-[#00d4ff] border border-[#00d4ff]/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition">
              <Search size={18} />
            </button>

            {location.pathname !== '/login' && (
              <>
                <Link
                  to="/login"
                  className="hidden sm:flex px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-200"
                >
                  تسجيل الدخول
                </Link>
                <a
                  href="https://1xbet.com/ar/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#00d4ff] to-[#0051ff] hover:from-[#00b8d9] hover:to-[#0040cc] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-1"
                >
                  🚀 إنشاء حساب
                </a>
              </>
            )}

            {/* Mobile menu button */}
            <button
              className="lg:hidden w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f0f23] border-t border-[#16213e] px-4 py-4 space-y-2 animate-slideDown">
          {['⚽ الرياضة', '🎰 الكازينو', '🎮 الرياضات الإلكترونية', '🃏 ألعاب مباشرة', '🎲 ألعاب سريعة'].map((item) => (
            <button
              key={item}
              className="w-full text-right px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
