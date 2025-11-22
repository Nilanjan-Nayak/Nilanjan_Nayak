import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, Users, Code2, Calendar, Award, TrendingUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  category: string;
  stats: {
    stars?: number;
    users?: number;
    year?: string;
    status?: string;
  };
  achievements?: string[];
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard. Built with modern architecture and scalable design.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#3066be] to-[#5AA8D6]',
      category: 'Full-Stack',
      stats: {
        stars: 245,
        users: 1200,
        year: '2024',
        status: 'Production'
      },
      achievements: ['99.9% Uptime', '50K+ Transactions', 'Award Winner']
    },
    {
      id: 2,
      title: 'AI Content Generator',
      description: 'Intelligent content creation platform leveraging machine learning to generate high-quality marketing copy and social media content. Features advanced NLP models and real-time suggestions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'OpenAI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-500 to-teal-500',
      category: 'AI/ML',
      stats: {
        stars: 389,
        users: 2500,
        year: '2024',
        status: 'Beta'
      },
      achievements: ['AI-Powered', '10M+ Words Generated', 'Top Rated']
    },
    {
      id: 3,
      title: 'Project Management Suite',
      description: 'Comprehensive project management tool with team collaboration features, time tracking, and automated reporting capabilities. Seamless integration with popular development tools.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS', 'WebSockets'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-violet-500 to-purple-500',
      category: 'SaaS',
      stats: {
        stars: 156,
        users: 850,
        year: '2023',
        status: 'Production'
      },
      achievements: ['Team Favorite', '500+ Companies', 'Featured']
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform with interactive charts, custom reporting, and predictive analytics for business intelligence. Advanced data processing and beautiful visualizations.',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['TypeScript', 'D3.js', 'MongoDB', 'Express', 'GraphQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-[#FF6B6B] to-[#FF8E53]',
      category: 'Data Science',
      stats: {
        stars: 412,
        users: 3400,
        year: '2024',
        status: 'Production'
      },
      achievements: ['Industry Leading', '1B+ Data Points', 'Certified']
    },
  ];

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextProject();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const currentProject = projects[currentIndex];

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#02000d] overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(19,28,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(19,28,128,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#02000d] via-[#050939] to-[#02000d] opacity-90" />
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#3066be] rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#5AA8D6] rounded-full blur-[150px] opacity-10" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Premium Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#131c80]/30 backdrop-blur-sm border border-[#3066be]/30 rounded-full text-xs sm:text-sm font-mono text-[#5AA8D6] mb-6">
            <Code2 className="w-4 h-4" />
            <span>Portfolio Showcase</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#5AA8D6] via-[#3066be] to-[#00bfff] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            A curated collection of innovative solutions and creative implementations
            <br className="hidden sm:block" />
            <span className="text-[#5AA8D6] font-semibold">showcasing technical excellence</span>
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-10">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#5AA8D6] to-[#3066be] bg-clip-text text-transparent">
                {projects.length}+
              </div>
              <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#5AA8D6] to-[#3066be] bg-clip-text text-transparent">
                8K+
              </div>
              <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider mt-1">Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#5AA8D6] to-[#3066be] bg-clip-text text-transparent">
                1.2K+
              </div>
              <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider mt-1">Stars</div>
            </div>
          </div>
        </div>

        {/* Main Project Showcase */}
        <div className="relative mb-12 sm:mb-16">
          {/* Premium Card with Glass Morphism */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="relative bg-gradient-to-br from-[#07203f]/80 to-[#050939]/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-[#131c80]/60 shadow-[0_0_80px_rgba(48,102,190,0.15)] transition-all duration-500 hover:shadow-[0_0_100px_rgba(90,168,214,0.25)]"
            style={{
              transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 2}deg) rotateY(${(mousePosition.x - 0.5) * 2}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} opacity-5`} />

            <div className="grid lg:grid-cols-[1.1fr,1fr] gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-12">
              {/* Project Image with Advanced Effects */}
              <div className="relative order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl group aspect-[16/10] sm:aspect-video">
                  {/* Image */}
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isTransitioning ? 'scale-110 blur-sm' : 'scale-100 blur-0 group-hover:scale-105'
                    }`}
                  />
                  
                  {/* Gradient Overlays */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02000d] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#02000d]/80 backdrop-blur-md border border-[#3066be]/50 rounded-full text-xs sm:text-sm font-semibold text-[#5AA8D6]">
                      {currentProject.category}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs sm:text-sm font-semibold text-green-400">
                        {currentProject.stats.status}
                      </span>
                    </div>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 sm:gap-4">
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#02000d]/80 backdrop-blur-md border border-[#3066be]/30 rounded-lg">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs sm:text-sm font-semibold text-white">{currentProject.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#02000d]/80 backdrop-blur-md border border-[#3066be]/30 rounded-lg">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#5AA8D6]" />
                      <span className="text-xs sm:text-sm font-semibold text-white">{currentProject.stats.users}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#02000d]/80 backdrop-blur-md border border-[#3066be]/30 rounded-lg">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#5AA8D6]" />
                      <span className="text-xs sm:text-sm font-semibold text-white">{currentProject.stats.year}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                {currentProject.achievements && (
                  <div className="hidden sm:flex gap-3 mt-4 sm:mt-6">
                    {currentProject.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 bg-[#131c80]/30 backdrop-blur-sm border border-[#3066be]/30 rounded-lg group hover:border-[#5AA8D6]/50 transition-all"
                      >
                        <Award className="w-4 h-4 text-[#5AA8D6] group-hover:text-yellow-400 transition-colors" />
                        <span className="text-xs font-medium text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="flex flex-col justify-center order-1 lg:order-2">
                {/* Project Number */}
                <div className="mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-2 sm:gap-3">
                    <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#3066be] to-transparent" />
                    <span className="text-xs sm:text-sm font-mono font-semibold text-[#5AA8D6]">
                      PROJECT {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-500 ${
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}>
                  {currentProject.title}
                </h3>

                {/* Description */}
                <p className={`text-slate-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed transition-all duration-500 delay-100 ${
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}>
                  {currentProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {currentProject.tags.map((tag, idx) => (
                    <span
                      key={tag}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-[#131c80]/40 backdrop-blur-sm rounded-lg text-xs sm:text-sm font-medium text-[#5AA8D6] border border-[#3066be]/30 hover:border-[#5AA8D6]/60 hover:bg-[#131c80]/60 transition-all duration-300 hover:scale-105 ${
                        isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                      }`}
                      style={{ transitionDelay: `${idx * 50 + 200}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] hover:from-[#5AA8D6] hover:to-[#00bfff] text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(90,168,214,0.3)] hover:shadow-[0_0_40px_rgba(90,168,214,0.5)] flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <span className="relative z-10">View Live Demo</span>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </a>
                  
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#07203f]/60 hover:bg-[#131c80]/80 backdrop-blur-sm border border-[#3066be]/50 hover:border-[#5AA8D6] text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            <button
              onClick={prevProject}
              disabled={isTransitioning}
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#07203f]/80 hover:bg-[#131c80]/80 backdrop-blur-sm border border-[#3066be]/50 hover:border-[#5AA8D6] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Progress Dots */}
            <div className="flex gap-2 sm:gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isTransitioning && setCurrentIndex(index)}
                  disabled={isTransitioning}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'w-10 sm:w-12 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] shadow-[0_0_10px_rgba(90,168,214,0.8)]'
                      : 'w-1.5 sm:w-2 bg-[#131c80] hover:bg-[#3066be] hover:w-6'
                  }`}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              disabled={isTransitioning}
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#07203f]/80 hover:bg-[#131c80]/80 backdrop-blur-sm border border-[#3066be]/50 hover:border-[#5AA8D6] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Project Grid Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => !isTransitioning && setCurrentIndex(index)}
              disabled={isTransitioning}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-500 ${
                index === currentIndex
                  ? 'ring-2 ring-[#5AA8D6] scale-105 shadow-[0_0_30px_rgba(90,168,214,0.4)]'
                  : 'hover:scale-105 hover:shadow-[0_0_20px_rgba(90,168,214,0.2)]'
              }`}
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02000d] via-[#02000d]/60 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-end">
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 line-clamp-1 group-hover:text-[#5AA8D6] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-300 font-mono">
                    {project.category}
                  </p>
                </div>

                {/* Active Indicator */}
                {index === currentIndex && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#5AA8D6] rounded-full shadow-[0_0_10px_rgba(90,168,214,0.8)] animate-pulse" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}