import { motion } from 'motion/react';
import { Calendar, Laptop, BookOpen, Brain, Sparkles, Code } from 'lucide-react';
import { ExperienceItem } from '../types';

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      year: '2025 - Present',
      title: 'Full Stack & MERN Developer',
      companyOrContext: 'Independent Software Engineering Work',
      description: 'Built complex cloud-backed database schemas, client routers, and REST API frameworks. Managed robust patient scheduler APIs and software business agency showcases.',
      tags: ['React.js', 'Express', 'MongoDB Node', 'Framer Motion', 'Tailwind CSS']
    },
    {
      year: '2024 - 2025',
      title: 'Practical Project Architectures',
      companyOrContext: 'Academic & Practical Laboratory Labs',
      description: 'Pioneered atomic file structures, modular routing frameworks, and clean state persistent flows. Implemented CRUD layouts connecting Express backend pools securely.',
      tags: ['Node.js API', 'MySQL Database', 'Git Management', 'Postman Testing']
    },
    {
      year: '2023 - 2024',
      title: 'DSA and Problem Solving Study',
      companyOrContext: 'Core Computer Science Foundations',
      description: 'Engaged in solving 500+ algorithmic and procedural data structure tasks. Mastered hash schemas, dynamic list layouts, sorting pipelines, and graph matrices.',
      tags: ['Data Structures', 'C++', 'Algorithmic Optimization', 'Space Complexity']
    },
    {
      year: 'Continuous',
      title: 'Growth & Continuous Learning',
      companyOrContext: 'Autodidact Exploration',
      description: 'Actively tracking modern web standards including server rendering, real-time client socket notifications, and cloud container execution models.',
      tags: ['Cloud Infrastructure', 'Web Socket Sync', 'Next.js Study', 'Clean Architecture']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden dark:bg-neutral-950 bg-neutral-50 grid-bg border-y border-white-5">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-1/10 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-indigo-400 mb-2 font-semibold">Timeline</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Learning Path & Key Milestones
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline Tree Layout */}
        <div className="relative max-w-4xl mx-auto" id="experience-timeline">
          {/* Central Vertical Connector Line (Desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800/80 light:bg-neutral-300 transform -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge center marker */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-9 h-9 rounded-full bg-neutral-950 border-2 border-blue-500 flex items-center justify-center p-1.5 shadow-md shadow-blue-500/10">
                      {idx === 0 && <Laptop className="w-4 h-4 text-blue-400" />}
                      {idx === 1 && <Sparkles className="w-4 h-4 text-amber-400" />}
                      {idx === 2 && <Brain className="w-4 h-4 text-[#6366f1]" />}
                      {idx === 3 && <Code className="w-4 h-4 text-purple-400" />}
                    </div>
                  </div>

                  {/* Left / Right Content spacing block */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5 }}
                      className="p-6 rounded-2xl border dark:border-white/5 dark:bg-neutral-900/40 bg-white border-neutral-200 hover:border-blue-500/20 transition-all duration-300 shadow-md space-y-3"
                    >
                      {/* Year Indicator */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 font-mono text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.year}
                      </span>

                      <div>
                        <h3 className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-base">
                          {exp.title}
                        </h3>
                        <p className="text-xs font-mono text-zinc-500 mt-0.5">
                          {exp.companyOrContext}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed font-sans">
                        {exp.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {exp.tags.map((tg) => (
                          <span
                            key={tg}
                            className="text-[9px] font-mono dark:bg-neutral-950 bg-neutral-100 border border-white-5 px-1.5 py-0.5 text-zinc-400 rounded"
                          >
                            {tg}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer block for standard grid positioning */}
                  <div className="hidden md:block w-[10%] px-4" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
