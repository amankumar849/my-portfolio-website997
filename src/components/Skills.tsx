import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Server, Database, Library, Hammer, AppWindow } from 'lucide-react';
import { Skill } from '../types';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools'>('All');

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML5', level: 95, category: 'Frontend' },
    { name: 'CSS3', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 88, category: 'Frontend' },
    { name: 'React.js', level: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    // Backend
    { name: 'Node.js', level: 82, category: 'Backend' },
    { name: 'Express.js', level: 84, category: 'Backend' },
    // Database
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'MySQL', level: 75, category: 'Database' },
    // Tools
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'GitHub', level: 88, category: 'Tools' },
    { name: 'VS Code', level: 90, category: 'Tools' },
    { name: 'Vercel', level: 82, category: 'Tools' },
    { name: 'Postman', level: 80, category: 'Tools' },
  ];

  const categories = [
    { name: 'All', icon: <Library className="w-4 h-4" /> },
    { name: 'Frontend', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Backend', icon: <Server className="w-4 h-4" /> },
    { name: 'Database', icon: <Database className="w-4 h-4" /> },
    { name: 'Tools', icon: <Hammer className="w-4 h-4" /> },
  ];

  const filteredSkills = activeTab === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden grid-bg">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-2 font-semibold">Skills & Stack</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Technical Proficiency & Tooling
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="skills-tabs">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(category.name as any)}
              className={`px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                activeTab === category.name
                  ? 'bg-blue-500/15 text-blue-400 border-blue-500/30 font-semibold shadow-md shadow-blue-500/5'
                  : 'text-slate-400 bg-neutral-900/30 border-white/5 hover:bg-neutral-800/40 hover:text-white'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Grid display of filtered progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" id="skills-bars-grid">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-xl border dark:border-white/5 dark:bg-neutral-900/30 bg-white border-neutral-200 hover:border-blue-500/25 transition-colors duration-300 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2.5">
                  <span className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <span className="px-1.5 py-0.5 rounded-md bg-white-5 text-[10px] uppercase font-semibold">
                      {skill.category}
                    </span>
                    <span className="font-bold text-blue-400">{skill.level}%</span>
                  </div>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-2.5 rounded-full bg-neutral-800/80 light:bg-neutral-200 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Visual stack summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12 pt-12 border-t border-white-5" id="skill-categories-summary">
          <div className="text-center p-4">
            <h4 className="font-display font-medium text-slate-300 light:text-slate-700 text-sm uppercase tracking-wider mb-1">Frontend</h4>
            <p className="text-xs text-slate-400">Tailwind & responsive clients</p>
          </div>
          <div className="text-center p-4">
            <h4 className="font-display font-medium text-slate-300 light:text-slate-700 text-sm uppercase tracking-wider mb-1">Backend</h4>
            <p className="text-xs text-slate-400">Express routing & middleware</p>
          </div>
          <div className="text-center p-4">
            <h4 className="font-display font-medium text-slate-300 light:text-slate-700 text-sm uppercase tracking-wider mb-1">Database</h4>
            <p className="text-xs text-slate-400">NoSQL & SQL queries</p>
          </div>
          <div className="text-center p-4">
            <h4 className="font-display font-medium text-slate-300 light:text-slate-700 text-sm uppercase tracking-wider mb-1">Tooling</h4>
            <p className="text-xs text-slate-400">Version control & cloud deployments</p>
          </div>
        </div>

      </div>
    </section>
  );
}
