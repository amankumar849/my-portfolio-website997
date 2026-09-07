import { motion } from 'motion/react';
import { Github, Code2 } from 'lucide-react';

export default function CodingStats() {
  return (
    <section id="coding-stats" className="py-24 relative overflow-hidden grid-bg">
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-2 font-semibold">
            Coding Activity
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            GitHub & LeetCode Stats
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          
          {/* GitHub Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl border dark:border-white/5 dark:bg-neutral-900/30 bg-white border-neutral-200 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <Github className="w-5 h-5 text-blue-400" />
              <h3 className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                GitHub Contributions
              </h3>
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://ghchart.rshah.org/2563EB/amankumar849"
                alt="GitHub contribution graph"
                className="w-full min-w-[600px] rounded-lg"
              />
            </div>
          </motion.div>

          {/* LeetCode Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-6 rounded-xl border dark:border-white/5 dark:bg-neutral-900/30 bg-white border-neutral-200 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-purple-400" />
              <h3 className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                LeetCode Stats
              </h3>
            </div>
            <div className="flex justify-center overflow-x-auto">
              <img
                src="https://leetcard.jacoblin.cool/amankr0905?theme=dark&font=baloo2&ext=heatmap"
                alt="LeetCode stats"
                className="rounded-lg max-w-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}