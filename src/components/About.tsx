import { BookOpen, GraduationCap, Laptop, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const coreInterests = [
    {
      icon: <Laptop className="w-6 h-6 text-blue-400" />,
      title: 'Web Development',
      description: 'Building full stack responsive clients and robust APIs using the modern MERN ecosystem.',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-indigo-400" />,
      title: 'Software Engineering',
      description: 'Applying classic modular code paradigms, clean design systems, and responsive layouts.',
    },
    {
      icon: <Trophy className="w-6 h-6 text-purple-400" />,
      title: 'Problem Solving & DSA',
      description: 'Formulating algorithm structures to organize complex data systems with high execution efficiency.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden dark:bg-neutral-950 bg-neutral-50 border-y border-white-5">
      {/* Visual Background Accent */}
      <div className="absolute top-1/2 right-1/10 w-64 h-64 bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#6366f1] mb-2 font-semibold">About Me</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Academic Foundation & Passion for Building
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Narrative Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-display font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Passionate engineer striving to build the web of tomorrow.
            </h3>
            
            <p className="text-slate-400 light:text-slate-600 leading-relaxed font-sans">
              I am a dedicated **B.Tech Computer Science student** (graduating in **2027**) with an unquenchable curiosity for web systems architectures. By self-guided exploration and intensive coursework, I have mastered the MERN schema and relational database engines.
            </p>

            <p className="text-slate-400 light:text-slate-600 leading-relaxed">
              My philosophy turns complex structures into simple, performant user interfaces. I love building tools that automate manual procedures, streamline clinical management, or provide secure SaaS experiences for scaling agencies.
            </p>

            {/* Quick Graduation Stats Badge */}
            <div className="p-4 rounded-xl dark:bg-neutral-900/60 bg-neutral-150 border border-white-5 backdrop-blur-sm flex items-center gap-4">
              <div className="p-3 bg-indigo-500/15 rounded-lg text-[#6366f1]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-100 light:text-slate-900 text-sm">Undergraduate Degree</h4>
                <p className="text-xs text-slate-400 light:text-slate-500">Bachelor of Technology — Expected graduation May 2027</p>
              </div>
            </div>
          </div>

          {/* Right Block: Core Interests Bento-Inspired Grid */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 light:text-slate-500 mb-2 block font-semibold">
              CORE AREAS OF FOCUS
            </h4>
            
            <div className="grid gap-4" id="about-interests-grid">
              {coreInterests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border dark:border-white/5 dark:bg-neutral-900/40 bg-white border-neutral-200/60 hover:border-blue-500/30 transition-all duration-300 shadow-sm flex flex-col sm:flex-row gap-4 items-start"
                >
                  <div className="p-3 bg-neutral-800/50 rounded-xl">
                    {interest.icon}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-slate-100 light:text-slate-900 text-base mb-1">
                      {interest.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-400 light:text-slate-500 leading-normal">
                      {interest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro-Learning Quote */}
            <div className="p-4 text-center rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/10 text-xs italic text-slate-400 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              "The capacity to learn is a gift; the ability to learn is a skill."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
