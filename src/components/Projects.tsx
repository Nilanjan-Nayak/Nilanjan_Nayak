import { useState, useRef, useEffect } from 'react';
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Code2,
  Play,
  Pause,
  Star,
  GitFork,
  Activity,
  Grid3x3,
  Maximize2,
  Eye,
  TrendingUp,
  Zap,
  Award,
  Clock
} from 'lucide-react';
import { projectsData } from '../data/portfolio';

type ViewMode = 'carousel' | 'grid';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('carousel');
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const AUTO_PLAY_INTERVAL = 6000;
  const PROGRESS_INTERVAL = 50;

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !isHovered && viewMode === 'carousel') {
      startProgress();
      autoPlayRef.current = setInterval(() => {
        nextProject();
      }, AUTO_PLAY_INTERVAL);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [activeIndex, isAutoPlay, isHovered, viewMode]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (viewMode !== 'carousel') return;
      if (e.key === 'ArrowLeft') prevProject();
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeIndex, isAutoPlay, viewMode]);

  const startProgress = () => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (progressRef.current) clearInterval(progressRef.current);
          return 100;
        }
        return prev + (100 / (AUTO_PLAY_INTERVAL / PROGRESS_INTERVAL));
      });
    }, PROGRESS_INTERVAL);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  const changeProject = (newIndex: number, direction: 'left' | 'right') => {
    if (isAnimating) return;

    setActiveIndex(newIndex);
    setSlideDirection(direction);
    setIsAnimating(true);
    setProgress(0);

    setTimeout(() => {
      setIsAnimating(false);
      setSlideDirection(null);
    }, 700);
  };

  const nextProject = () => {
    changeProject((activeIndex + 1) % projectsData.length, 'right');
  };

  const prevProject = () => {
    changeProject((activeIndex - 1 + projectsData.length) % projectsData.length, 'left');
  };

  const currentProject = projectsData[activeIndex];

  return (
    <section id="projects" className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial Gradient Orbs */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${currentProject.accent}40 0%, transparent 70%)`,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1.3 : 1})`
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[800px] h-[800px] rounded-full opacity-10 blur-[150px] transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, #3066be40 0%, transparent 70%)`,
          }}
        />

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(90, 168, 214, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(90, 168, 214, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 75%)'
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 2 === 0 ? '#5AA8D6' : '#3066be',
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}

        {/* Spotlight Effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(90, 168, 214, 0.1) 0%, transparent 50%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 lg:mb-16">
          <div className="space-y-6 max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#5AA8D6] to-[#3066be] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative px-4 py-1.5 bg-[#0a0e1a] border border-[#5AA8D6]/30 rounded-lg">
                  <span className="text-xs font-mono text-[#5AA8D6] uppercase tracking-widest font-bold">
                    <Activity className="inline w-3 h-3 mr-2 animate-pulse" />
                    Portfolio • Projects
                  </span>
                </div>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                Featured
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5AA8D6] via-[#00bfff] to-[#3066be] bg-[length:200%_auto] animate-gradient-x">
                  Projects
                </span>
              </h2>

              <div className="flex items-center gap-3 mt-4">
                <div className="h-1 w-20 bg-gradient-to-r from-[#5AA8D6] to-transparent rounded-full"></div>
                <span className="text-sm text-slate-500 font-mono uppercase tracking-wider">
                  {projectsData.length} Projects
                </span>
              </div>
            </div>

            <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl">
              Explore my latest work showcasing innovative solutions, cutting-edge
              technologies, and creative problem-solving across various domains.
            </p>
          </div>

          {/* View Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 w-full lg:w-auto">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 p-1.5 bg-gradient-to-br from-[#0a0e1a] to-[#0d1117] backdrop-blur-xl border border-[#1a1f35] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <button
                onClick={() => setViewMode('carousel')}
                className={`relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${viewMode === 'carousel'
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                {viewMode === 'carousel' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5AA8D6] to-[#3066be] rounded-xl shadow-[0_0_20px_rgba(90,168,214,0.3)]"></div>
                )}
                <span className="relative flex items-center gap-2">
                  <Maximize2 size={16} />
                  Showcase
                </span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${viewMode === 'grid'
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                {viewMode === 'grid' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5AA8D6] to-[#3066be] rounded-xl shadow-[0_0_20px_rgba(90,168,214,0.3)]"></div>
                )}
                <span className="relative flex items-center gap-2">
                  <Grid3x3 size={16} />
                  Grid
                </span>
              </button>
            </div>

            {/* Carousel Controls */}
            {viewMode === 'carousel' && (
              <div className="flex items-center gap-3">
                {/* Progress Counter */}
                <div className="relative px-6 py-3 bg-gradient-to-br from-[#0a0e1a] to-[#0d1117] backdrop-blur-xl border border-[#1a1f35] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
                  {/* Animated Progress Bar */}
                  {isAutoPlay && !isHovered && (
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#5AA8D6] via-[#00bfff] to-[#3066be] transition-all duration-300 rounded-full"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-white font-mono tabular-nums">
                        {String(activeIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                        Current
                      </span>
                    </div>

                    <div className="h-10 w-px bg-gradient-to-b from-transparent via-[#5AA8D6]/30 to-transparent"></div>

                    <div className="text-center">
                      <span className="block text-2xl font-bold text-slate-500 font-mono tabular-nums">
                        {String(projectsData.length).padStart(2, '0')}
                      </span>
                      <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                        Total
                      </span>
                    </div>

                    <button
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      className="ml-2 p-2 rounded-lg bg-[#1a1f35]/50 text-slate-400 hover:text-[#5AA8D6] hover:bg-[#1a1f35] transition-all hover:scale-110 active:scale-95"
                      title={isAutoPlay ? 'Pause' : 'Play'}
                    >
                      {isAutoPlay ? <Pause size={14} /> : <Play size={14} />}
                    </button>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={prevProject}
                    disabled={isAnimating}
                    className="group relative p-3.5 rounded-xl bg-gradient-to-br from-[#0a0e1a] to-[#0d1117] border border-[#1a1f35] overflow-hidden transition-all hover:border-[#5AA8D6]/50 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(90,168,214,0.2)] hover:scale-110 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5AA8D6]/0 via-[#5AA8D6]/10 to-[#5AA8D6]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <ChevronLeft className="relative z-10 text-slate-400 group-hover:text-white transition-colors" size={20} />
                  </button>

                  <button
                    onClick={nextProject}
                    disabled={isAnimating}
                    className="group relative p-3.5 rounded-xl bg-gradient-to-br from-[#0a0e1a] to-[#0d1117] border border-[#1a1f35] overflow-hidden transition-all hover:border-[#5AA8D6]/50 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(90,168,214,0.2)] hover:scale-110 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5AA8D6]/0 via-[#5AA8D6]/10 to-[#5AA8D6]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <ChevronRight className="relative z-10 text-slate-400 group-hover:text-white transition-colors" size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Carousel View */}
        {viewMode === 'carousel' && (
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-6 lg:gap-8 items-start max-w-6xl mx-auto">

            {/* Left - Preview Card */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className="relative group"
              style={{ perspective: '2000px' }}
            >
              {/* Glow Effect */}
              <div
                className="absolute -inset-4 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 rounded-xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${currentProject.accent}, transparent 70%)`
                }}
              />

              <div
                className="relative bg-[#0d1117] border border-[#1a1f35] rounded-lg overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-700 group-hover:shadow-[0_20px_60px_rgba(90,168,214,0.2)] group-hover:border-[#5AA8D6]/30"
                style={{
                  transform: `
                    rotateY(${mousePosition.x * 3}deg) 
                    rotateX(${-mousePosition.y * 3}deg)
                    translateZ(20px)
                  `,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* IDE Header */}
                <div className="relative flex items-center justify-between px-3 py-2 bg-[#0d1117] border-b border-[#1a1f35]">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1f35] rounded-md border border-[#2a2f45]">
                    <Code2 size={12} className="text-[#5AA8D6]" />
                    <span className="text-[10px] font-mono text-slate-300">
                      {currentProject.title.toLowerCase().replace(/\s+/g, '-')}.tsx
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-[#1a1f35]/50 rounded text-[10px] font-mono text-slate-400">
                      <GitFork size={10} />
                      <span>main</span>
                    </div>
                  </div>
                </div>

                {/* Project Preview */}
                <div className="relative aspect-video bg-gradient-to-br from-[#02000d] to-[#0a0e1a] overflow-hidden">
                  <div
                    key={activeIndex}
                    className={`absolute inset-0 ${isAnimating
                      ? slideDirection === 'right'
                        ? 'animate-slide-in-right'
                        : 'animate-slide-in-left'
                      : ''
                      }`}
                  >
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    />

                    {/* Multi-layer Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/50 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/60 via-transparent to-[#0a0e1a]/60" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5AA8D6]/0 via-transparent to-[#3066be]/10" />

                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5AA8D6]/5 to-transparent h-40 animate-scan" />

                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                      style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)"/%3E%3C/svg%3E")'
                      }}
                    />
                  </div>

                  {/* Minimalist Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0a0e1a] to-transparent">
                    <div className="flex items-center justify-between gap-3 px-3 py-2 bg-[#0d1117]/90 backdrop-blur-md border border-[#1a1f35] rounded-md">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f] animate-pulse" />
                          <span className="text-xs font-mono text-slate-300">Running</span>
                        </div>
                        <div className="h-3 w-px bg-[#1a1f35]" />
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          <Clock size={12} />
                          <span>{currentProject.stats.year}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#5AA8D6]">
                          <Star size={12} />
                          <span>{currentProject.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Eye size={12} />
                          <span>{currentProject.stats.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* IDE Status Bar */}
                <div className="px-3 py-1.5 bg-[#007acc] text-white text-[9px] font-mono flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <GitFork size={10} />
                      <span>master*</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Activity size={10} />
                      <span>0 errors, 0 warnings</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>Ln 309, Col 1</span>
                    <span>UTF-8</span>
                    <span>TypeScript React</span>
                  </div>
                </div>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2.5 mt-8">
                {projectsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => changeProject(idx, idx > activeIndex ? 'right' : 'left')}
                    className={`group relative transition-all duration-300 ${idx === activeIndex ? 'w-12' : 'w-3'
                      }`}
                  >
                    <div className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex
                      ? 'bg-gradient-to-r from-[#5AA8D6] to-[#00bfff]'
                      : 'bg-[#1a1f35] group-hover:bg-[#2a2f45]'
                      }`} />
                    {idx === activeIndex && (
                      <div className="absolute inset-0 rounded-full bg-[#5AA8D6] blur-md opacity-50" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Details Panel */}
            <div className="relative lg:sticky lg:top-24">
              <div
                key={activeIndex}
                className={`space-y-6 ${isAnimating
                  ? slideDirection === 'right'
                    ? 'animate-slide-in-right'
                    : 'animate-slide-in-left'
                  : ''
                  }`}
              >
                {/* Title */}
                {/* Title */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5AA8D6]/10 border border-[#5AA8D6]/20 rounded-md">
                      <Award size={14} className="text-[#5AA8D6]" />
                      <span className="text-[10px] font-bold text-[#5AA8D6] uppercase tracking-wider">
                        Featured Project
                      </span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#1a1f35] to-transparent" />
                  </div>

                  <h3 className="text-3xl font-bold text-white leading-tight tracking-tight">
                    {currentProject.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-[#1a1f35] pl-4">
                    {currentProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap size={16} className="text-[#5AA8D6]" />
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Technology Stack
                    </h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#1a1f35] to-transparent" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-mono font-medium text-slate-300 bg-[#1a1f35]/50 border border-[#2a2f45] rounded-md hover:border-[#5AA8D6]/50 hover:text-[#5AA8D6] transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp size={16} className="text-[#5AA8D6]" />
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Key Highlights
                    </h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#1a1f35] to-transparent" />
                  </div>

                  <div className="space-y-2">
                    {currentProject.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg bg-[#0a0e1a]/40 border border-[#1a1f35] hover:border-[#5AA8D6]/30 transition-colors"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5AA8D6]" />
                        <span className="text-xs text-slate-300 leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Grid */}
                {currentProject.stats.commits && (
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#1a1f35]">
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">
                        {currentProject.stats.commits}
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                        Commits
                      </div>
                    </div>

                    <div className="text-center border-l border-[#1a1f35]">
                      <div className="text-xl font-bold text-white">
                        {currentProject.tags.length}
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                        Tech Stack
                      </div>
                    </div>

                    <div className="text-center border-l border-[#1a1f35]">
                      <div className="text-xl font-bold text-white">
                        {currentProject.achievements.length}
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                        Features
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#5AA8D6] hover:bg-[#4a98c6] text-white rounded-lg font-medium transition-all text-sm"
                  >
                    <Play size={16} className="fill-white" />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#1a1f35] hover:bg-[#2a2f45] text-white border border-[#2a2f45] rounded-lg font-medium transition-all text-sm"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${idx * 100}ms`,
                  opacity: 0
                }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute -inset-4 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${project.accent}, transparent 70%)`
                  }}
                />

                <div className="relative bg-gradient-to-br from-[#0a0e1a] to-[#0d1117] border border-[#1a1f35] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#5AA8D6]/50 hover:shadow-[0_20px_60px_rgba(90,168,214,0.2)] hover:scale-[1.02] hover:-translate-y-2">

                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-[#02000d]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#5AA8D6] text-white rounded-full hover:bg-[#00bfff] transition-all hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(90,168,214,0.5)]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#0a0e1a] border border-[#5AA8D6] text-white rounded-full hover:bg-[#1a1f35] transition-all hover:scale-110 active:scale-95"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#0a0e1a]/90 backdrop-blur-sm border border-[#5AA8D6]/30 rounded-full">
                      <span className="text-xs font-bold text-[#5AA8D6]">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#0a0e1a]/90 backdrop-blur-sm border border-[#1a1f35] rounded-full">
                      <span className="text-xs font-bold text-slate-400">
                        {project.stats.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-[#5AA8D6] transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-mono font-medium text-slate-400 bg-[#1a1f35]/50 border border-[#2a2f45] rounded-lg hover:border-[#5AA8D6]/50 hover:text-[#5AA8D6] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs font-mono font-medium text-slate-500 bg-[#1a1f35]/30 border border-[#2a2f45] rounded-lg">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#1a1f35]">
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        {project.stats.stars && (
                          <div className="flex items-center gap-1.5">
                            <Star size={12} className="text-[#5AA8D6] fill-[#5AA8D6]" />
                            <span>{project.stats.stars}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Eye size={12} className="text-[#5AA8D6]" />
                          <span>{project.stats.views || '1.2k'}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs">
                        <div className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
                        <span className="text-slate-400">{project.stats.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(60px) scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-60px) scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: translateX(0) scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(15px);
          }
        }

        @keyframes scan {
          0% {
            top: -40%;
          }
          100% {
            top: 140%;
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-slide-in-right {
          animation: slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-float-slow {
          animation: float-slow linear infinite;
        }

        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0e1a;
        }

        ::-webkit-scrollbar-thumb {
          background: #1a1f35;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #5AA8D6;
        }

        /* Better text rendering */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Focus visible for accessibility */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #5AA8D6;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}