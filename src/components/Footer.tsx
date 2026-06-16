import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 border-t border-white-5 dark:bg-neutral-950 bg-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright description */}
          <div className="text-center sm:text-left space-y-1">
            <p className="font-display font-bold text-slate-200 dark:text-slate-100 light:text-slate-900 text-sm">
              Aman Kumar Portfolio
            </p>
            <p className="text-[11px] text-zinc-500 font-mono">
              &copy; {new Date().getFullYear()} Aman Kumar. All rights reserved.
            </p>
          </div>

          {/* Social connection rows */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/amankumar849"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full dark:bg-neutral-900 bg-white border border-white-5 text-slate-400 hover:text-white transition-all hover:-translate-y-0.5"
              title="Github"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/amankumar849/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full dark:bg-neutral-900 bg-white border border-white-5 text-slate-400 hover:text-white transition-all hover:-translate-y-0.5"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:eramanku@gmail.com"
              className="p-2 rounded-full dark:bg-neutral-900 bg-white border border-white-5 text-slate-400 hover:text-white transition-all hover:-translate-y-0.5"
              title="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back up to top anchor */}
          <div>
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl dark:bg-neutral-900 bg-white border border-white-5 text-zinc-400 hover:text-white text-xs font-mono font-medium flex items-center gap-1.5 hover:-translate-y-0.5 hover:border-blue-500/30 transition-all cursor-pointer"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
