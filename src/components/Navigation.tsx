import { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setIsScrolled(scrollTop > 30);
      setScrollProgress(progress);

      // Active section detection
      const sections = navItems.map(item => item.sectionId);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', sectionId: 'hero' },
    { id: 'about', label: 'About', sectionId: 'about' },
    { id: 'projects', label: 'Projects', sectionId: 'projects' },
    { id: 'skills', label: 'Skills', sectionId: 'skills' },
    { id: 'contact', label: 'Contact', sectionId: 'contact' },
  ];

  return (
    <>
      {/* Ultra-Refined Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto max-w-[1400px] px-6">
          {/* Main Navigation Container */}
          <div className={`relative transition-all duration-700 ${isScrolled
              ? 'backdrop-blur-3xl bg-[#02000d]/95 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-[#131c80]/20'
              : 'backdrop-blur-xl bg-[#02000d]/80 border-b border-[#131c80]/10'
            } rounded-2xl`}>

            {/* Elegant Gradient Background */}
            <div className="absolute inset-0 opacity-20 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5AA8D6]/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative px-6 lg:px-8 py-4 flex items-center justify-between">

              {/* Minimalist Logo */}
              <button
                onClick={() => scrollToSection('hero')}
                className="group flex items-center gap-3"
              >
                {/* Logo Icon */}
                <div className="relative w-10 h-10 rounded-xl overflow-hidden">

                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="src\image\—Pngtree—n circle letter initial logo_4835121_processed.png" alt="logo" />
                  </div>
                  {/* Subtle Glow */}

                </div>

                {/* Brand Text */}
                <div className="hidden sm:flex flex-col">
                  <span className="text-base font-bold text-slate-100 tracking-tight leading-none">
                    Nilanjan Nayak
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium tracking-wider mt-0.5">
                    DEVELOPER
                  </span>
                </div>
              </button>

              {/* Refined Desktop Navigation */}
              <div className="hidden lg:flex items-center">
                <div className="flex items-center gap-1 px-2 py-1.5 rounded-xl bg-[#050939]/30 backdrop-blur-sm border border-[#131c80]/20">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.sectionId;

                    return (
                      <button
                        key={item.sectionId}
                        onClick={() => scrollToSection(item.sectionId)}
                        className="group relative px-5 py-2 rounded-lg transition-all duration-300"
                      >
                        {/* Active Background */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[#3066be]/90 to-[#5AA8D6]/90 rounded-lg shadow-lg" />
                        )}

                        {/* Hover Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#3066be]/0 to-[#5AA8D6]/0 group-hover:from-[#3066be]/20 group-hover:to-[#5AA8D6]/20 rounded-lg transition-all duration-300" />

                        {/* Text */}
                        <span className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                          }`}>
                          {item.label}
                        </span>

                        {/* Active Indicator */}
                        {isActive && (
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00bfff] shadow-[0_0_8px_rgba(0,191,255,0.8)]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Area */}
              <div className="flex items-center gap-3">
                {/* Premium CTA */}
                <a
                  href="/resume.pdf"
                  download
                  className="hidden sm:flex group relative items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(90,168,214,0.35)]"
                >
                  {/* Shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <Download size={16} className="text-white relative z-10" />
                  <span className="text-sm font-semibold text-white relative z-10">Resume</span>
                </a>

                {/* Mobile Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden w-10 h-10 rounded-lg bg-[#050939]/50 border border-[#131c80]/30 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:text-[#5AA8D6] hover:border-[#3066be]/40 transition-all duration-300"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Elegant Progress Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#131c80]/30 to-transparent">
              <div
                className="h-full bg-gradient-to-r from-[#3066be] via-[#5AA8D6] to-[#00bfff] transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Refined Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        {/* Premium Backdrop */}
        <div
          className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-b from-[#02000d]/98 via-[#050939]/98 to-[#02000d]/98"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-center">
          {/* Navigation Items */}
          <div className="px-8 space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.sectionId;

              return (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`w-full text-left transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className={`relative px-6 py-4 rounded-xl transition-all duration-300 ${isActive
                      ? 'bg-gradient-to-r from-[#3066be]/30 to-[#5AA8D6]/30 border-l-4 border-[#5AA8D6]'
                      : 'bg-[#050939]/20 border-l-4 border-transparent hover:border-[#3066be]/40 hover:bg-[#050939]/40'
                    }`}>
                    {/* Number */}
                    <div className={`text-xs font-mono mb-1 transition-colors duration-300 ${isActive ? 'text-[#5AA8D6]' : 'text-slate-600'
                      }`}>
                      0{index + 1}
                    </div>

                    {/* Label */}
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400'
                        }`}>
                        {item.label}
                      </span>

                      {isActive && (
                        <ArrowUpRight size={18} className="text-[#5AA8D6]" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
            {/* CTA */}
            <a
              href="/resume.pdf"
              download
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <Download size={20} className="text-white relative z-10" />
              <span className="text-base font-semibold text-white relative z-10">Download Resume</span>
            </a>

            {/* Contact */}
            <div className="text-center">
              <p className="text-xs text-slate-600 uppercase tracking-widest mb-1">Contact</p>
              <a href="mailto:your.email@example.com" className="text-sm text-[#5AA8D6] hover:text-[#00bfff] transition-colors">
                your.email@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
