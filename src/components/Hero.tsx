import { ArrowUpRight, Code2, Download, Eye, FileText, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import Aman from "../assets/images/Aman.jpeg";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadResume = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Create a mock resume file download
      const element = document.createElement("a");
      const file = new Blob([
        `AMAN KUMAR - FULL STACK DEVELOPER PORTFOLIO RESUME\n
Graduate/Student details: B.Tech (Graduating 2027)\n
Email: eramanku@gmail.com | Phone: +91 62079 00997\n
Github: https://github.com/amankumar849 | LinkedIn: https://linkedin.com/in/amankumar849\n\n
SUMMARY:\n
Offline-first responsive web apps with MERN stack.\n\n
SKILLS:\n
* Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS\n
* Backend: Node.js, Express.js\n
* Database: MongoDB, MySQL\n
* Tools: Git, GitHub, VS Code, Vercel, Postman\n\n
PROJECTS:\n
1. Hospital Management System (MERN Stack)\n
2. GFD RoadMap (Modern UI/UX Web Showcase)\n
3. Full Stack Web Application (CRUD Operations & Dashboard)\n`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = "Aman_Kumar_Resume.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden grid-bg"
    >
      {/* Decorative Gradient Background Glows */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono tracking-wider font-semibold mx-auto lg:mx-0"
              id="hero-badge"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AVAILABLE FOR ROLES & INTERNSHIPS
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-display font-bold text-slate-100 light:text-slate-900 tracking-tight leading-tight"
                id="hero-name"
              >
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Aman Kumar</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl font-display font-medium text-blue-400"
                id="hero-title"
              >
                Full Stack Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-slate-400 light:text-slate-600 max-w-xl mx-auto lg:mx-0 font-sans"
                id="hero-subtitle"
              >
                Building modern web applications with the <span className="text-white light:text-black font-semibold">MERN Stack</span>. Specializing in highly performant, fully responsive software with flawless UI design.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              id="hero-ctas"
            >
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transform hover:-translate-y-0.5 active:scale-95 transition-all outline-none flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/20"
                id="hero-view-projects-btn"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowResumeModal(true)}
                className="px-6 py-3 rounded-full bg-white/5 light:bg-black/5 hover:bg-white/10 light:hover:bg-black/10 border border-white/10 light:border-black/10 text-slate-200 light:text-slate-800 font-medium transform hover:-translate-y-0.5 active:scale-95 transition-all outline-none flex items-center justify-center gap-2 cursor-pointer"
                id="hero-resume-btn"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 text-slate-400 hover:text-white font-medium active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                id="hero-contact-btn"
              >
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Micro Dashboard Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden sm:block border border-white-5 p-4 rounded-xl bg-neutral-900/60 light:bg-slate-100/70 backdrop-blur-md max-w-lg mx-auto lg:mx-0 shadow-xl"
              id="hero-tech-banner"
            >
              <div className="flex items-center justify-between border-b border-white-5 pb-2 mb-2 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-blue-400" /> status.sh</span>
                <span>UTC Time</span>
              </div>
              <div className="font-mono text-xs text-left space-y-1">
                <p className="text-slate-400"><span className="text-purple-400">aman$</span> node --version</p>
                <p className="text-emerald-400">v20.11.0 (LTS)</p>
                <p className="text-slate-400"><span className="text-purple-400">aman$</span> cat skills.txt</p>
                <p className="text-blue-400">React, Node, Express, MongoDB, MySQL, Git</p>
              </div>
            </motion.div>
          </div>

          {/* Premium Interactive Visual Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-72 h-72 sm:w-96 sm:h-96"
              id="hero-image-container"
            >
              {/* Spinning background gradients */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-600 rounded-full blur-[20px] opacity-20 animate-pulse duration-[6000ms]" />
              
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-sm opacity-70 animate-pulse" />

              {/* Main Avatar Card Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 dark:bg-neutral-900/40 bg-white/40 backdrop-blur-xl p-3 flex flex-col justify-between shadow-2xl group hover:border-blue-500/40 transition-colors duration-500">
                
                {/* Visual Glass elements */}
                <div className="w-full h-[88%] rounded-xl overflow-hidden relative">
                  <img
                    src={Aman}
                    alt="Aman Kumar Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    id="hero-avatar-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Digital overlay text */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-zinc-300 tracking-wider">PORTRAIT_LOC // IN_REACTIVE</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono px-1 pt-1.5 text-zinc-400 light:text-zinc-600">
                  <span className="flex items-center gap-1"><Code2 className="w-3.5 h-3.5 text-purple-400" /> B.TECH student (Grad. 2027)</span>
                  <span className="text-blue-400">FULL SECURE</span>
                </div>
              </div>

              {/* Floating micro indicators */}
              <div className="absolute -top-4 -right-4 p-2.5 rounded-xl bg-neutral-900/90 light:bg-white border border-white/10 shadow-lg flex items-center gap-2 transform rotate-3">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-xs font-mono font-medium text-slate-200 light:text-slate-800">React Developer</span>
              </div>

              <div className="absolute -bottom-4 -left-4 p-2.5 rounded-xl bg-neutral-900/90 light:bg-white border border-white/10 shadow-lg flex items-center gap-2 transform -rotate-3">
                <span className="text-xs font-mono font-medium text-purple-400">MERN Stack Certified</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive Resume Compiler Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white-5 bg-neutral-950">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                <h3 className="font-display font-bold text-slate-100 text-lg">Aman_Kumar_Resume.pdf</h3>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1 px-2.5 rounded hover:bg-white/10 text-slate-400 hover:text-white text-sm"
              >
                Close
              </button>
            </div>

            {/* Document body preview */}
            <div className="p-6 overflow-y-auto space-y-6 text-left font-mono text-sm bg-neutral-920 text-slate-300">
              <div className="border-b border-dashed border-white/15 pb-4 text-center">
                <h4 className="text-xl font-bold font-display text-slate-100 uppercase tracking-wide">Aman Kumar</h4>
                <p className="text-blue-400 text-xs mt-1">Full Stack Developer | B.Tech Student (2023 - 2027)</p>
                <p className="text-zinc-500 text-xs mt-0.5">eramanku@gmail.com | +91 62079 00997 | Patna, Bihar, India</p>
              </div>

              <div>
                <h5 className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 border-b border-white/5 pb-1">Education</h5>
                <p className="text-slate-200">Bachelor of Technology (B.Tech) - CSE</p>
                <p className="text-xs text-zinc-400">Expected Graduation: May 2027 | Current Semester: 6th</p>
              </div>

              <div>
                <h5 className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 border-b border-white/5 pb-1">Technical Skills</h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <p><strong className="text-zinc-400">Frontend:</strong> React.js, Tailwind CSS, JavaScript, HTML, CSS</p>
                  <p><strong className="text-zinc-400">Backend:</strong> Node.js, Express.js</p>
                  <p><strong className="text-zinc-400">Database:</strong> MongoDB, MySQL</p>
                  <p><strong className="text-zinc-400">Tools:</strong> Git, GitHub, VS Code, Vercel, Postman</p>
                </div>
              </div>

              <div>
                <h5 className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 border-b border-white/5 pb-1">Core Projects</h5>
                <div className="space-y-3">
                  <div>
                    <h6 className="text-[13px] text-purple-400 font-semibold flex items-center justify-between">
                      <span>Hospital Management System (MERN Stack)</span>
                    </h6>
                    <p className="text-xs text-zinc-400">Provides robust appointment booking, secure clinician access control, and live patient dashboard tracking.</p>
                  </div>
                  <div>
                    <h6 className="text-[13px] text-purple-400 font-semibold">GFD RoadMap (Modern UI/UX Web Showcase)</h6>
                    <p className="text-xs text-zinc-400">Modern web-portal displaying clean reactive services pages and robust user messaging form.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 border-t border-white-5 bg-neutral-950 flex justify-end gap-3">
              <button
                onClick={handleDownloadResume}
                disabled={downloading}
                className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-medium text-sm flex items-center gap-2 cursor-pointer"
              >
                {downloading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Compiling...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> Download Resume (Aman_Kumar_Resume.txt)
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
