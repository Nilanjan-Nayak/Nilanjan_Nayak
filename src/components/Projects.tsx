import { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Terminal, Maximize2, Code2, Layers, Cpu } from 'lucide-react';
import { projectsData } from '../data/portfolio';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // We need to track the previous index to animate from it
  const [prevIndex, setPrevIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const changeProject = (newIndex: number, direction: 'left' | 'right') => {
    if (isAnimating) return;

    setPrevIndex(activeIndex);
    setActiveIndex(newIndex);
    setSlideDirection(direction);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setSlideDirection(null);
    }, 600); // Match CSS duration
  };

  const nextProject = () => {
    changeProject((activeIndex + 1) % projectsData.length, 'right');
  };

  const prevProject = () => {
    changeProject((activeIndex - 1 + projectsData.length) % projectsData.length, 'left');
  };

  const currentProject = projectsData[activeIndex];

  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-transparent overflow-hidden">
      {/* Dynamic Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-10 transition-colors duration-1000 pointer-events-none"
        style={{ backgroundColor: currentProject.accent }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 lg:mb-24">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5AA8D6] to-[#3066be]">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl">
              A collection of technical challenges and digital solutions.
            </p>
          </div>

          {/* Project Navigation */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0e1a]/80 backdrop-blur-sm border border-[#1a1f35] rounded-full">
              <span className="text-sm font-mono text-slate-400">
                <span className="text-[#5AA8D6]">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="mx-2 opacity-30">/</span>
                <span>{String(projectsData.length).padStart(2, '0')}</span>
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevProject}
                disabled={isAnimating}
                className="p-3 rounded-full bg-[#0a0e1a]/80 backdrop-blur-sm border border-[#1a1f35] text-slate-400 hover:text-white hover:border-[#5AA8D6] transition-all hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextProject}
                disabled={isAnimating}
                className="p-3 rounded-full bg-[#0a0e1a]/80 backdrop-blur-sm border border-[#1a1f35] text-slate-400 hover:text-white hover:border-[#5AA8D6] transition-all hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Project Display */}
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 lg:gap-16 items-center">

          {/* Left Side - Interactive Terminal Window */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group perspective-1000"
          >
            <div
              className="relative bg-[#0a0e1a] border border-[#1a1f35] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(19,28,128,0.3)] group-hover:shadow-[0_0_70px_rgba(90,168,214,0.2)] transition-all duration-500"
              style={{
                transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              }}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1117] border-b border-[#1a1f35]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#1a1f35] rounded text-xs font-mono text-slate-400">
                  <Terminal size={12} className="text-[#5AA8D6]" />
                  <span>preview.tsx</span>
                </div>
                <div className="w-12" /> {/* Spacer for balance */}
              </div>

              {/* Project Image Container */}
              <div className="relative aspect-video overflow-hidden bg-[#02000d]">
                {/* We render the CURRENT project with an animation key */}
                <div
                  key={activeIndex}
                  className={`absolute inset-0 w-full h-full ${isAnimating
                    ? (slideDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left')
                    : ''
                    }`}
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-4 z-10">
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#0a0e1a]/90 backdrop-blur-md border border-[#1a1f35] rounded-lg">
                    <div className="p-2 bg-[#131c80]/20 rounded-md">
                      <Code2 size={16} className="text-[#5AA8D6]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Category</div>
                      <div className="text-sm font-bold text-white">{currentProject.category}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-4 py-3 bg-[#0a0e1a]/90 backdrop-blur-md border border-[#1a1f35] rounded-lg">
                    <div className="p-2 bg-[#131c80]/20 rounded-md">
                      <Layers size={16} className="text-[#5AA8D6]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Status</div>
                      <div className="text-sm font-bold text-white">{currentProject.stats.status}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Project Details */}
          <div className="relative min-h-[400px]">
            <div
              key={activeIndex}
              className={`space-y-8 ${isAnimating
                ? (slideDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left')
                : ''
                }`}
            >
              {/* Title & Description */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-bold text-[#5AA8D6] bg-[#5AA8D6]/10 border border-[#5AA8D6]/20 rounded-full">
                    {currentProject.stats.year}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#1a1f35] to-transparent" />
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {currentProject.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-lg">
                  {currentProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm font-mono text-slate-300 bg-[#1a1f35]/80 backdrop-blur-sm border border-[#3066be]/20 rounded hover:border-[#5AA8D6]/50 hover:text-[#5AA8D6] transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {currentProject.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5AA8D6]" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-8 py-4 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] hover:from-[#5AA8D6] hover:to-[#00bfff] text-white font-bold rounded-lg shadow-[0_0_20px_rgba(90,168,214,0.3)] hover:shadow-[0_0_30px_rgba(90,168,214,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <span>View Live Demo</span>
                  <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-8 py-4 bg-[#0a0e1a]/80 backdrop-blur-sm border border-[#1a1f35] hover:border-[#5AA8D6] text-white font-bold rounded-lg hover:bg-[#1a1f35] transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <Github size={18} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}