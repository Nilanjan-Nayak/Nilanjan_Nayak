import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Code2, Github, Terminal, Zap, Sparkles, LucideIcon, Database, Rocket } from 'lucide-react';

// Premium Particle System
const ParticleField = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 3,
    direction: Math.random() > 0.5 ? 1 : -1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-[#5AA8D6]/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, -100],
            x: [0, particle.direction * 30, 0],
            opacity: [0, 0.6, 0.2, 0],
            scale: [0.5, 1, 0.7, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.7, 1],
          }}
        />
      ))}
    </div>
  );
};

// Elegant Typewriter Effect
const TypewriterEffect = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 120);
    
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [text]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        className="ml-1 text-[#5AA8D6]"
      >
        |
      </motion.span>
    </span>
  );
};

// Premium Background Effects
const BackgroundEffect = () => (
  <>
    {/* Animated Gradient Orbs */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#3066be]/20 rounded-full filter blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#5AA8D6]/15 rounded-full filter blur-[120px]"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#131c80]/15 rounded-full filter blur-[140px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>

    {/* Subtle Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(90,168,214,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(90,168,214,0.02)_1px,transparent_1px)] bg-[size:120px_120px] opacity-40" />
    
    {/* Particle Field */}
    <ParticleField />
  </>
);

// Premium Icon Button
const IconButton = ({ Icon, delay = 0 }: { Icon: LucideIcon; delay?: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay,
        type: "spring",
        stiffness: 200,
        damping: 10
      }}
      whileHover={{ scale: 1.15, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-3 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] rounded-full blur-lg"
        animate={{
          opacity: isHovered ? 0.6 : 0.2,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icon Container */}
      <div className="relative p-3 sm:p-4 bg-gradient-to-br from-[#050939]/90 to-[#02000d]/90 backdrop-blur-xl rounded-full border border-[#131c80]/40 shadow-2xl">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-slate-200" />
        
        {/* Sparkle Effect on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <Sparkles className="w-10 h-10 text-[#5AA8D6]/50" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Elegant Loading Progress
const LoadingProgress = ({ progress }: { progress: number }) => (
  <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-72 z-50">
    <div className="relative">
      <div className="h-1.5 bg-[#131c80]/20 rounded-full overflow-hidden backdrop-blur-sm border border-[#131c80]/20">
        <motion.div
          className="h-full bg-gradient-to-r from-[#3066be] via-[#5AA8D6] to-[#00bfff] relative"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute -top-8 left-0 text-xs text-slate-500 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Loading Experience... {progress}%
      </motion.div>
    </div>
  </div>
);

interface WelcomeScreenProps {
  onLoadingComplete?: () => void;
}

const WelcomeScreen = ({ onLoadingComplete }: WelcomeScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const backgroundX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-30, 30]);
  const backgroundY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-30, 30]);

  useEffect(() => {
    // Smooth loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
              onLoadingComplete?.();
            }, 800);
          }, 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 35);

    // Mouse tracking for parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(progressInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [onLoadingComplete, mouseX, mouseY]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      filter: 'blur(10px)',
      transition: { duration: 0.8 }
    }
  };

  const icons = [Code2, Terminal, Github, Database, Rocket];

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-b from-[#02000d] via-[#050939] to-[#02000d] overflow-hidden z-[100]"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Parallax Background */}
          <motion.div
            className="absolute inset-0"
            style={{
              x: backgroundX,
              y: backgroundY,
            }}
          >
            <BackgroundEffect />
          </motion.div>
          
          <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 z-10">
            <div className="w-full max-w-5xl mx-auto">
              
              {/* Animated Icon Circle */}
              <div className="flex justify-center mb-16">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#3066be]/10 to-[#5AA8D6]/10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="relative flex gap-4 sm:gap-6 md:gap-8">
                    {icons.map((Icon, index) => (
                      <IconButton key={index} Icon={Icon} delay={index * 0.1} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <motion.div
                className="text-center space-y-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Welcome Text */}
                <div className="space-y-6">
                  <motion.h1
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                  >
                    <span className="block bg-gradient-to-r from-[#3066be] via-[#5AA8D6] to-[#00bfff] bg-clip-text text-transparent">
                      Welcome
                    </span>
                  </motion.h1>
                  
                  <motion.div
                    className="text-xl sm:text-2xl md:text-3xl text-slate-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <span className="font-light">to my</span>{' '}
                    <span className="font-bold bg-gradient-to-r from-[#5AA8D6] to-[#00bfff] bg-clip-text text-transparent">
                      Professional Portfolio
                    </span>
                  </motion.div>
                </div>

                {/* Name with Typewriter */}
                <motion.div
                  className="pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl backdrop-blur-xl bg-[#050939]/40 border border-[#131c80]/30 hover:bg-[#050939]/60 hover:border-[#3066be]/40 transition-all duration-300 cursor-pointer group">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 text-[#5AA8D6]" />
                    </motion.div>
                    <TypewriterEffect 
                      text="Nilanjan Nayak" 
                      className="text-xl sm:text-2xl font-semibold text-slate-100"
                    />
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                  className="pt-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] hover:from-[#5AA8D6] hover:to-[#00bfff] text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_8px_24px_rgba(90,168,214,0.4)] transition-all duration-300 overflow-hidden"
                    onClick={() => setLoadingProgress(100)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative flex items-center gap-2">
                      Enter Portfolio
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Loading Progress */}
          <LoadingProgress progress={loadingProgress} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
