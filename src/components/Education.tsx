import { GraduationCap, Landmark, Award, BookOpen, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function Education() {
  const semesters = [
    { sem: 'Sem 1-2', gpa: '6.6 / 10', title: 'Foundational Sciences', desc: 'Introductions to discrete equations, engineering physics, procedural algorithms, C++ modeling, logic design.' },
    { sem: 'Sem 3-4', gpa: '7.2 / 10', title: 'Systems & Data Structures', desc: 'Detailed mastery of data schema complexities, algorithm runtime boundaries, OOP paradigms, and standard networking protocols.' },
    { sem: 'Sem 5-6', gpa: 'Upcoming', title: 'Advanced Full Stack Web', desc: 'Interactive client routing, NoSQL databases, RESTful JSON integrations, MERN middleware frameworks (Express).' },
    { sem: 'Sem 7-8', gpa: 'Upcoming', title: 'Graduation Capstones & Thesis', desc: 'Industrial projects, microservices clustering, and structural software engineering practices.' },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden dark:bg-neutral-950 bg-neutral-50 grid-bg border-b border-white-5">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/3 left-1/10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#6366f1] mb-2 font-semibold">Education</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Academic Track & Progress
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Main University Showcase Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border dark:border-white/5 dark:bg-neutral-900/40 bg-white border-neutral-200/60 shadow-xl space-y-5">
              <div className="flex items-center gap-4 border-b border-white-5 pb-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-400">Degree Program</span>
                  <h3 className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-lg leading-tight">
                    Bachelor of Technology
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">Computer Science & Engineering</p>
                </div>
              </div>

              {/* Institution details */}
              <div className="space-y-4 text-xs font-sans text-slate-400">
                <div className="flex items-start gap-2.5">
                  <Landmark className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-200 dark:text-slate-100 light:text-slate-800">Apex Technical University</h4>
                    <p>Patna Campus, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-200 dark:text-slate-100 light:text-slate-800">Expected Graduation</h4>
                    <p className="font-mono">May 2027 (Currently 6th Semester)</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <BookOpen className="w-4 h-4 text-[#6366f1] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-200 dark:text-slate-100 light:text-slate-800">Specialized Domain</h4>
                    <p>MERN Stack Engineering, Algorithm Formulations, Databases</p>
                  </div>
                </div>
              </div>

              {/* Visual CGPA status */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center font-mono">
                <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest block mb-0.5">Cumulative Grade Point AVG</span>
                <span className="text-3xl font-display font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  6.90 / 10
                </span>
                <p className="text-[10px] text-zinc-500 mt-1">Steady Scholastic Progression // Computer Science Track</p>
              </div>
            </div>
          </div>

          {/* Academic Semester Breakdown Timeline */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 light:text-slate-500 block mb-2 font-semibold">
              SEMESTER COURSEWORK PROGRESSION
            </h4>

            <div className="space-y-4" id="education-semesters">
              {semesters.map((sem, index) => (
                <div
                  key={sem.sem}
                  className="p-4 rounded-xl border dark:border-white/5 dark:bg-neutral-900/30 bg-white border-neutral-200 flex flex-col sm:flex-row justify-between gap-4 shadow-sm hover:border-[#6366f1]/25 transition-all duration-300"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 font-mono text-[9px] text-blue-400 font-bold uppercase">
                        {sem.sem}
                      </span>
                      <h4 className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm">
                        {sem.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 light:text-slate-600 leading-normal font-sans">
                      {sem.desc}
                    </p>
                  </div>

                  {/* GPA badge */}
                  <div className="sm:self-center">
                    <span className="inline-block px-3 py-1 rounded-full dark:bg-neutral-800 bg-neutral-100 font-mono text-[11px] text-[#6366f1] font-bold border border-white-5 shadow-sm text-center min-w-[76px]">
                      {sem.gpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
