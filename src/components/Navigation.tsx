import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, Twitter } from 'lucide-react';
import { navItems, personalInfo } from '../data/portfolio';

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

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
                <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br ">
                  <img src="src\image\—Pngtree—n circle letter initial logo_4835121_processed.png" alt="" />
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300" />
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

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-[#1a1f35] rounded-lg transition-colors"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#02000d]/95 backdrop-blur-xl transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.sectionId)}
              className={`text-2xl font-bold transition-colors ${activeSection === item.sectionId
                  ? 'text-[#5AA8D6]'
                  : 'text-slate-400 hover:text-white'
                }`}
            >
              {item.label}
            </button>
          ))}

          <div className="w-12 h-px bg-[#1a1f35]" />

          <div className="flex gap-6">
            {personalInfo.social.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#1a1f35] rounded-full text-slate-400 hover:text-[#5AA8D6] transition-colors"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
