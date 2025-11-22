import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, Database, Layout, Server, Terminal,
  Award, Zap, Cpu, Sparkles, Star, Rocket, 
  Palette, Shield, TrendingUp, Target, Box
} from 'lucide-react';

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeView, setActiveView] = useState<'grid' | 'radar' | 'list'>('grid');
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);

  // Professional Icon Component with 24x24 grid system
  const IconWrapper = ({ icon: Icon, size = 24, gradient, className = "" }: any) => (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 rounded-lg blur-sm`} />
      <Icon 
        size={size * 0.65} 
        strokeWidth={2.5}
        className="relative z-10 text-white drop-shadow-[0_2px_8px_rgba(90,168,214,0.4)]"
      />
    </div>
  );

  const skillCategories = [
    {
      id: 1,
      category: 'frontend',
      title: 'Frontend Development',
      icon: Layout,
      gradient: 'from-[#3066be] to-[#5AA8D6]',
      iconSize: 56,
      skills: [
        { name: 'React & Next.js', level: 95, years: 5, projects: 45 },
        { name: 'TypeScript', level: 90, years: 4, projects: 50 },
        { name: 'Tailwind CSS', level: 95, years: 3, projects: 60 },
        { name: 'Vue.js', level: 85, years: 2, projects: 20 },
      ],
      size: 'col-span-2 row-span-2'
    },
    {
      id: 2,
      category: 'backend',
      title: 'Backend Development',
      icon: Server,
      gradient: 'from-[#5AA8D6] to-[#00bfff]',
      iconSize: 56,
      skills: [
        { name: 'Node.js', level: 90, years: 4, projects: 40 },
        { name: 'Python', level: 85, years: 3, projects: 25 },
        { name: 'GraphQL', level: 80, years: 2, projects: 15 },
        { name: 'REST API', level: 95, years: 5, projects: 55 },
      ],
      size: 'col-span-1 row-span-2'
    },
    {
      id: 3,
      category: 'database',
      title: 'Database',
      icon: Database,
      gradient: 'from-[#00bfff] to-[#5AA8D6]',
      iconSize: 48,
      skills: [
        { name: 'PostgreSQL', level: 90, years: 4, projects: 35 },
        { name: 'MongoDB', level: 85, years: 3, projects: 30 },
        { name: 'Redis', level: 80, years: 2, projects: 22 },
      ],
      size: 'col-span-1 row-span-1'
    },
    {
      id: 4,
      category: 'devops',
      title: 'DevOps & Cloud',
      icon: Terminal,
      gradient: 'from-[#3066be] to-[#00bfff]',
      iconSize: 48,
      skills: [
        { name: 'Docker', level: 85, years: 3, projects: 40 },
        { name: 'AWS', level: 80, years: 2, projects: 25 },
        { name: 'CI/CD', level: 82, years: 3, projects: 30 },
      ],
      size: 'col-span-1 row-span-1'
    },
    {
      id: 5,
      category: 'design',
      title: 'UI/UX Design',
      icon: Palette,
      gradient: 'from-[#5AA8D6] to-[#3066be]',
      iconSize: 48,
      skills: [
        { name: 'Figma', level: 90, years: 4, projects: 50 },
        { name: 'UI/UX', level: 88, years: 5, projects: 45 },
      ],
      size: 'col-span-1 row-span-1'
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#02000d] via-[#050939] to-[#02000d] overflow-hidden"
    >
      {/* Professional Grid Background */}
      <div className="absolute inset-0">
        {/* 8px baseline grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(90,168,214,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(90,168,214,0.008)_1px,transparent_1px)] bg-[size:8px_8px]" />
        {/* 64px major grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(90,168,214,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(90,168,214,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Ambient lighting with perfect positioning */}
        <motion.div
          className="absolute top-[20%] left-[20%] w-[56rem] h-[56rem] bg-[#3066be] rounded-full blur-[160px] opacity-[0.12]"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -80]),
          }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[20%] w-[56rem] h-[56rem] bg-[#5AA8D6] rounded-full blur-[160px] opacity-[0.10]"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 80]),
          }}
        />
      </div>

      <motion.div 
        className="relative max-w-7xl mx-auto z-10"
        style={{ opacity, scale }}
      >
        {/* Header with 8px baseline grid alignment */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          {/* Badge with perfect icon alignment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#131c80]/30 via-[#3066be]/20 to-[#131c80]/30 backdrop-blur-xl border border-[#5AA8D6]/30 rounded-full mb-10 shadow-[0_0_40px_rgba(90,168,214,0.2)]"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={20} strokeWidth={2.5} className="text-[#5AA8D6]" />
              </motion.div>
            </div>
            <span className="text-sm font-semibold text-slate-200 uppercase tracking-[0.15em] leading-none">
              Technical Excellence
            </span>
          </motion.div>

          {/* Title - 8px vertical rhythm */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]"
          >
            <span className="bg-gradient-to-r from-[#5AA8D6] via-[#3066be] to-[#00bfff] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(90,168,214,0.4)]">
              Skills & Expertise
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Mastering modern technologies with precision and expertise
          </motion.p>

          {/* View Switcher with perfect 48px touch targets */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center gap-2 mt-12 p-2 bg-gradient-to-r from-[#050939]/50 via-[#131c80]/30 to-[#050939]/50 backdrop-blur-2xl rounded-2xl border border-[#3066be]/20 inline-flex shadow-[0_0_60px_rgba(19,28,128,0.3)]"
          >
            {[
              { id: 'grid', label: 'Grid', icon: Layout },
              { id: 'radar', label: 'Analysis', icon: Target },
              { id: 'list', label: 'Details', icon: TrendingUp }
            ].map((view) => {
              const Icon = view.icon;
              const isActive = activeView === view.id;
              return (
                <motion.button
                  key={view.id}
                  onClick={() => setActiveView(view.id as any)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative flex items-center justify-center gap-2 min-w-[120px] h-12 px-5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeView"
                      className="absolute inset-0 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] rounded-xl shadow-[0_0_30px_rgba(90,168,214,0.6)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon size={18} strokeWidth={2.5} className="relative z-10" />
                  <span className="relative z-10">{view.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* GRID VIEW - Professional Bento with 24px grid system */}
        {activeView === 'grid' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[280px]"
          >
            {/* Hero Card with proper icon sizing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-2 row-span-2 group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-[#07203f]/60 to-[#050939]/60 backdrop-blur-3xl rounded-3xl p-8 border-2 border-[#131c80]/40 hover:border-[#5AA8D6]/60 transition-all duration-700 overflow-hidden shadow-[0_0_60px_rgba(19,28,128,0.4)] hover:shadow-[0_0_100px_rgba(90,168,214,0.7)]">
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#3066be]/10 via-transparent to-[#5AA8D6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    {/* Professional 64x64 icon container with 2px padding */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative w-16 h-16 mb-8"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3066be] to-[#5AA8D6] rounded-2xl shadow-[0_0_40px_rgba(90,168,214,0.5)]" />
                      <div className="absolute inset-[2px] bg-gradient-to-br from-[#3066be] to-[#5AA8D6] rounded-2xl flex items-center justify-center">
                        <Rocket size={36} strokeWidth={2.5} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
                      </div>
                    </motion.div>

                    <h3 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-[1.1]">
                      Technical
                      <br />
                      <span className="bg-gradient-to-r from-[#5AA8D6] to-[#00bfff] bg-clip-text text-transparent">
                        Mastery
                      </span>
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed">
                      Building exceptional experiences with cutting-edge technologies
                    </p>
                  </div>

                  {/* Stats with perfect 8px grid alignment */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: '150+', label: 'Projects', icon: Box },
                      { value: '5+', label: 'Years', icon: TrendingUp },
                      { value: '20+', label: 'Skills', icon: Star }
                    ].map((stat, idx) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="group/stat relative bg-[#131c80]/30 rounded-2xl p-4 backdrop-blur-sm border border-[#3066be]/20 hover:border-[#5AA8D6]/50 transition-all hover:shadow-[0_0_30px_rgba(90,168,214,0.3)]"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-2xl font-black bg-gradient-to-r from-[#5AA8D6] to-[#00bfff] bg-clip-text text-transparent">
                              {stat.value}
                            </div>
                            <div className="w-5 h-5 flex items-center justify-center opacity-40 group-hover/stat:opacity-100 transition-opacity">
                              <StatIcon size={16} strokeWidth={2.5} className="text-[#5AA8D6]" />
                            </div>
                          </div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider leading-none">{stat.label}</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skill Category Cards with consistent 48x48 icons */}
            {skillCategories.slice(0, 5).map((category, idx) => {
              const Icon = category.icon;
              const isHovered = hoveredCard === category.id;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + idx * 0.08 }}
                  className={`${category.size} group relative`}
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-full bg-gradient-to-br from-[#07203f]/60 to-[#050939]/60 backdrop-blur-3xl rounded-3xl p-6 border-2 border-[#131c80]/40 hover:border-[#5AA8D6]/60 transition-all duration-700 overflow-hidden shadow-[0_0_60px_rgba(19,28,128,0.4)] hover:shadow-[0_0_100px_rgba(90,168,214,0.7)]">
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-3xl`} />

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Header with 48x48 icon grid */}
                      <div className="flex items-center gap-3 mb-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="relative flex-shrink-0"
                          style={{ width: 48, height: 48 }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-xl shadow-[0_0_30px_rgba(90,168,214,0.4)]`} />
                          <div className={`absolute inset-[2px] bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center`}>
                            <Icon size={28} strokeWidth={2.5} className="text-white" />
                          </div>
                        </motion.div>
                        
                        <h3 className="text-xl font-black text-white leading-tight">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills list with proper alignment */}
                      <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar pr-1">
                        {category.skills.map((skill, skillIdx) => (
                          <motion.div
                            key={skillIdx}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + skillIdx * 0.08 }}
                            className="group/skill"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-slate-300 group-hover/skill:text-white transition-colors leading-none">
                                {skill.name}
                              </span>
                              <span className="text-sm font-black text-[#5AA8D6] tabular-nums leading-none">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-2 bg-[#131c80]/40 rounded-full overflow-hidden shadow-inner">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.2, delay: 0.5 + skillIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="h-full rounded-full relative overflow-hidden shadow-[0_0_15px_rgba(90,168,214,0.6)]"
                                style={{
                                  background: `linear-gradient(90deg, ${category.gradient.includes('3066be') ? '#3066be' : '#5AA8D6'}, ${category.gradient.includes('00bfff') ? '#00bfff' : '#5AA8D6'})`
                                }}
                              >
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                  animate={{ x: ['-100%', '200%'] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                              </motion.div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Optimized particles */}
                    {isHovered && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 0, scale: 0 }}
                            animate={{
                              opacity: [0, 1, 0],
                              y: [-16, -120],
                              scale: [0, 1, 0.4]
                            }}
                            transition={{
                              duration: 1.8,
                              delay: i * 0.15,
                              repeat: Infinity,
                              repeatDelay: 0.8
                            }}
                            className="absolute w-1 h-1 bg-[#5AA8D6] rounded-full shadow-[0_0_8px_rgba(90,168,214,1)]"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${60 + Math.random() * 30}%`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* RADAR VIEW with professional spacing */}
        {activeView === 'radar' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-[#07203f]/60 to-[#050939]/60 backdrop-blur-3xl rounded-3xl p-12 border-2 border-[#131c80]/40 shadow-[0_0_80px_rgba(19,28,128,0.5)]">
              <h3 className="text-3xl font-black text-center text-white mb-12">
                Technical Proficiency Overview
              </h3>
              
              <div className="flex items-center justify-center mb-12">
                <EnhancedRadarChart />
              </div>

              {/* Legend with perfect 16px icon grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skillCategories.flatMap(cat => cat.skills).slice(0, 8).map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="flex items-center gap-3 bg-[#131c80]/20 rounded-xl p-3 border border-[#3066be]/20 hover:border-[#5AA8D6]/50 transition-all"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#5AA8D6] shadow-[0_0_12px_rgba(90,168,214,0.8)] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-white truncate">{skill.name}</div>
                      <div className="text-xs text-slate-400 tabular-nums">{skill.level}%</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* LIST VIEW with consistent spacing */}
        {activeView === 'list' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="group relative bg-gradient-to-br from-[#07203f]/60 to-[#050939]/60 backdrop-blur-3xl rounded-3xl p-8 border-2 border-[#131c80]/40 hover:border-[#5AA8D6]/60 transition-all duration-700 shadow-[0_0_60px_rgba(19,28,128,0.4)]"
                >
                  <div className="flex items-center gap-4 mb-8">
                    {/* 56x56 icon for list headers */}
                    <div className="relative w-14 h-14 flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl shadow-[0_0_30px_rgba(90,168,214,0.5)]`} />
                      <div className={`absolute inset-[2px] bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center`}>
                        <Icon size={32} strokeWidth={2.5} className="text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + skillIdx * 0.06 }}
                        className="bg-[#131c80]/20 rounded-2xl p-5 border border-[#3066be]/20 hover:border-[#5AA8D6]/50 transition-all"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-bold text-white">{skill.name}</span>
                          <span className="text-lg font-black text-[#5AA8D6] tabular-nums">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="h-2.5 bg-[#131c80]/40 rounded-full overflow-hidden shadow-inner mb-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, delay: 0.3 + skillIdx * 0.06 }}
                            className="h-full rounded-full relative overflow-hidden shadow-[0_0_15px_rgba(90,168,214,0.7)]"
                            style={{ background: `linear-gradient(90deg, #3066be, #5AA8D6)` }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                          </motion.div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-slate-400 tabular-nums">
                          <span>{skill.years} years</span>
                          <span>{skill.projects} projects</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3066be, #5AA8D6);
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
}

// Professional Radar Chart with proper sizing
function EnhancedRadarChart() {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'TypeScript', level: 90 },
    { name: 'Database', level: 88 },
    { name: 'DevOps', level: 83 },
    { name: 'UI/UX', level: 88 },
  ];

  const size = 480;
  const center = size / 2;
  const maxRadius = size / 2 - 60;
  const angleStep = (Math.PI * 2) / skills.length;

  const points = skills.map((skill, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const radius = (skill.level / 100) * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <svg width={size} height={size} className="overflow-visible">
      <defs>
        <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3066be" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#5AA8D6" stopOpacity="0.2" />
        </linearGradient>
        <filter id="radarGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Grid circles with 8px baseline */}
      {[25, 50, 75, 100].map((value, i) => (
        <g key={i}>
          <circle
            cx={center}
            cy={center}
            r={maxRadius * (value / 100)}
            fill="none"
            stroke="rgba(90, 168, 214, 0.1)"
            strokeWidth="1"
            strokeDasharray="6 6"
          />
          <text
            x={center + 12}
            y={center - maxRadius * (value / 100) - 8}
            fill="rgba(148, 163, 184, 0.4)"
            fontSize="12"
            fontFamily="monospace"
            fontWeight="600"
          >
            {value}%
          </text>
        </g>
      ))}

      {/* Axis lines */}
      {skills.map((_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const x = center + maxRadius * Math.cos(angle);
        const y = center + maxRadius * Math.sin(angle);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke="rgba(90, 168, 214, 0.12)"
            strokeWidth="1"
          />
        );
      })}

      {/* Data area */}
      <motion.path
        d={pathData}
        fill="url(#radarGrad)"
        stroke="#5AA8D6"
        strokeWidth="2.5"
        filter="url(#radarGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      {/* Data points with 8px sizing */}
      {points.map((point, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
        >
          <circle
            cx={point.x}
            cy={point.y}
            r="8"
            fill="#5AA8D6"
            filter="url(#radarGlow)"
          />
          <circle
            cx={point.x}
            cy={point.y}
            r="4"
            fill="white"
          />
        </motion.g>
      ))}
    </svg>
  );
}
