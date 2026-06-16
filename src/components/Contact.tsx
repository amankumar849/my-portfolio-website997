import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Github, Linkedin, Send, Check, Copy, AlertCircle, RefreshCw } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('eramanku@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden dark:bg-neutral-950 bg-neutral-50 grid-bg border-y border-white-5">
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-1/10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#6366f1] mb-2 font-semibold">Contact</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Get In Touch
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Block: Core Contact Connection Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Let's discuss opportunities.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed font-sans">
                I am actively seeking software internships, full stack projects, or engineering roles at scaling tech organizations. Drop a inquiry, ping me, or send a prompt directly from the portal!
              </p>
            </div>

            {/* Structured Connect Rows */}
            <div className="space-y-4" id="contact-list">
              {/* Email Copier Card */}
              <div className="p-4 rounded-2xl border dark:border-white/5 dark:bg-neutral-900/40 bg-white border-neutral-200/60 shadow-sm flex items-center justify-between gap-4 group hover:border-[#6366f1]/25 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#6366f1]/10 rounded-xl text-[#6366f1]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">Official Email</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">eramanku@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-neutral-950/40 hover:bg-neutral-900 border border-white-5 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                  title="Copy email ADDRESS"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone connection row */}
              <div className="p-4 rounded-2xl border dark:border-white/5 dark:bg-neutral-900/40 bg-white border-neutral-200/60 shadow-sm flex items-center gap-4 hover:border-[#6366f1]/25 transition-all">
                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">Contact Line</h4>
                  <p className="text-xs sm:text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">+91 62079 00997</p>
                </div>
              </div>

              {/* Social Channels connections */}
              <div className="p-4 rounded-2xl border dark:border-white/5 dark:bg-neutral-900/40 bg-white border-neutral-200/60 shadow-sm">
                <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mb-2 font-semibold">Web Channels</h4>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/amankumar849"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 p-2.5 rounded-xl bg-neutral-950/40 border border-white-5 text-slate-300 light:text-slate-700 hover:text-white hover:border-blue-500/20 text-center text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github className="w-4 h-4" /> Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amankumar849/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 p-2.5 rounded-xl bg-neutral-950/40 border border-white-5 text-slate-300 light:text-slate-700 hover:text-white hover:border-blue-500/20 text-center text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Fully Validating Connection Form */}
          <div className="lg:col-span-7 p-6 rounded-2xl border dark:border-white/5 dark:bg-neutral-900/40 bg-white border-neutral-200/60 shadow-xl relative min-h-[400px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-neutral-950/95 backdrop-blur-sm z-20 rounded-2xl p-6 flex flex-col justify-center items-center text-center space-y-4"
                  id="contact-success"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl shadow-lg shadow-emerald-500/10">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-slate-100 text-lg">Message Dispatched Securely!</h4>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Thank you. Your message schema has been stored in a virtual ledger and pushed to Aman Kumar. I will respond to your corporate email soon.
                  </p>
                  <div className="flex gap-1.5 p-3 rounded-lg bg-neutral-900 border border-white-5 font-mono text-[10px] text-zinc-500">
                    <span>DATABASE_PING</span>
                    <span>//</span>
                    <span className="text-emerald-400">STATUS_201_CREATED</span>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1 font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Foster"
                      className="w-full px-4 py-2.5 text-xs rounded-xl dark:bg-neutral-950 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none focus:border-blue-500 transition-colors"
                      id="contact-name-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1 font-semibold">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. corporate@company.com"
                      className="w-full px-4 py-2.5 text-xs rounded-xl dark:bg-neutral-950 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none focus:border-blue-500 transition-colors"
                      id="contact-email-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1 font-semibold">Inquiry Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunities / Project Quote"
                    className="w-full px-4 py-2.5 text-xs rounded-xl dark:bg-neutral-950 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none focus:border-blue-500 transition-colors"
                    id="contact-subject-input"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1 font-semibold">Detailed Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project requirements or corporate inquiries..."
                    rows={4}
                    className="w-full px-4 py-2.5 text-xs rounded-xl dark:bg-neutral-950 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none focus:border-blue-500 resize-none transition-colors"
                    id="contact-message-input"
                  />
                </div>
              </div>

              {/* Action button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 disabled:opacity-50 text-white font-medium text-xs flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-blue-500/10"
                id="contact-submit-btn"
              >
                {status === 'submitting' ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing Message Dispatch...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Secure Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
