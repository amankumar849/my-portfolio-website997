import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, RefreshCw } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Initializing Aman\'s Core Engine...');

  // Light/Dark Theme Management
  useEffect(() => {
    // Check local storage or default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light';
    const activeTheme = savedTheme || 'dark';
    
    setTheme(activeTheme);
    if (activeTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  // Typing Loading Simulation sequences
  useEffect(() => {
    const texts = [
      'Loading portfolio modules...',
      'Assembling MERN Stack definitions...',
      'Mapping responsive UI grid systems...',
      'Establishing connection secure...',
      'Aman Kumar Portfolio Ready.'
    ];

    let count = 0;
    const interval = setInterval(() => {
      if (count < texts.length) {
        setLoadingText(texts[count]);
        count++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 300);
      }
    }, 350);

    return () => clearInterval(interval);
  }, []);

  const navigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`min-h-screen font-sans ${
      theme === 'dark' 
        ? 'bg-neutral-950 text-slate-100 selection:bg-blue-500/30 selection:text-blue-300' 
        : 'bg-neutral-50 text-slate-900 selection:bg-purple-500/20 selection:text-purple-700'
    } transition-colors duration-300`}>
      
      {/* Premium Developer-Style Loader Backdrop */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col justify-center items-center p-4"
            id="splash-loader"
          >
            <div className="space-y-6 w-full max-w-md text-center">
              {/* Spinner Logo graphic */}
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center p-3 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25">
                <Terminal className="w-8 h-8 text-white" />
                <div className="absolute inset-x-0 bottom-0 top-0 border-2 border-white/20 rounded-2xl animate-pulse" />
              </div>

              {/* Progress feedback */}
              <div className="space-y-3">
                <p className="font-mono text-xs text-blue-400 tracking-widest uppercase">
                  Bootstrapping Environment
                </p>
                
                <div className="h-1 w-44 bg-neutral-900 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse w-full" />
                </div>

                <p className="font-mono text-[10px] text-zinc-500 h-4">
                  {loadingText}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Sections Assembly */}
      {!loading && (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero onNavigate={navigateToSection} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
