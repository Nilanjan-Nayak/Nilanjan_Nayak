import { useState, useEffect, useMemo } from 'react';
import { skillsData } from '../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, TrendingUp, Award, ChevronRight, Star,
  Play, Pause, RotateCcw, Layers, Grid3X3, Orbit,
  Flame, Trophy, Clock, Briefcase, MousePointer2
} from 'lucide-react';

// ============================================
// PREMIUM BACKGROUND - FULLY RESPONSIVE
// ============================================
const PremiumBackground = () => {
  return (
    <>
      {/* Animated mesh gradient - Mobile/Tablet/Desktop */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] lg:w-[800px] h-[300px] md:h-[500px] lg:h-[800px] rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-[60px] md:blur-[90px] lg:blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[400px] lg:w-[600px] h-[250px] md:h-[400px] lg:h-[600px] rounded-full bg-gradient-to-r from-purple-600/15 to-pink-600/15 blur-[50px] md:blur-[70px] lg:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Premium grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:48px_48px] lg:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Floating orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400/30"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + (i % 2) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

// ============================================
// SKILL DETAILS PANEL - COMPACT PROFESSIONAL DESIGN
// ============================================
const SkillDetailsPanel = ({ skill, category }: any) => {
  if (!skill) {
    return (
      <div className="h-full min-h-[280px] flex flex-col items-center justify-center p-4 text-center border border-slate-800/50 backdrop-blur-md rounded-xl relative overflow-hidden group">
        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <category.icon className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
          </div>
        </div>

        <h3 className="relative z-10 text-base font-bold text-white mb-1">Select Technology</h3>
        <p className="relative z-10 text-slate-500 text-xs max-w-[180px]">
          Click on any skill to view details
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      key={skill.name}
      className="relative h-full min-h-[280px] bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden shadow-2xl"
    >
      {/* Hexagonal pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" className="text-blue-400" />
        </svg>
      </div>

      {/* Top accent bar */}
      <div className={`h-0.5 bg-gradient-to-r ${category.gradient}`} />

      <div className="p-4 relative z-10 h-auto flex flex-col">
        {/* Compact Header */}
        <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-slate-700/50">
          {/* Logo container */}
          <div className="relative w-11 h-11 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg rotate-45 border border-slate-700/50" />
            <div className={`absolute inset-0.5 bg-gradient-to-br ${category.gradient} opacity-10 rounded-lg rotate-45`} />
            <div className="absolute inset-0 flex items-center justify-center">
              {skill.logo ? (
                <img src={skill.logo} alt={skill.name} className="w-7 h-7 object-contain drop-shadow-lg" />
              ) : (
                <span className="text-base font-bold text-white">{skill.name.substring(0, 2)}</span>
              )}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-black text-white truncate mb-0.5">{skill.name}</h3>
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-slate-800/80 text-slate-400 border border-slate-700/50 uppercase tracking-wide">
                {category.title}
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-2 h-2 ${i < Math.floor(skill.level / 20) ? 'fill-yellow-500 text-yellow-500' : 'fill-slate-800 text-slate-800'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compact Proficiency Display */}
        <div className="mb-3">
          <div className="flex items-end justify-between mb-1.5">
            <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Proficiency</span>
            <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {skill.level}%
            </span>
          </div>
          <div className="relative h-1.5 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/30">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "circOut" }}
              className={`h-full bg-gradient-to-r ${category.gradient} relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Compact Stats - Inline */}
        <div className="grid grid-cols-2 gap-2.5 mb-3">
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/30 border border-slate-700/30 group hover:bg-slate-800/50 transition-all">
            <div className="w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="min-w-0">
              <div className="text-base font-bold text-white leading-none mb-0.5">{skill.years}</div>
              <div className="text-[8px] text-slate-400 uppercase tracking-wide font-semibold">Years</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/30 border border-slate-700/30 group hover:bg-slate-800/50 transition-all">
            <div className="w-7 h-7 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="min-w-0">
              <div className="text-base font-bold text-white leading-none mb-0.5">{skill.projects}+</div>
              <div className="text-[8px] text-slate-400 uppercase tracking-wide font-semibold">Projects</div>
            </div>
          </div>
        </div>

        {/* Compact Tags/Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[9px] font-semibold text-blue-400">
            Production Ready
          </span>
          <span className="px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20 text-[9px] font-semibold text-green-400">
            {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Advanced' : 'Intermediate'}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[9px] font-semibold text-purple-400">
            Active
          </span>
        </div>

        {/* Compact Footer */}
        <div className="mt-auto pt-2.5 border-t border-slate-700/30">
          <p className="text-[10px] text-slate-400 leading-relaxed">
            <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient} mr-1.5`} />
            Proven expertise in building scalable solutions
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================
// SKILL PLANET - MOBILE/TABLET/DESKTOP
// ============================================
const SkillPlanet = ({
  skill,
  index,
  totalSkills,
  onHover,
  onClick,
  gradient,
  orbitRadius,
  rotationAngle
}: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const angle = (index / totalSkills) * 360 + rotationAngle;
  const radians = (angle * Math.PI) / 180;

  const x = Math.cos(radians) * orbitRadius;
  const y = Math.sin(radians) * orbitRadius;

  const planetSize = typeof window !== 'undefined'
    ? window.innerWidth < 768 ? 24 : window.innerWidth < 1024 ? 30 : 36
    : 30;

  return (
    <motion.div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
        x: x - planetSize,
        y: y - planetSize,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(skill);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(skill);
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative"
      >
        {isHovered && (
          <motion.div
            className={`absolute -inset-2 md:-inset-3 lg:-inset-4 rounded-full bg-gradient-to-r ${gradient} blur-md md:blur-lg lg:blur-xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <div className={`
          relative w-12 h-12 md:w-[60px] md:h-[60px] lg:w-[72px] lg:h-[72px] 
          rounded-xl md:rounded-2xl cursor-pointer
          bg-gradient-to-br from-slate-800/90 to-slate-900/90
          backdrop-blur-xl border-2 transition-all duration-300
          flex items-center justify-center overflow-hidden
          shadow-[0_4px_16px_rgba(0,0,0,0.4)] md:shadow-[0_6px_24px_rgba(0,0,0,0.4)] lg:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
          ${isHovered
            ? 'border-blue-400/60 shadow-[0_8px_32px_rgba(59,130,246,0.4)] md:shadow-[0_10px_40px_rgba(59,130,246,0.4)] lg:shadow-[0_12px_48px_rgba(59,130,246,0.4)]'
            : 'border-slate-700/50'
          }
        `}>
          {isHovered && (
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 0.3 }}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="34" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <motion.circle
              cx="36"
              cy="36"
              r="34"
              fill="none"
              stroke="url(#planetGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${skill.level * 2.14} 214`}
              initial={{ strokeDasharray: "0 214" }}
              animate={{ strokeDasharray: `${skill.level * 2.14} 214` }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="planetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10">
            {skill.logo ? (
              <motion.img
                src={skill.logo}
                alt={skill.name}
                className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 object-contain drop-shadow-lg"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <span className="text-sm md:text-base lg:text-xl font-bold text-white drop-shadow-lg">
                {skill.name.substring(0, 2)}
              </span>
            )}
          </div>

          {isHovered && (
            <motion.div
              className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg border-2 border-slate-900"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <span className="text-[9px] md:text-[10px] lg:text-[11px] font-bold text-white">{skill.level}</span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// PREMIUM ORBIT VIEW
// ============================================
const PremiumOrbitView = ({ category, onHoverSkill, onSkillClick }: any) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);

  const orbitRadius = typeof window !== 'undefined'
    ? window.innerWidth < 768 ? 75 : window.innerWidth < 1024 ? 110 : 160
    : 110;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.5) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSkillHover = (skill: any) => {
    setHoveredSkill(skill);
    onHoverSkill(skill);
    if (skill) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <OrbitRings />
      <PremiumCentralHub category={category} hoveredSkill={hoveredSkill} isPaused={isPaused} />
      {category.skills.map((skill: any, index: number) => (
        <SkillPlanet
          key={skill.name}
          skill={skill}
          index={index}
          totalSkills={category.skills.length}
          onHover={handleSkillHover}
          onClick={onSkillClick}
          gradient={category.gradient}
          orbitRadius={orbitRadius}
          rotationAngle={rotationAngle}
        />
      ))}
    </div>
  );
};

// ============================================
// CENTRAL HUB
// ============================================
const PremiumCentralHub = ({ category, hoveredSkill, isPaused }: any) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={hoveredSkill?.name || category.id}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className={`absolute -inset-6 md:-inset-8 lg:-inset-10 rounded-full bg-gradient-to-r ${category.gradient} opacity-15 blur-2xl md:blur-3xl`} />

          <div className={`
            relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] rounded-full
            bg-gradient-to-br ${category.gradient} p-[2px] md:p-[3px]
            shadow-[0_0_40px_-15px_rgba(59,130,246,0.5)] md:shadow-[0_0_60px_-20px_rgba(59,130,246,0.5)] lg:shadow-[0_0_80px_-20px_rgba(59,130,246,0.5)]
          `}>
            <div className="w-full h-full rounded-full bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5`} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

              <div className="relative z-10 text-center px-2 md:px-3 lg:px-4">
                {hoveredSkill ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center"
                  >
                    {hoveredSkill.logo ? (
                      <img
                        src={hoveredSkill.logo}
                        alt={hoveredSkill.name}
                        className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain mb-1.5 md:mb-2 lg:mb-3 drop-shadow-2xl"
                      />
                    ) : (
                      <div className={`w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-lg md:rounded-xl lg:rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-1.5 md:mb-2 lg:mb-3`}>
                        <span className="text-base md:text-xl lg:text-2xl font-bold text-white">{hoveredSkill.name.substring(0, 2)}</span>
                      </div>
                    )}
                    <h3 className="text-xs md:text-base lg:text-xl font-bold text-white mb-0.5 md:mb-1 line-clamp-1 max-w-full">{hoveredSkill.name}</h3>
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="px-1.5 md:px-2 lg:px-3 py-0.5 md:py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
                        <span className="text-[10px] md:text-xs lg:text-sm font-bold text-blue-400">{hoveredSkill.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center"
                  >
                    <div className={`w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-lg md:rounded-xl lg:rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-1.5 md:mb-2 lg:mb-4 shadow-lg`}>
                      <category.icon className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 text-white drop-shadow-lg" />
                    </div>
                    <h3 className="text-sm md:text-lg lg:text-2xl font-bold text-white mb-0.5 md:mb-1 lg:mb-2">{category.title}</h3>
                    <p className="text-[10px] md:text-xs lg:text-sm text-slate-400">{category.skills.length} Technologies</p>

                    {isPaused && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="hidden lg:flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50"
                      >
                        <MousePointer2 className="w-3 h-3 text-blue-400" />
                        <span className="text-xs text-slate-400">Hovering</span>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ============================================
// ORBIT RINGS
// ============================================
const OrbitRings = () => {
  return (
    <>
      <div className="absolute inset-[15%] rounded-full border border-dashed md:border-2 border-blue-500/10" />
      <div className="absolute inset-[25%] rounded-full border border-purple-500/5" />
      <div className="absolute inset-[35%] rounded-full border border-cyan-500/5" />
    </>
  );
};

// ============================================
// CATEGORY CARD
// ============================================
const CategoryCard = ({ category, isActive, onClick, index }: any) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative w-full min-w-[180px] md:min-w-[220px] lg:min-w-0 
        p-3 md:p-3.5 lg:p-4 rounded-xl md:rounded-2xl transition-all duration-300 text-left
        ${isActive
          ? 'bg-gradient-to-r ' + category.gradient + ' shadow-[0_6px_24px_-8px_rgba(59,130,246,0.4)] md:shadow-[0_8px_32px_-10px_rgba(59,130,246,0.4)] lg:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.4)]'
          : 'bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/30'
        }
      `}
    >
      {isActive && (
        <motion.div
          layoutId="activeCategoryLine"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 md:w-1 h-6 md:h-8 lg:h-10 rounded-r-full bg-white"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      <div className="flex items-center gap-2.5 md:gap-3 lg:gap-4">
        <div className={`
          w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg md:rounded-xl 
          flex items-center justify-center transition-all duration-300 flex-shrink-0
          ${isActive ? 'bg-white/20' : 'bg-slate-700/50 group-hover:bg-blue-500/20'}
        `}>
          <category.icon className={`w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'}`} />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className={`text-sm md:text-base font-bold transition-colors duration-300 truncate ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
            {category.title}
          </h4>
          <div className="flex items-center gap-1.5 md:gap-2 mt-0.5 md:mt-1">
            <span className={`text-xs md:text-sm transition-colors duration-300 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
              {category.skills.length} skills
            </span>
            {isActive && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden md:flex items-center gap-1 px-1.5 md:px-2 py-0.5 rounded-full bg-white/20 text-[10px] md:text-xs text-white"
              >
                <Flame className="w-2.5 h-2.5 md:w-3 md:h-3" />
                Active
              </motion.span>
            )}
          </div>
        </div>

        <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 flex-shrink-0 ${isActive
          ? 'text-white translate-x-0.5 md:translate-x-1'
          : 'text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5 md:group-hover:translate-x-1'
          }`} />
      </div>

      {!isActive && (
        <div className="hidden md:flex gap-1 mt-2.5 md:mt-3 ml-12 md:ml-14">
          {category.skills.slice(0, 6).map((skill: any, i: number) => (
            <div key={i} className="w-5 h-5 md:w-6 md:h-6 rounded-md md:rounded-lg bg-slate-700/50 border border-slate-600/30 overflow-hidden">
              {skill.logo && <img src={skill.logo} alt="" className="w-full h-full object-contain p-0.5 md:p-1 opacity-60" />}
            </div>
          ))}
          {category.skills.length > 6 && (
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-md md:rounded-lg bg-slate-700/50 border border-slate-600/30 flex items-center justify-center">
              <span className="text-[9px] md:text-[10px] text-slate-500">+{category.skills.length - 6}</span>
            </div>
          )}
        </div>
      )}
    </motion.button>
  );
};

// ============================================
// STATS DASHBOARD - COMPACT VERSION
// ============================================
const StatsDashboard = ({ category }: any) => {
  const stats = useMemo(() => {
    const totalProjects = category.skills.reduce((a: number, b: any) => a + b.projects, 0);
    const avgLevel = Math.round(category.skills.reduce((a: number, b: any) => a + b.level, 0) / category.skills.length);
    const topSkill = category.skills.reduce((a: any, b: any) => a.level > b.level ? a : b);

    return [
      { label: 'Total Skills', value: category.skills.length, icon: Layers, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10' },
      { label: 'Avg Level', value: `${avgLevel}%`, icon: TrendingUp, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/10' },
      { label: 'Projects', value: `${totalProjects}+`, icon: Award, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10' },
      { label: 'Top Skill', value: topSkill.name, icon: Trophy, color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-500/10', small: true },
    ];
  }, [category]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2.5"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="group relative"
        >
          <div className={`
            relative p-3 md:p-3.5 rounded-xl backdrop-blur-xl border border-slate-700/50
            bg-slate-800/40 hover:bg-slate-800/60 hover:border-blue-500/30
            transition-all duration-300 overflow-hidden
          `}>
            <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className={`relative z-10 w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 shadow-lg`}>
              <stat.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
            </div>

            <p className={`relative z-10 font-bold text-white mb-0.5 ${stat.small ? 'text-base md:text-lg truncate' : 'text-lg md:text-xl'}`}>
              {stat.value}
            </p>
            <p className="relative z-10 text-xs text-slate-400">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// ============================================
// GRID VIEW
// ============================================
const SkillsGridView = ({ skills, gradient }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-2.5 lg:gap-3"
    >
      {skills.map((skill: any, index: number) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.03 }}
          whileHover={{ y: -4, scale: 1.05 }}
          className="group"
        >
          <div className="relative p-3 md:p-3.5 lg:p-4 rounded-xl md:rounded-2xl bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300 text-center">
            <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

            <div className="relative z-10 mb-2 md:mb-2.5 lg:mb-3">
              {skill.logo ? (
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 mx-auto rounded-lg md:rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                  <span className="text-xs md:text-sm font-bold text-white">{skill.name.substring(0, 2)}</span>
                </div>
              )}
            </div>

            <h5 className="relative z-10 text-[10px] md:text-xs font-medium text-slate-300 group-hover:text-white transition-colors truncate mb-1.5 md:mb-2">
              {skill.name}
            </h5>

            <div className="relative z-10 h-0.5 md:h-1 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.03 }}
                className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// ============================================
// CONTROL BAR
// ============================================
const ControlBar = ({ isPlaying, onTogglePlay, onReset, viewMode, onViewModeChange }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5"
    >
      <div className="flex items-center p-0.5 md:p-1 rounded-lg md:rounded-xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50">
        {[
          { id: 'orbit', icon: Orbit, label: 'Orbit' },
          { id: 'grid', icon: Grid3X3, label: 'Grid' },
        ].map((view) => (
          <button
            key={view.id}
            onClick={() => onViewModeChange(view.id)}
            className={`
              flex items-center gap-1.5 md:gap-2 px-3 md:px-3.5 lg:px-4 py-1.5 md:py-2 rounded-md md:rounded-lg transition-all duration-300
              ${viewMode === view.id
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }
            `}
          >
            <view.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">{view.label}</span>
          </button>
        ))}
      </div>

      {viewMode === 'orbit' && (
        <div className="flex items-center gap-1.5 md:gap-2 p-0.5 md:p-1 rounded-lg md:rounded-xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50">
          <button
            onClick={onTogglePlay}
            className={`
              flex items-center gap-1.5 md:gap-2 px-3 md:px-3.5 lg:px-4 py-1.5 md:py-2 rounded-md md:rounded-lg transition-all duration-300
              ${isPlaying
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-slate-700/50 text-slate-400 hover:text-white'
              }
            `}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Play className="w-3.5 h-3.5 md:w-4 md:h-4" />}
            <span className="text-xs md:text-sm font-medium hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <button
            onClick={onReset}
            className="p-1.5 md:p-2 rounded-md md:rounded-lg bg-slate-700/50 text-slate-400 hover:text-white transition-all duration-300"
          >
            <RotateCcw className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-3.5 lg:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50">
        <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-slate-500'}`} />
        <span className="text-xs md:text-sm text-slate-400 hidden sm:inline">
          {isPlaying ? 'Auto' : 'Paused'}
        </span>
      </div>
    </motion.div>
  );
};

// ============================================
// MAIN SKILLS COMPONENT - COMPACT HEADER
// ============================================
export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'orbit' | 'grid'>('orbit');
  const [rotationAngle, setRotationAngle] = useState(0);

  const activeCategory = skillsData.categories[activeCategoryIndex];

  useEffect(() => {
    if (!isPlaying || isPaused || viewMode !== 'orbit') return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.5) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, [isPlaying, isPaused, viewMode]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveCategoryIndex((prev) => (prev + 1) % skillsData.categories.length);
      setSelectedSkill(null);
    }, 10000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleCategorySelect = (index: number) => {
    setActiveCategoryIndex(index);
    setSelectedSkill(null);
  };

  const handleReset = () => {
    setActiveCategoryIndex(0);
    setRotationAngle(0);
    setIsPlaying(true);
    setSelectedSkill(null);
  };

  const handleSkillClick = (skill: any) => {
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="relative py-10 md:py-16 lg:py-24 overflow-hidden min-h-screen">
      <PremiumBackground />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* COMPACT HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4 backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Excellence
            </span>
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 md:mb-3 leading-tight px-2">
            <span className="text-white">My Professional</span>
            <br />
            <span className="relative inline-block mt-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Tech Stack
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 md:h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto px-4">
            Explore my technical universe through an interactive visualization.
            Each technology represents years of learning and application.
          </p>
        </motion.div>

        <div className="mb-5 md:mb-8">
          <ControlBar
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
            onReset={handleReset}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-5 md:gap-8 lg:gap-10 mb-8 md:mb-12">
          <div className="flex xl:flex-col gap-3 overflow-x-auto xl:overflow-x-visible pb-2 xl:pb-0 scrollbar-hide">
            {skillsData.categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={activeCategoryIndex === index}
                onClick={() => handleCategorySelect(index)}
                index={index}
              />
            ))}
          </div>

          <div className="space-y-5 md:space-y-6">
            <StatsDashboard category={activeCategory} />

            {viewMode === 'orbit' ? (
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
                <div
                  className="flex-1"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <PremiumOrbitView
                    category={activeCategory}
                    onHoverSkill={setHoveredSkill}
                    onSkillClick={handleSkillClick}
                  />

                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-500">
                    <div className="hidden md:flex items-center gap-2">
                      <MousePointer2 className="w-3.5 h-3.5" />
                      <span>Click skills to view details • Hover to pause</span>
                    </div>
                    <div className="flex md:hidden items-center gap-2">
                      <MousePointer2 className="w-3.5 h-3.5" />
                      <span>Tap skills to view details</span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[340px] xl:w-[380px]">
                  <SkillDetailsPanel skill={selectedSkill} category={activeCategory} />
                </div>
              </div>
            ) : (
              <SkillsGridView skills={activeCategory.skills} gradient={activeCategory.gradient} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
