import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import WelcomeScreen from './components/WelcomeScreen';


function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      <WelcomeScreen onLoadingComplete={handleLoadingComplete} />
      {!showWelcome && (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div
            className="fixed inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at ${50 + scrollY * 0.02}% ${50 + scrollY * 0.01}%, #3b82f6 0%, transparent 50%)`,
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />

          <div className="relative z-10">
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>

          <footer className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50 py-8">
            <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
              <p>© 2025 Portfolio. Crafted with passion and precision.</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
