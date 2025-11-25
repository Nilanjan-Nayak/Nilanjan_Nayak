import { useState, useEffect, useMemo } from 'react';
import { skillsData } from '../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, TrendingUp, Award, ChevronRight, Star,
  Play, Pause, RotateCcw, Layers, Eye, Grid3X3, Orbit,
  ArrowUpRight, Flame, Trophy, Clock, Briefcase, MousePointer2
} from 'lucide-react';

// ============================================
// PREMIUM BACKGROUND - FULLY RESPONSIVE
// ============================================
const PremiumBackground = () => {
  return (
    <>
      {/* Main gradient */}
      

      {/* Animated mesh gradient - Mobile/Tablet/Desktop */}
      <div className="absolute inset-0 opacity-20">
        {/* Mobile: 300px, Tablet: 500px, Desktop: 800px */}
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] lg:w-[800px] h-[300px] md:h-[500px] lg:h-[800px] rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-[60px] md:blur-[90px] lg:blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[400px] lg:w-[600px] h-[250px] md:h-[400px] lg:h-[600px] rounded-full bg-gradient-to-r from-purple-600/15 to-pink-600/15 blur-[50px] md:blur-[70px] lg:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Premium grid - Responsive sizing */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:48px_48px] lg:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)"/%3E%3C/svg%3E")' }} />

      {/* Floating orbs - Responsive count */}
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
// SKILL PLANET - MOBILE/TABLET/DESKTOP
// ============================================
const SkillPlanet = ({
  skill,
  index,
  totalSkills,
  onHover,
  gradient,
  orbitRadius,
  rotationAngle
}: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const angle = (index / totalSkills) * 360 + rotationAngle;
  const radians = (angle * Math.PI) / 180;

  const x = Math.cos(radians) * orbitRadius;
  const y = Math.sin(radians) * orbitRadius;

  // Mobile: 48px, Tablet: 60px, Desktop: 72px
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
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative"
      >
        {/* Outer glow */}
        {isHovered && (
          <motion.div
            className={`absolute -inset-2 md:-inset-3 lg:-inset-4 rounded-full bg-gradient-to-r ${gradient} blur-md md:blur-lg lg:blur-xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Planet container - Mobile: 48px, Tablet: 60px, Desktop: 72px */}
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
          {/* Animated gradient background */}
          {isHovered && (
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

          {/* Progress ring - Responsive viewBox */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 72 72">
            <circle
              cx="36"
              cy="36"
              r="34"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
            />
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

          {/* Skill icon/logo - Mobile: 24px, Tablet: 28px, Desktop: 36px */}
          <div className="relative z-10">
            {skill.logo ? (
              <motion.img
                src={skill.logo}
                alt={skill.name}
                className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 object-contain drop-shadow-lg"
                animate={{
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <span className="text-sm md:text-base lg:text-xl font-bold text-white drop-shadow-lg">
                {skill.name.substring(0, 2)}
              </span>
            )}
          </div>

          {/* Level badge - Responsive */}
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

        {/* Premium Tooltip - Desktop only */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute left-1/2 -translate-x-1/2 top-full mt-4 z-[200] hidden lg:block"
            >
              <div className="relative">
                {/* Arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-slate-800/95 border-l border-t border-slate-700/50" />

                {/* Tooltip content */}
                <div className="relative bg-slate-800/95 backdrop-blur-xl rounded-2xl p-5 min-w-[240px] border border-slate-700/50 shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-5`} />

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    {skill.logo && (
                      <div className="w-11 h-11 rounded-xl bg-slate-700/50 p-2.5 flex items-center justify-center ring-1 ring-slate-600/30">
                        <img src={skill.logo} alt="" className="w-full h-full object-contain" />
                      </div>
                    )}
                    <div>
                      <h4 className="text-base font-bold text-white">{skill.name}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(skill.level / 20) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-4 relative z-10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-slate-400 font-medium">Proficiency</span>
                      <span className="text-sm font-bold text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3 relative z-10">
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-700/30 border border-slate-600/20">
                      <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs text-slate-400">Experience</p>
                        <p className="text-sm font-semibold text-white">{skill.years} Years</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-700/30 border border-slate-600/20">
                      <Briefcase className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs text-slate-400">Projects</p>
                        <p className="text-sm font-semibold text-white">{skill.projects}+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// CENTRAL HUB - MOBILE/TABLET/DESKTOP
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
          {/* Glow layer - Responsive */}
          <div className={`absolute -inset-6 md:-inset-8 lg:-inset-10 rounded-full bg-gradient-to-r ${category.gradient} opacity-15 blur-2xl md:blur-3xl`} />

          {/* Main hub - Mobile: 100px, Tablet: 140px, Desktop: 200px */}
          <div className={`
            relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] rounded-full
            bg-gradient-to-br ${category.gradient} p-[2px] md:p-[3px]
            shadow-[0_0_40px_-15px_rgba(59,130,246,0.5)] md:shadow-[0_0_60px_-20px_rgba(59,130,246,0.5)] lg:shadow-[0_0_80px_-20px_rgba(59,130,246,0.5)]
          `}>
            <div className="w-full h-full rounded-full bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center relative overflow-hidden">
              {/* Inner effects */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5`} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

              {/* Content - Responsive */}
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

                    {/* Pause indicator - Desktop only */}
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
// ORBIT RINGS - RESPONSIVE
// ============================================
const OrbitRings = () => {
  return (
    <>
      {/* Main orbit path */}
      <div className="absolute inset-[15%] rounded-full border border-dashed md:border-2 border-blue-500/10" />

      {/* Secondary orbits */}
      <div className="absolute inset-[25%] rounded-full border border-purple-500/5" />
      <div className="absolute inset-[35%] rounded-full border border-cyan-500/5" />
    </>
  );
};

// ============================================
// CATEGORY CARD - MOBILE/TABLET/DESKTOP
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
      {/* Active indicator line */}
      {isActive && (
        <motion.div
          layoutId="activeCategoryLine"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 md:w-1 h-6 md:h-8 lg:h-10 rounded-r-full bg-white"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      <div className="flex items-center gap-2.5 md:gap-3 lg:gap-4">
        {/* Icon container - Mobile: 40px, Tablet: 44px, Desktop: 48px */}
        <div className={`
          w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg md:rounded-xl 
          flex items-center justify-center transition-all duration-300 flex-shrink-0
          ${isActive
            ? 'bg-white/20'
            : 'bg-slate-700/50 group-hover:bg-blue-500/20'
          }
        `}>
          <category.icon
            className={`w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'}`}
          />
        </div>

        {/* Text content - Responsive */}
        <div className="flex-1 min-w-0">
          <h4 className={`text-sm md:text-base font-bold transition-colors duration-300 truncate ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
            }`}>
            {category.title}
          </h4>
          <div className="flex items-center gap-1.5 md:gap-2 mt-0.5 md:mt-1">
            <span className={`text-xs md:text-sm transition-colors duration-300 ${isActive ? 'text-white/80' : 'text-slate-500'
              }`}>
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

        {/* Arrow */}
        <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 flex-shrink-0 ${isActive
            ? 'text-white translate-x-0.5 md:translate-x-1'
            : 'text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5 md:group-hover:translate-x-1'
          }`} />
      </div>

      {/* Skill preview dots - Tablet and Desktop only */}
      {!isActive && (
        <div className="hidden md:flex gap-1 mt-2.5 md:mt-3 ml-12 md:ml-14">
          {category.skills.slice(0, 6).map((skill: any, i: number) => (
            <div
              key={i}
              className="w-5 h-5 md:w-6 md:h-6 rounded-md md:rounded-lg bg-slate-700/50 border border-slate-600/30 overflow-hidden"
            >
              {skill.logo && (
                <img src={skill.logo} alt="" className="w-full h-full object-contain p-0.5 md:p-1 opacity-60" />
              )}
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
// STATS DASHBOARD - MOBILE/TABLET/DESKTOP
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
      className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-3 lg:gap-4"
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
            relative p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl backdrop-blur-xl border border-slate-700/50
            bg-slate-800/40 hover:bg-slate-800/60 hover:border-blue-500/30
            transition-all duration-300 overflow-hidden
          `}>
            {/* Background glow */}
            <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Icon - Mobile: 32px, Tablet: 36px, Desktop: 40px */}
            <div className={`relative z-10 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 md:mb-2.5 lg:mb-3 shadow-lg`}>
              <stat.icon className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-white" />
            </div>

            {/* Value - Responsive */}
            <p className={`relative z-10 font-bold text-white mb-0.5 md:mb-1 ${stat.small ? 'text-base md:text-lg truncate' : 'text-lg md:text-xl lg:text-2xl'}`}>
              {stat.value}
            </p>

            {/* Label - Responsive */}
            <p className="relative z-10 text-xs md:text-sm text-slate-400">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// ============================================
// GRID VIEW - MOBILE/TABLET/DESKTOP
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
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

            {/* Logo - Mobile: 32px, Tablet: 36px, Desktop: 40px */}
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

            {/* Name - Responsive */}
            <h5 className="relative z-10 text-[10px] md:text-xs font-medium text-slate-300 group-hover:text-white transition-colors truncate mb-1.5 md:mb-2">
              {skill.name}
            </h5>

            {/* Progress - Responsive */}
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
// CONTROL BAR - MOBILE/TABLET/DESKTOP
// ============================================
const ControlBar = ({
  isPlaying,
  onTogglePlay,
  onReset,
  viewMode,
  onViewModeChange
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5 lg:gap-3"
    >
      {/* View toggle - Responsive */}
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

      {/* Playback controls - Responsive */}
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

      {/* Status indicator - Responsive */}
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
// MAIN SKILLS COMPONENT - FULLY RESPONSIVE
// ============================================
export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'orbit' | 'grid'>('orbit');
  const [rotationAngle, setRotationAngle] = useState(0);

  const activeCategory = skillsData.categories[activeCategoryIndex];

  // Optimized rotation
  useEffect(() => {
    if (!isPlaying || isPaused || viewMode !== 'orbit') return;

    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.5) % 360);
    }, 16);

    return () => clearInterval(interval);
  }, [isPlaying, isPaused, viewMode]);

  // Auto-rotate categories
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveCategoryIndex((prev) => (prev + 1) % skillsData.categories.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleCategorySelect = (index: number) => {
    setActiveCategoryIndex(index);
  };

  const handleReset = () => {
    setActiveCategoryIndex(0);
    setRotationAngle(0);
    setIsPlaying(true);
  };

  // Responsive orbit radius - Mobile: 75px, Tablet: 110px, Desktop: 160px
  const orbitRadius = typeof window !== 'undefined'
    ? window.innerWidth < 768 ? 75 : window.innerWidth < 1024 ? 110 : 160
    : 110;

  return (
    <section
      id="skills"
      className="relative py-12 md:py-20 lg:py-32 overflow-hidden min-h-screen"
    >
      {/* Premium Background */}
      <PremiumBackground />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        {/* Section Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16 lg:mb-20"
        >
          {/* Premium badge - Responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 md:gap-2.5 lg:gap-3 px-3.5 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-5 md:mb-6 lg:mb-8 backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-blue-400" />
            <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Excellence
            </span>
          </motion.div>

          {/* Title - Mobile: 2xl, Tablet: 4xl, Desktop: 7xl */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-black mb-3 md:mb-4 lg:mb-6 leading-tight px-2 md:px-4">
            <span className="text-white">My Professional</span>
            <br />
            <span className="relative inline-block mt-1 md:mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Tech Stack
              </span>
              {/* Animated underline - Responsive */}
              <motion.div
                className="absolute -bottom-0.5 md:-bottom-1 lg:-bottom-2 left-0 right-0 h-0.5 md:h-1 lg:h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </span>
          </h2>

          {/* Description - Responsive */}
          <p className="text-xs md:text-base lg:text-lg xl:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto px-4">
            Explore my technical universe through an interactive visualization.
            Each technology represents years of learning and application.
          </p>
        </motion.div>

        {/* Control Bar - Responsive */}
        <div className="mb-6 md:mb-10 lg:mb-12">
          <ControlBar
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
            onReset={handleReset}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>

        {/* Main Content - Responsive Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-5 md:gap-8 lg:gap-12 mb-10 md:mb-14 lg:mb-16">

          {/* Category Sidebar - Responsive */}
          <div className="xl:sticky xl:top-8 xl:self-start">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2.5 md:mb-3 lg:mb-4 px-2"
            >
              Categories
            </motion.h3>
            <div className="flex xl:flex-col gap-2 md:gap-2.5 lg:gap-3 overflow-x-auto xl:overflow-visible pb-3 md:pb-4 xl:pb-0 scrollbar-hide snap-x snap-mandatory xl:snap-none">
              {skillsData.categories.map((category, index) => (
                <div key={category.id} className="flex-shrink-0 xl:flex-shrink snap-start">
                  <CategoryCard
                    category={category}
                    isActive={activeCategoryIndex === index}
                    onClick={() => handleCategorySelect(index)}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Visualization Area - Responsive */}
          <div>
            {/* Stats Dashboard - Responsive */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id + '-stats'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 md:mb-8 lg:mb-10"
              >
                <StatsDashboard category={activeCategory} />
              </motion.div>
            </AnimatePresence>

            {/* Orbit or Grid View - Responsive */}
            <AnimatePresence mode="wait">
              {viewMode === 'orbit' ? (
                <motion.div
                  key="orbit-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative"
                >
                  {/* Orbit container - Mobile: 280px, Tablet: 400px, Desktop: 550px */}
                  <div
                    className="relative w-full max-w-[280px] md:max-w-[400px] lg:max-w-[550px] mx-auto aspect-square"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    {/* Orbit rings */}
                    <OrbitRings />

                    {/* Central Hub */}
                    <PremiumCentralHub
                      category={activeCategory}
                      hoveredSkill={hoveredSkill}
                      isPaused={isPaused}
                    />

                    {/* Orbiting Skills */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCategory.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        {activeCategory.skills.map((skill: any, index: number) => (
                          <SkillPlanet
                            key={skill.name}
                            skill={skill}
                            index={index}
                            totalSkills={activeCategory.skills.length}
                            onHover={setHoveredSkill}
                            gradient={activeCategory.gradient}
                            orbitRadius={orbitRadius}
                            rotationAngle={rotationAngle}
                          />
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Interaction hint - Responsive */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center text-xs md:text-sm text-slate-500 mt-5 md:mt-6 lg:mt-8 px-4"
                  >
                    <Eye className="w-3 h-3 md:w-4 md:h-4 inline mr-1.5 md:mr-2" />
                    <span className="hidden md:inline">Hover over skills to explore • Move mouse over the orbit to pause</span>
                    <span className="md:hidden">Tap skills to explore details</span>
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  key="grid-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SkillsGridView
                    skills={activeCategory.skills}
                    gradient={activeCategory.gradient}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section - Currently Learning - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-10 md:pt-14 lg:pt-16 border-t border-slate-800/50"
        >
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-3.5 lg:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 mb-4 md:mb-5 lg:mb-6">
            <Flame className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-400" />
            <span className="text-xs md:text-sm font-medium text-orange-400">Currently Learning</span>
          </div>

          {/* Learning tags - Responsive */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 lg:gap-3 max-w-3xl mx-auto px-4">
            {['Next.js 15', 'AI/ML', 'Rust', 'Web3', 'System Design', 'Cloud'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group px-3 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-full bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 hover:border-orange-500/30 hover:bg-slate-800/60 transition-all duration-300 cursor-default"
              >
                <span className="text-xs md:text-sm text-slate-300 group-hover:text-orange-400 transition-colors">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 inline mr-1 md:mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {tech}
                </span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Keyframes */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}







// import { useState } from 'react';
// import { skillsData } from '../data/portfolio';

// export default function Skills() {
//   const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

//   return (
//     <section id="skills" className="relative py-20 lg:py-32 bg-transparent overflow-hidden">
//       {/* Background Elements Removed to show global fixed background */}

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5AA8D6] to-[#3066be]">
//               Technical Arsenal
//             </span>
//           </h2>
//           <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
//             A comprehensive overview of my technical skills and proficiency levels across different domains of software development.
//           </p>
//         </div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
//           {skillsData.categories.map((category) => {
//             const Icon = category.icon;
//             const isHovered = hoveredCategory === category.id;

//             return (
//               <div
//                 key={category.id}
//                 onMouseEnter={() => setHoveredCategory(category.id)}
//                 onMouseLeave={() => setHoveredCategory(null)}
//                 className={`relative group p-6 lg:p-8 bg-[#0a0e1a]/80 backdrop-blur-sm border border-[#1a1f35] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#3066be]/30 ${category.size}`}
//               >
//                 {/* Background Gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

//                 {/* Content */}
//                 <div className="relative z-10 h-full flex flex-col">
//                   {/* Header */}
//                   <div className="flex items-start justify-between mb-6">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
//                       <Icon size={category.iconSize / 2} className="text-white" />
//                     </div>
//                     <div className="text-xs font-mono text-slate-500 bg-[#131c80]/10 px-2 py-1 rounded border border-[#131c80]/20">
//                       {category.skills.length} Skills
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#5AA8D6] transition-colors">
//                     {category.title}
//                   </h3>

//                   {/* Skills List */}
//                   <div className="space-y-4 mt-auto">
//                     {category.skills.map((skill, idx) => (
//                       <div key={idx} className="space-y-1.5">
//                         <div className="flex justify-between text-sm">
//                           <span className="text-slate-300 font-medium">{skill.name}</span>
//                           <span className="text-slate-500 text-xs">{skill.level}%</span>
//                         </div>
//                         <div className="h-1.5 w-full bg-[#1a1f35] rounded-full overflow-hidden">
//                           <div
//                             className={`h-full rounded-full bg-gradient-to-r ${category.gradient} transform origin-left transition-transform duration-1000 ease-out`}
//                             style={{
//                               width: `${skill.level}%`,
//                               transform: isHovered ? 'scaleX(1)' : 'scaleX(0)'
//                             }}
//                           />
//                         </div>
//                         <div className="flex justify-between text-[10px] text-slate-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                           <span>{skill.years}y exp</span>
//                           <span>{skill.projects} projects</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Stats */}
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 border-t border-[#1a1f35] pt-12">
//           {skillsData.radar.slice(0, 4).map((stat, index) => (
//             <div key={index} className="text-center space-y-2">
//               <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#5AA8D6] to-[#3066be]">
//                 {stat.level}%
//               </div>
//               <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
//                 {stat.name}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }