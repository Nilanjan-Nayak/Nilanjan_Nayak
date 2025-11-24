import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code2, Send, Sparkles } from 'lucide-react';
import { navItems, personalInfo } from '../data/portfolio';
import logoImg from '../image/—Pngtree—n circle letter initial logo_4835121_processed.png';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.sectionId);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Icon mapping for nav items
  const iconMap: { [key: string]: any } = {
    hero: Home,
    about: User,
    projects: Briefcase,
    skills: Code2,
    contact: Send
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`relative transition-all duration-500 rounded-2xl ${isScrolled
              ? 'backdrop-blur-xl bg-[#02000d]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#1a1f35]/50'
              : 'backdrop-blur-sm bg-transparent border border-transparent'
              }`}
          >
            <div className="flex items-center justify-between px-4 py-3">
              {/* Logo */}
              <div
                onClick={() => scrollToSection('hero')}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br overflow-hidden rounded-lg">
                  <img
                    src={logoImg}
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg font-bold text-white leading-none tracking-tight group-hover:text-[#5AA8D6] transition-colors">
                    {personalInfo.name.split(' ')[0]}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                    Portfolio
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1 bg-[#0a0e1a]/50 p-1.5 rounded-full border border-[#1a1f35]/50 backdrop-blur-md">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.sectionId)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === item.sectionId
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white hover:bg-[#1a1f35]'
                      }`}
                  >
                    {activeSection === item.sectionId && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] rounded-full shadow-[0_0_15px_rgba(90,168,214,0.4)] -z-10 animate-fade-in" />
                    )}
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Social Icons & Mobile Toggle */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 pr-4 border-r border-[#1a1f35]">
                  {personalInfo.social.slice(0, 3).map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-[#5AA8D6] hover:bg-[#1a1f35] rounded-lg transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>

                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="hidden sm:flex px-4 py-2 bg-[#1a1f35] hover:bg-[#3066be] text-white text-sm font-medium rounded-lg transition-colors border border-[#3066be]/30"
                >
                  Resume
                </a>

                {/* Premium Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden relative p-2.5 text-slate-300 hover:text-white rounded-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Button Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f35] to-[#0a0e1a] group-hover:from-[#3066be] group-hover:to-[#5AA8D6] transition-all duration-300" />

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5AA8D6]/20 to-[#3066be]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="relative z-10">
                    {isMobileMenuOpen ? (
                      <X size={24} className="transition-transform duration-300 rotate-90" />
                    ) : (
                      <Menu size={24} className="transition-transform duration-300" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Premium Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#02000d] via-[#050939] to-[#02000d]">
          {/* Animated Orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#3066be]/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#5AA8D6]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(90,168,214,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(90,168,214,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col">
          {/* Header Section */}
          <div className="px-6 pt-24 pb-8">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles size={20} className="text-[#5AA8D6] animate-pulse" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Navigation Menu</span>
            </div>
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5AA8D6] to-[#3066be]">
              Explore Portfolio
            </h2>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 px-6 py-4 overflow-y-auto">
            <div className="space-y-3">
              {navItems.map((item, index) => {
                const Icon = iconMap[item.sectionId] || Home;
                const isActive = activeSection === item.sectionId;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.sectionId)}
                    className={`group relative w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 overflow-hidden ${isActive
                      ? 'bg-gradient-to-r from-[#3066be] to-[#5AA8D6] shadow-[0_0_30px_rgba(90,168,214,0.3)]'
                      : 'bg-[#0a0e1a]/60 hover:bg-[#1a1f35] border border-[#1a1f35]'
                      }`}
                    style={{
                      animation: isMobileMenuOpen ? `slideInRight 0.4s ease-out ${index * 0.1}s both` : 'none'
                    }}
                  >
                    {/* Background Glow */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3066be]/50 to-[#5AA8D6]/50 blur-xl" />
                    )}

                    {/* Icon Container */}
                    <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${isActive
                      ? 'bg-white/20 shadow-lg'
                      : 'bg-[#131c80]/30 group-hover:bg-[#3066be]/30'
                      }`}>
                      <Icon
                        size={22}
                        className={`transition-all duration-300 ${isActive
                          ? 'text-white'
                          : 'text-slate-400 group-hover:text-[#5AA8D6]'
                          }`}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 flex-1 text-left">
                      <div className={`text-lg font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}>
                        {item.label}
                      </div>
                      <div className={`text-xs font-mono transition-colors ${isActive ? 'text-white/70' : 'text-slate-500 group-hover:text-slate-400'
                        }`}>
                        Section {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div className={`relative z-10 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                      }`}>
                      <svg
                        className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-white rounded-r-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Section */}
          <div className="px-6 py-6 border-t border-[#1a1f35]">
            {/* Social Links */}
            <div className="mb-6">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Connect With Me</div>
              <div className="flex gap-3">
                {personalInfo.social.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center w-12 h-12 bg-[#0a0e1a] hover:bg-gradient-to-br hover:from-[#3066be] hover:to-[#5AA8D6] border border-[#1a1f35] hover:border-transparent rounded-xl transition-all duration-300 overflow-hidden"
                      style={{
                        animation: isMobileMenuOpen ? `fadeInUp 0.4s ease-out ${0.5 + index * 0.1}s both` : 'none'
                      }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#5AA8D6]/20 to-[#3066be]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

                      <Icon
                        size={20}
                        className="relative z-10 text-slate-400 group-hover:text-white transition-colors"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              download
              className="group relative flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] hover:from-[#5AA8D6] hover:to-[#00bfff] rounded-xl transition-all duration-300 overflow-hidden shadow-[0_0_30px_rgba(90,168,214,0.3)] hover:shadow-[0_0_40px_rgba(90,168,214,0.5)]"
              style={{
                animation: isMobileMenuOpen ? 'fadeInUp 0.4s ease-out 0.8s both' : 'none'
              }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>

              <span className="text-white font-bold relative z-10">Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
