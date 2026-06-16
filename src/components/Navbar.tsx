import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="app-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-neutral-900/80 light:bg-white/85 backdrop-blur-md border-b border-white-5 light:border-black-5 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left"
            id="nav-logo-btn"
          >
            <div className="p-1.5 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Aman Kumar
              </span>
              <span className="hidden sm:inline-block text-[10px] block font-mono text-neutral-400 light:text-neutral-500 tracking-widest uppercase ml-1">
                Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" id="nav-desktop-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer relative ${
                  activeSection === item.id
                    ? 'text-blue-400 font-semibold'
                    : 'text-neutral-300 light:text-neutral-700 hover:text-white light:hover:text-black hover:bg-white/5 light:hover:bg-black/5'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-blue-500/10 light:bg-blue-500/10 rounded-full -z-10 border border-blue-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls: Socials, Theme Toggle, Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            {/* Quick social links */}
            <div className="hidden sm:flex items-center gap-1.5 border-r border-white/10 pr-3">
              <a
                href="https://github.com/amankumar849"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full text-neutral-400 light:text-neutral-600 hover:text-white light:hover:text-black hover:bg-white/10 transition-colors"
                title="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/amankumar849/"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full text-neutral-400 light:text-neutral-600 hover:text-white light:hover:text-black hover:bg-white/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>

            {/* Dark/Light mode switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/5 light:bg-black/5 text-neutral-300 light:text-neutral-700 hover:text-white light:hover:text-black hover:bg-white/10 light:hover:bg-black/10 border border-white/10 light:border-black/5 cursor-pointer transition-colors"
              aria-label="Toggle ThemeMode"
              id="theme-toggle-btn"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full bg-white/5 light:bg-black/5 text-neutral-300 light:text-neutral-700 hover:text-white light:hover:text-black hover:bg-white/10 light:hover:bg-black/10 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/10 light:border-black/5 bg-neutral-900 light:bg-neutral-50 px-4 pt-3 pb-6 shadow-xl space-y-2"
            id="nav-mobile-drawer"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-500/10 text-blue-400 border-l-4 border-blue-500 font-semibold'
                    : 'text-neutral-300 light:text-neutral-700 hover:bg-white/5 light:hover:bg-black/5 hover:text-white light:hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex justify-around items-center pt-4 border-t border-white/5 light:border-black/5">
              <a
                href="https://github.com/amankumar849"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-400 light:text-neutral-600 hover:text-white light:hover:text-black"
              >
                <Github className="w-4 h-4" /> Github
              </a>
              <a
                href="https://www.linkedin.com/in/amankumar849/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-400 light:text-neutral-600 hover:text-white light:hover:text-black"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
