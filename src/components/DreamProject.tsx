import { useState, useRef, useEffect } from 'react';
import {
    Target,
    Calendar,
    Users,
    Github,
    Play,
    ArrowUpRight,
    Terminal,
    Cpu,
    Check,
    Zap,
    Layers
} from 'lucide-react';
import { dreamProjectData } from '../data/portfolio';

export default function DreamProject() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="dream-project"
            className="relative py-24 lg:py-32 bg-transparent text-slate-300 overflow-hidden font-sans selection:bg-[#5AA8D6] selection:text-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- Header: Technical Spec Style --- */}
                <div className={`flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 border-b border-white/10 pb-6 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#5AA8D6]/10 border border-[#5AA8D6]/20 text-[#5AA8D6] text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">
                                Project_001 // Flagship
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                SYSTEM ONLINE
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
                            {dreamProjectData.title}
                        </h2>
                    </div>
                    <div className="text-left md:text-right">
                        <p className="text-[10px] sm:text-xs font-mono text-slate-500 mb-1">LATEST DEPLOYMENT</p>
                        <div className="text-xs sm:text-sm text-white font-mono tracking-tight">
                            Website v2.0.0-release <span className="text-slate-600">/</span> {dreamProjectData.category}
                        </div>
                    </div>
                </div>

                {/* --- Main Interface Grid --- */}
                <div className={`grid lg:grid-cols-12 gap-0 border border-white/10 bg-[#080808]/80 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* --- LEFT COLUMN: Visuals (Col 8) --- */}
                    <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-white/10 relative group">
                        {/* Toolbar */}
                        <div className="h-10 border-b border-white/10 bg-white/[0.02] flex items-center px-4 justify-between">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-red-500/50 transition-colors" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-yellow-500/50 transition-colors" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-emerald-500/50 transition-colors" />
                            </div>
                            <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 flex gap-3 sm:gap-4">
                                <span>1920x1080</span>
                                <span className="hidden sm:inline">60 FPS</span>
                                <span className="text-[#5AA8D6]">LIVE VIEW</span>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative aspect-video bg-[#050505] overflow-hidden">
                            {/* Tech Overlay Grid */}
                            <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[#5AA8D6]/50" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#5AA8D6]/50" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-white/5" />
                            </div>

                            {/* Image */}
                            <img
                                src={dreamProjectData.image}
                                alt={dreamProjectData.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                            />

                            {/* Bottom Info Bar on Image */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-white/10 p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex flex-wrap gap-3 sm:gap-4">
                                    {dreamProjectData.impact.slice(0, 2).map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-300">
                                            <Zap size={12} className="text-[#5AA8D6]" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <a href={dreamProjectData.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-white hover:text-[#5AA8D6] transition-colors">
                                    OPEN APP <ArrowUpRight size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: Data & Controls (Col 4) --- */}
                    <div className="lg:col-span-4 flex flex-col">

                        {/* Description Block */}
                        <div className="p-5 sm:p-6 border-b border-white/10 bg-white/[0.01]">
                            <div className="flex items-center gap-2 mb-3">
                                <Terminal size={14} className="text-[#5AA8D6]" />
                                <h3 className="text-xs font-bold text-white uppercase tracking-widest">Abstract</h3>
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                                {dreamProjectData.description}
                            </p>
                        </div>

                        {/* Stats Grid - All 4 Stats in 2x2 Grid */}
                        <div className="border-b border-white/10">
                            <div className="grid grid-cols-2">
                                {dreamProjectData.quickStats.map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-4 hover:bg-white/[0.02] transition-colors ${idx % 2 === 0 ? 'border-r border-white/10' : ''
                                            } ${idx < 2 ? 'border-b border-white/10' : ''
                                            }`}
                                    >
                                        <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase mb-1">{stat.label}</div>
                                        <div className="text-lg sm:text-xl font-mono font-medium text-white truncate" title={stat.value}>{stat.value}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Progress Mini-Bar */}
                            <div className="p-4 border-t border-white/10">
                                <div className="flex justify-between text-[9px] sm:text-[10px] font-mono text-slate-500 mb-2">
                                    <span>COMPLETION STATUS</span>
                                    <span className="text-[#5AA8D6]">{dreamProjectData.progress}%</span>
                                </div>
                                <div className="h-1 w-full bg-[#1a1a1a] overflow-hidden">
                                    <div className="h-full bg-[#5AA8D6]" style={{ width: `${dreamProjectData.progress}%` }} />
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack - Compact List */}
                        <div className="flex-1 p-5 sm:p-6 overflow-y-auto max-h-[300px] lg:max-h-none">
                            <h3 className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Cpu size={12} /> Architecture
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {dreamProjectData.techStack.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className="group flex items-center gap-1.5 px-2.5 py-1.5 bg-[#111] border border-white/10 hover:border-[#5AA8D6]/40 transition-colors"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#5AA8D6]" />
                                        <span className="text-[10px] sm:text-[11px] font-mono text-slate-300 group-hover:text-white">
                                            {tech}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10">
                                <h3 className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Layers size={12} /> Capabilities
                                </h3>
                                <ul className="space-y-2">
                                    {dreamProjectData.keyFeatures.slice(0, 3).map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-[10px] sm:text-xs text-slate-400">
                                            <Check size={12} className="text-[#5AA8D6] mt-0.5 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Actions Footer */}
                        <div className="p-4 border-t border-white/10 bg-[#0a0a0a] flex gap-3">
                            <a
                                href={dreamProjectData.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#5AA8D6] hover:bg-[#4a98c6] border border-white/10 hover:border-[#5AA8D6] group transition-all"
                            >
                                <Play size={14} className="text-white" />
                                <span className="text-xs font-bold text-white uppercase tracking-wide">Initialize</span>
                            </a>
                            <a
                                href={dreamProjectData.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                                aria-label="View Source"
                            >
                                <Github size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- Timeline Footer --- */}
                <div className={`mt-6 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase">
                        <div className="flex items-center gap-2">
                            <Calendar size={12} />
                            <span>Start: {dreamProjectData.timeline.start}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Target size={12} />
                            <span>Target: {dreamProjectData.timeline.end}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users size={12} />
                            <span>Contributors: {dreamProjectData.teamSize}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-mono text-slate-600">
                        <span>ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                        <div className="w-px h-3 bg-white/10 hidden sm:block" />
                        <span className="hidden sm:inline">SECURE CONNECTION</span>
                    </div>
                </div>

            </div>
        </section>
    );
}