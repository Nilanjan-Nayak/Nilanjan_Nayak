import { useEffect, useState, useRef } from 'react';
import { ChevronDown, ArrowUpRight, FileDown, Calendar, MapPin, Terminal } from 'lucide-react';
import { personalInfo, heroData } from '../data/portfolio';

export default function Hero() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeProject, setActiveProject] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const { featuredProjects } = heroData;

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
      className="relative min-h-screen bg-transparent text-slate-50 overflow-hidden"
    >
      {/* Background Elements Removed to show global fixed background */}
      {/* Subtle Gradient Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02000d]/50 to-[#02000d] pointer-events-none" />

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center pt-12 sm:pt-16">
        <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-6 sm:gap-8 lg:gap-20 xl:gap-24 items-center">

            {/* Left Side - Typography Focus */}
            <div className="space-y-5 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 relative z-10">
              {/* Premium Metadata */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#131c80]/20 border border-[#3066be]/20 rounded-full backdrop-blur-sm">
                  <MapPin size={10} className="text-[#5AA8D6]" />
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium tracking-wide">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#131c80]/20 border border-[#3066be]/20 rounded-full backdrop-blur-sm">
                  <Calendar size={10} className="text-[#5AA8D6]" />
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium tracking-wide">{currentTime.toLocaleDateString('en-US', { year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#131c80]/20 border border-[#3066be]/20 rounded-full backdrop-blur-sm">
                  <Terminal size={10} className="text-[#5AA8D6]" />
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium tracking-wide hidden xs:inline">{personalInfo.role}</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium tracking-wide xs:hidden">{personalInfo.shortRole}</span>
                </div>
              </div>

              {/* Premium Typography with Animated Gradient */}
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div className="space-y-3">
                  <h1 className="text-[clamp(2.25rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.03em]">
                    <span className="inline-block text-slate-50 animate-fade-in">{heroData.headline.prefix}</span>
                    <br />
                    <span className="inline-block relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5AA8D6] via-[#3066be] to-[#00bfff] animate-gradient-x drop-shadow-[0_0_30px_rgba(90,168,214,0.4)]">
                        {heroData.headline.highlight}
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
                    {heroData.description[0].split(' ').map((word, i) => {
                      if (['precision,', 'elegance,', 'purpose.'].includes(word)) {
                        return <span key={i} className="text-[#5AA8D6] font-medium">{word} </span>;
                      }
                      return word + ' ';
                    })}
                  </p>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {heroData.description[1]}
                  </p>
                </div>
              </div>

              {/* Premium Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-5 lg:gap-6 pt-2 sm:pt-3">
                {heroData.stats.map((stat, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3066be]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`relative text-center ${index === 2 ? 'lg:text-right' : index === 0 ? 'lg:text-left' : ''} space-y-0.5`}>
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-br from-[#5AA8D6] to-[#3066be] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-[0.12em] font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
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
                  href={personalInfo.resumeUrl}
                  download
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
                {personalInfo.social.slice(0, 3).map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : undefined}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
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
                      src={featuredProjects[activeProject].image}
                      alt="Featured project showcase"
                      key={activeProject}
                      className="w-full h-full object-cover opacity-30 animate-slideIn"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80';
                      }}
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
                        {/* ear Badge */}
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
          {personalInfo.role} — Portfolio 2025
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
