import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowUpRight, FileDown, Calendar, MapPin, Terminal } from 'lucide-react';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeProject, setActiveProject] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const featuredProjects = [
    { name: "E-Commerce Platform", tech: "React + Node.js", year: "2025", image: "IMG-20251021-WA0067.jpg" },
    { name: "Analytics Dashboard", tech: "Next.js + TypeScript", year: "2024", image: "image.svg" },
    { name: "Mobile Banking App", tech: "React Native", year: "2024", image: "—Pngtree—n circle letter initial logo_4835121_processed.png" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollProgress(Math.min(scrolled / windowHeight, 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen bg-[#02000d] text-slate-50 overflow-hidden"
    >
      {/* Premium Dark Blue Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(19,28,128,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(19,28,128,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Elegant Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050939] via-[#02000d] to-[#07203f] opacity-90" />

      {/* Premium Blue Accent Line */}
      <div
        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#5AA8D6] to-transparent"
        style={{
          opacity: 0.3 + scrollProgress * 0.4,
          transform: `scaleY(${0.3 + scrollProgress * 0.7})`,
          boxShadow: '0 0 20px rgba(90, 168, 214, 0.5)'
        }}
      />

      {/* Subtle Blue Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#131c80] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3066be] rounded-full blur-[120px] opacity-15" />



      {/* Main Content */}
      <div className="relative min-h-screen flex items-center pt-12 sm:pt-16">
        <div className="container mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">

            {/* Left Side - Typography Focus */}
            <div className="space-y-5 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 relative z-10">
              {/* Premium Metadata */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#131c80]/20 border border-[#3066be]/20 rounded-full backdrop-blur-sm">
                  <MapPin size={10} className="text-[#5AA8D6]" />
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium tracking-wide">India</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#131c80]/20 border border-[#3066be]/20 rounded-full backdrop-blur-sm">
                  <Calendar size={10} className="text-[#5AA8D6]" />
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium tracking-wide">{currentTime.toLocaleDateString('en-US', { year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#131c80]/20 border border-[#3066be]/20 rounded-full backdrop-blur-sm">
                  <Terminal size={10} className="text-[#5AA8D6]" />
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium tracking-wide hidden xs:inline">Full-Stack Developer</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium tracking-wide xs:hidden">Developer</span>
                </div>
              </div>

              {/* Premium Typography with Animated Gradient */}
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div className="space-y-3">
                  <h1 className="text-[clamp(2.25rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.03em]">
                    <span className="inline-block text-slate-50 animate-fade-in">NILANJAN</span>
                    <br />
                    <span className="inline-block relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5AA8D6] via-[#3066be] to-[#00bfff] animate-gradient-x drop-shadow-[0_0_30px_rgba(90,168,214,0.4)]">
                        NAYAK
                      </span>
                      {/* Animated underline */}
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#5AA8D6] via-[#3066be] to-[#00bfff] rounded-full opacity-60 animate-width" />
                    </span>
                  </h1>

                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-[#5AA8D6] via-[#3066be] to-transparent shadow-[0_0_15px_rgba(90,168,214,0.6)] animate-pulse-glow" />
                    <div className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-[#3066be] to-transparent opacity-50" />
                    <div className="h-[2px] w-4 bg-gradient-to-r from-[#3066be] to-transparent opacity-30" />
                  </div>
                </div>

                {/* Premium Subtitle */}
                <div className="space-y-2.5 max-w-lg">
                  <p className="text-base sm:text-lg md:text-xl font-light text-slate-200 leading-relaxed animate-fade-in-up">
                    Crafting digital products with <span className="text-[#5AA8D6] font-medium">precision</span>, <span className="text-[#5AA8D6] font-medium">elegance</span>, and <span className="text-[#5AA8D6] font-medium">purpose</span>.
                  </p>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    Transforming ideas into exceptional digital experiences.
                  </p>
                </div>
              </div>

              {/* Premium Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-5 lg:gap-6 pt-2 sm:pt-3">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3066be]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative text-center lg:text-left space-y-0.5">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-br from-[#5AA8D6] to-[#3066be] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">5+</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-[0.12em] font-semibold">Years Exp.</div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3066be]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative text-center space-y-0.5">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-br from-[#5AA8D6] to-[#3066be] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">50+</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-[0.12em] font-semibold">Projects</div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3066be]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative text-center lg:text-right space-y-0.5">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-br from-[#5AA8D6] to-[#3066be] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">15+</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-[0.12em] font-semibold">Clients</div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-5">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] hover:from-[#5AA8D6] hover:to-[#00bfff] text-white font-bold text-sm overflow-hidden transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(90,168,214,0.3)] hover:shadow-[0_0_30px_rgba(90,168,214,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-2">
                    View Projects
                    <ArrowUpRight
                      className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </button>

                <a
                  href="/resume.pdf"
                  download="Nilanjan_Resume.pdf"
                  className="group w-full sm:w-auto px-6 py-3 border-2 border-[#3066be]/50 hover:border-[#5AA8D6] bg-[#050939]/30 hover:bg-[#131c80]/50 backdrop-blur-sm text-slate-100 font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 rounded-lg hover:shadow-[0_0_20px_rgba(90,168,214,0.2)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Premium Social Links */}
              <div className="flex items-center gap-1.5 pt-3">
                <span className="text-[10px] text-slate-500 mr-1.5 uppercase tracking-[0.12em] font-semibold">Connect</span>
                <div className="h-px w-6 bg-gradient-to-r from-[#3066be]/50 to-transparent" />
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group p-2 text-slate-400 hover:text-[#5AA8D6] transition-all duration-300 hover:scale-110 hover:bg-[#131c80]/30 rounded-lg"
                      aria-label={social.label}
                    >
                      <Icon size={16} className="group-hover:drop-shadow-[0_0_8px_rgba(90,168,214,0.8)]" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Code Editor Style Project Showcase */}
            <div className="relative order-1 lg:order-2 w-full max-w-xs lg:max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              {/* Code Editor Window */}
              <div className="relative aspect-[3/4] bg-[#0a0e1a] border-2 border-[#1a1f35] rounded-lg overflow-hidden shadow-[0_0_40px_rgba(19,28,128,0.4)] hover:shadow-[0_0_60px_rgba(90,168,214,0.3)] transition-all duration-500">

                {/* Terminal Header Bar */}
                <div className="relative bg-gradient-to-r from-[#0d1117] to-[#161b22] border-b border-[#1a1f35] px-3 py-2 flex items-center justify-between">
                  {/* Window Controls */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors" />
                  </div>

                  {/* File Tab */}
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-[#0a0e1a] border border-[#1a1f35] rounded text-[9px] font-mono text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5AA8D6]" />
                    <span>project.tsx</span>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-[#27c93f] animate-pulse" />
                  </div>
                </div>

                {/* Code Editor Content Area */}
                <div className="relative h-[calc(100%-2.5rem)]">
                  {/* Project Image Background with Code Overlay */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img
                      src={`/src/image/${featuredProjects[activeProject].image}`}
                      alt="Featured project showcase"
                      key={activeProject}
                      className="w-full h-full object-cover opacity-30 animate-slideIn"
                    />
                    {/* Code Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(90,168,214,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(90,168,214,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent" />

                  {/* Code Content */}
                  <div className="relative h-full flex flex-col justify-between p-4">
                    {/* Line Numbers & Code Preview */}
                    <div className="space-y-1 font-mono text-[9px] leading-relaxed">
                      <div className="flex items-start gap-2 opacity-40">
                        <span className="text-slate-600 select-none">01</span>
                        <span className="text-slate-500">{'// Featured Project'}</span>
                      </div>
                      <div className="flex items-start gap-2 opacity-50">
                        <span className="text-slate-600 select-none">02</span>
                        <span className="text-slate-400">
                          <span className="text-[#ff7b72]">const</span>{' '}
                          <span className="text-[#79c0ff]">project</span>{' '}
                          <span className="text-slate-400">=</span>{' '}
                          <span className="text-[#a5d6ff]">{'{'}</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-2 opacity-50">
                        <span className="text-slate-600 select-none">03</span>
                        <span className="text-slate-400 pl-3">
                          <span className="text-[#79c0ff]">name:</span>{' '}
                          <span className="text-[#a5d6ff]">"{featuredProjects[activeProject].name}"</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-2 opacity-50">
                        <span className="text-slate-600 select-none">04</span>
                        <span className="text-slate-400 pl-3">
                          <span className="text-[#79c0ff]">tech:</span>{' '}
                          <span className="text-[#a5d6ff]">"{featuredProjects[activeProject].tech}"</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-2 opacity-40">
                        <span className="text-slate-600 select-none">05</span>
                        <span className="text-[#a5d6ff]">{'}'}</span>
                      </div>
                    </div>

                    {/* Project Info Card */}
                    <div className="space-y-3">
                      <div className="bg-[#0d1117]/90 backdrop-blur-md border border-[#1a1f35] rounded-lg p-3 space-y-2">
                        {/* Year Badge */}
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#1a1f35] border border-[#3066be]/30 rounded text-[9px] font-mono text-[#5AA8D6]">
                          <Terminal size={10} />
                          <span>{featuredProjects[activeProject].year}</span>
                        </div>

                        {/* Project Title */}
                        <h3 className="text-sm font-bold text-slate-50 leading-tight">
                          {featuredProjects[activeProject].name}
                        </h3>

                        {/* Tech Stack */}
                        <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-400">
                          <span className="text-[#5AA8D6]">$</span>
                          <span>{featuredProjects[activeProject].tech}</span>
                        </div>

                        {/* Action Button */}
                        <button className="group w-full flex items-center justify-between px-2.5 py-1.5 bg-[#1a1f35] hover:bg-[#3066be]/20 border border-[#3066be]/30 hover:border-[#5AA8D6]/60 rounded text-[10px] font-semibold text-[#5AA8D6] hover:text-[#00bfff] transition-all duration-300">
                          <span className="flex items-center gap-1.5">
                            <span className="text-slate-600">&gt;</span>
                            <span>View Project</span>
                          </span>
                          <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>

                      {/* Project Indicators */}
                      <div className="flex items-center justify-between px-1">
                        <div className="flex gap-1.5">
                          {featuredProjects.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveProject(index)}
                              className={`h-0.5 rounded-full transition-all duration-500 ${index === activeProject
                                ? 'w-8 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] shadow-[0_0_10px_rgba(90,168,214,0.8)]'
                                : 'w-4 bg-[#1a1f35] hover:bg-[#3066be]/60'
                                }`}
                              aria-label={`View project ${index + 1}`}
                            />
                          ))}
                        </div>

                        {/* Project Counter */}
                        <div className="text-[9px] font-mono text-slate-600">
                          {(activeProject + 1).toString().padStart(2, '0')}/{featuredProjects.length.toString().padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Brackets - Code Style */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#3066be]/40" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#3066be]/40" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#3066be]/40" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#3066be]/40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden sm:flex absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400 hover:text-[#5AA8D6] transition-colors group"
      >
        <span className="text-[9px] lg:text-[10px] font-mono uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-lr' }}>
          Scroll
        </span>
        <ChevronDown size={18} className="lg:w-5 lg:h-5 animate-bounce-slow group-hover:translate-y-1 transition-transform group-hover:drop-shadow-[0_0_8px_rgba(90,168,214,0.8)]" />
      </button>

      {/* Premium Vertical Text */}
      <div className="hidden xl:block absolute right-8 2xl:right-12 top-1/2 -translate-y-1/2">
        <div className="text-[10px] font-mono text-[#3066be] tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-lr' }}>
          Full-Stack Developer — Portfolio 2025
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        /* Custom breakpoint for extra small devices */
        @media (min-width: 475px) {
          .xs\:inline { display: inline; }
          .xs\:flex-row { flex-direction: row; }
          .xs\:hidden { display: none; }
        }
      `}</style>
    </section>
  );
}






















//old design heor section 




// import { useEffect, useState } from 'react';
// import { ChevronDown, Github, Linkedin, Mail, Sparkles, ArrowRight, Download, MapPin, Clock } from 'lucide-react';

// export default function Hero() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [typedText, setTypedText] = useState('');
//   const [isTypingComplete, setIsTypingComplete] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const fullText = "Building the Future";

//   // Floating elements for background animation
//   const floatingItems = [
//     { id: 1, top: '15%', left: '10%', delay: 0, size: 'w-32 h-32' },
//     { id: 2, top: '60%', right: '8%', delay: 0.5, size: 'w-24 h-24' },
//     { id: 3, top: '40%', left: '5%', delay: 1, size: 'w-20 h-20' },
//     { id: 4, top: '20%', right: '15%', delay: 1.5, size: 'w-28 h-28' },
//     { id: 5, top: '70%', left: '20%', delay: 2, size: 'w-16 h-16' },
//   ];

//   // Particle effects
//   const particles = Array.from({ length: 30 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 4 + 1,
//     speed: Math.random() * 2 + 0.5,
//     opacity: Math.random() * 0.5 + 0.3,
//   }));

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     let index = 0;
//     const typeWriter = () => {
//       if (index < fullText.length) {
//         setTypedText(fullText.slice(0, index + 1));
//         index++;
//         setTimeout(typeWriter, 120);
//       } else {
//         setIsTypingComplete(true);
//       }
//     };
//     typeWriter();
//   }, []);

//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         {/* Primary gradient orbs */}
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl opacity-70 animate-pulse" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/30 to-emerald-600/30 rounded-full blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
//         <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-pink-600/20 to-orange-600/20 rounded-full blur-3xl opacity-50" />
//         <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-full blur-3xl opacity-40" style={{ animationDelay: '4s' }} />
//       </div>

//       {/* Particle Effects */}
//       <div className="absolute inset-0 overflow-hidden">
//         {particles.map((particle) => (
//           <div
//             key={particle.id}
//             className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 animate-pulse"
//             style={{
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               animationDuration: `${particle.speed * 4}s`,
//               animationDelay: `${Math.random() * 4}s`,
//               opacity: particle.opacity,
//             }}
//           />
//         ))}
//       </div>

//       {/* Floating geometric shapes */}
//       {floatingItems.map((item) => (
//         <div
//           key={item.id}
//           className={`absolute ${item.size} rounded-full opacity-5 border-2 border-blue-400`}
//           style={{
//             top: item.top,
//             left: item.left,
//             right: item.right,
//             animation: `float 8s ease-in-out infinite`,
//             animationDelay: `${item.delay}s`,
//           }}
//         />
//       ))}



//       {/* Main Content Container */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto">
//         {/* Header Status Bar */}
//         <div className="absolute top-8 left-8 right-8 flex justify-between items-center text-white/40 font-mono text-xs">
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <Clock size={12} />
//               <span>{currentTime.toLocaleTimeString('en-US', { hour12: false })}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin size={12} />
//               <span>SAN FRANCISCO, CA</span>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//             <span>AVAILABLE FOR WORK</span>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
//           {/* Left Column - Text Content */}
//           <div className="space-y-8">
//             {/* Greeting Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300 backdrop-blur-sm">
//               <Sparkles size={16} />
//               Hello...
//             </div>

//             {/* Main Title */}
//             <div>
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//                 <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent block mb-2">
//                   {typedText}
//                   {!isTypingComplete && <span className="animate-pulse">|</span>}
//                 </span>
//                 <span className="text-white">Nilanjan Nayak</span>
//               </h1>

//               <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
//                 Full-stack developer passionate about creating stunning digital experiences.
//                 Transforming ideas into reality with cutting-edge technology and creative problem-solving.
//               </p>
//             </div>



//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-110 shadow-2xl shadow-blue-500/50 flex items-center justify-center gap-2"
//               >
//                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                 View My Work
//               </button>

//               <a    
//                 href="/resume.pdf"
//                 download="Jensen_Resume.pdf"
//                 className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-full border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm flex items-center justify-center gap-2"
//               >
//                 <Download size={20} />
//                 Download Resume
//               </a>
//             </div>

//             {/* Social Links */}
//             <div className="flex items-center gap-6 pt-4">
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-blue-600/50 hover:to-cyan-600/50 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all duration-300 hover:scale-125 shadow-lg border border-slate-700/50 hover:border-blue-500/50"
//               >
//                 <Github size={20} />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-blue-600/50 hover:to-cyan-600/50 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all duration-300 hover:scale-125 shadow-lg border border-slate-700/50 hover:border-blue-500/50"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="mailto:your.email@example.com"
//                 className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-blue-600/50 hover:to-cyan-600/50 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all duration-300 hover:scale-125 shadow-lg border border-slate-700/50 hover:border-blue-500/50"
//               >
//                 <Mail size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Right Column - Professional Image & Design Elements */}
//           <div className="relative flex items-center justify-center">
//             {/* Professional Profile Image */}
//             <div className="relative">
//               {/* Outer glow rings */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
//               <div className="absolute inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

//               {/* Main image container */}
//               <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-blue-400/30 flex items-center justify-center shadow-2xl backdrop-blur-xl overflow-hidden">
//                 {/* Professional headshot placeholder - replace with actual image */}
//                 <div className="relative w-full h-full flex items-center justify-center">
//                   <img
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
//                     alt="Jensen - Professional Developer"
//                     className="w-full h-full object-cover rounded-3xl"
//                   />

//                   {/* Overlay gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent rounded-3xl"></div>

//                   {/* Professional badge */}
//                   <div className="absolute bottom-6 left-6 right-6">
//                     <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
//                       <div className="flex items-center gap-3 mb-2">
//                         <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                         <span className="text-white font-semibold text-sm">Available for Projects</span>
//                       </div>
//                       <p className="text-slate-300 text-xs leading-relaxed">
//                         Specializing in full-stack development with modern technologies
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <button
//           onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-blue-400 transition-colors animate-bounce z-10"
//         >
//           <ChevronDown size={32} />
//         </button>
//       </div>

//       {/* Custom animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
