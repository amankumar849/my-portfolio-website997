import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Globe, Terminal, ArrowRight, UserPlus, Calendar, Plus, Settings, Sparkles, Check, Play, RefreshCw, Layers } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  // States for simulators
  // Hospital simulator
  const [appointments, setAppointments] = useState<{name: string, doc: string, time: string}[]>([
    { name: 'John Doe', doc: 'Dr. Smith (Cardiologist)', time: '10:30 AM' },
    { name: 'Jane Miller', doc: 'Dr. Adams (Neurologist)', time: '02:15 PM' },
  ]);
  const [patientName, setPatientName] = useState('');
  const [doctorSelect, setDoctorSelect] = useState('Dr. Smith (Cardiologist)');
  const [appointmentTime, setAppointmentTime] = useState('09:00 AM');

  // Feature Bright Simulator
  const [selectedService, setSelectedService] = useState('Frontend Core (HTML/CSS/JS)');
  const [quoteInquiry, setQuoteInquiry] = useState({ name: '', email: '', desc: '' });
  const [quoteSent, setQuoteSent] = useState(false);

  // Full Stack CRUD Simulator
  const [apiUsers, setApiUsers] = useState<{id: number, name: string, role: string, score: number}[]>([
    { id: 1, name: 'Alice Jhonson', role: 'DevOps Lead', score: 98 },
    { id: 2, name: 'Bob Sterling', role: 'SecOps Analyst', score: 85 },
    { id: 3, name: 'Carol Danvers', role: 'UX Specialist', score: 92 },
  ]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserRole, setNewUserRole] = useState('Frontend Eng');
  const [isApiLoading, setIsApiLoading] = useState(false);

  const projects: Project[] = [
    {
      id: "hospital-system",
      title: "Hospital Management System",
      subtitle: "Full Stack MERN Application",
      description: "A comprehensive health monitoring system equipped with a patient appointment scheduler, clinician schedules, and interactive clinical summary widgets.",
      category: "Full Stack",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      liveUrl: "https://my-hospital-project.vercel.app",
      githubUrl: "https://github.com/amankumar849/My-Hospital-Project",
      image: "hospital"
    },
    {
      id: "gfd-roadmap",
      title: "GFD RoadMap",
      subtitle: "Interactive Programmer Curriculum Gateway",
      description: "A visually gorgeous roadmap generator and visualizer designed to streamline curriculum structures from frontend basics to full stack systems design.",
      category: "Frontend",
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      liveUrl: "https://gfdroadmap.vercel.app",
      githubUrl: "https://github.com/amankumar849/gfd_roadmap",
      image: "bright"
    },
    {
      id: "crud-dashboard",
      title: "Full Stack Web Application",
      subtitle: "CRUD Operations & API Dashboard",
      description: "A professional RESTful testing playground that communicates securely to create, read, update, and manage cloud user schemas.",
      category: "Full Stack",
      tags: ["React.js", "Node.js", "Express.js", "MySQL", "REST API"],
      githubUrl: "https://github.com/amankumar849/rest-crud",
      image: "crud"
    }
  ];

  // Simulator interactions
  const handleAddAppointment = (e: FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) return;
    setAppointments([...appointments, { name: patientName, doc: doctorSelect, time: appointmentTime }]);
    setPatientName('');
  };

  const handleSendQuote = (e: FormEvent) => {
    e.preventDefault();
    if (!quoteInquiry.name || !quoteInquiry.email) return;
    setQuoteSent(true);
    setTimeout(() => {
      setQuoteSent(false);
      setQuoteInquiry({ name: '', email: '', desc: '' });
    }, 3000);
  };

  const handleAddApiUser = (e: FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim()) return;
    setIsApiLoading(true);
    setTimeout(() => {
      setApiUsers([...apiUsers, { id: Date.now(), name: newUserName, role: newUserRole, score: Math.floor(Math.random() * 30) + 70 }]);
      setNewUserName('');
      setIsApiLoading(false);
    }, 800);
  };

  const handleDeleteApiUser = (id: number) => {
    setApiUsers(apiUsers.filter(u => u.id !== id));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden dark:bg-neutral-950 bg-neutral-50 border-t border-white-5">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#6366f1] mb-2 font-semibold">My Projects</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Featured Full Stack Works
          </p>
          <p className="text-xs text-slate-400 mt-2 max-w-lg mx-auto">
            Click on "Live Demo" to launch the simulation playground built in-browser for complete verification.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" id="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl overflow-hidden border dark:border-white/5 dark:bg-neutral-900/40 bg-white border-neutral-200/60 shadow-lg group hover:border-blue-500/35 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Mini Static Preview Thumbnail representation */}
              <div className="h-48 dark:bg-neutral-950 bg-neutral-100 flex items-center justify-center p-4 border-b border-white-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 opacity-50" />
                
                {/* Custom code-aligned graphic fallback */}
                {project.image === 'hospital' && (
                  <div className="w-full h-full flex flex-col justify-between border border-dashed border-white/10 rounded-lg p-3 bg-neutral-900/30">
                    <div className="flex justify-between items-center text-zinc-500 text-[10px] font-mono">
                      <span>MERN_HOSPITAL_SYS</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="space-y-1.5 py-4 text-center">
                      <p className="text-[#6366f1] text-[13px] font-mono font-bold tracking-tight">PATIENT DISPATCH</p>
                      <p className="text-[11px] text-zinc-400">Appointments Booking Active</p>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-full h-1 bg-blue-500/30 rounded" />
                      <span className="w-full h-1 bg-purple-500/30 rounded" />
                      <span className="w-full h-1 bg-zinc-700 rounded" />
                    </div>
                  </div>
                )}

                {project.image === 'bright' && (
                  <div className="w-full h-full flex flex-col justify-between border border-dashed border-white/10 rounded-lg p-3 bg-neutral-900/30">
                    <div className="flex justify-between items-center text-zinc-500 text-[10px] font-mono">
                      <span>GFD_ROADMAP_UI</span>
                      <span className="text-indigo-400">100% Perf</span>
                    </div>
                    <div className="space-y-1.5 py-4 text-center">
                      <p className="text-blue-400 text-[13px] font-mono font-bold tracking-tight">DEVELOPER ROADMAPS</p>
                      <p className="text-[11px] text-zinc-400">Interactive Curriculum Guides</p>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-zinc-500">
                      <span>STAGES // TRACKS</span>
                      <span>COMPLETED</span>
                    </div>
                  </div>
                )}

                {project.image === 'crud' && (
                  <div className="w-full h-full flex flex-col justify-between border border-dashed border-white/10 rounded-lg p-3 bg-neutral-900/30">
                    <div className="flex justify-between items-center text-zinc-500 text-[10px] font-mono">
                      <span>REST_CRUD_CONTROLLER</span>
                      <span className="text-amber-500">HTTP REST</span>
                    </div>
                    <div className="space-y-1.5 py-4 text-center">
                      <p className="text-purple-400 text-[13px] font-mono font-bold tracking-tight">API DATABASE WIDGET</p>
                      <p className="text-[11px] text-zinc-400">MySQL / Express API Gateway</p>
                    </div>
                    <div className="flex gap-1 justify-center">
                      <span className="px-1.5 py-0.5 rounded bg-[#6366f1]/20 text-[8px] text-[#6366f1] font-mono">GET</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-[8px] text-emerald-400 font-mono">POST</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-[8px] text-rose-400 font-mono">DELETE</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content metadata */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6366f1] px-2 py-0.5 rounded-full dark:bg-neutral-800 bg-neutral-100 border border-white-5 w-max block">
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-lg group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 light:text-slate-600 font-mono">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 py-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono dark:bg-neutral-800/80 bg-neutral-100 text-slate-400 light:text-slate-700 border border-white-5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3 pt-3 border-t border-white-5">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="flex-1 px-4 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500 hover:text-white dark:border-white/5 border-neutral-200 border text-blue-400 font-medium text-xs text-center flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Simulator</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl hover:bg-white/10 dark:text-slate-400 dark:hover:text-white text-slate-600 hover:text-zinc-900 border border-white-5 transition-colors"
                      title="Live deployment URL"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl hover:bg-white/10 dark:text-slate-400 dark:hover:text-white text-slate-600 hover:text-zinc-900 border border-white-5 transition-colors"
                    title="Code repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Simulator Overlay Panel */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
              id="projects-simulator-modal"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="w-full max-w-3xl dark:bg-neutral-900 bg-white border border-white/10 dark:border-white/10 border-neutral-200 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
              >
                {/* Simulator header */}
                <div className="flex items-center justify-between px-5 py-4 dark:bg-neutral-950 bg-neutral-100 border-b dark:border-white/5 border-neutral-200">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm">
                        Simulated Environment: {projects.find(p => p.id === selectedProject)?.title}
                      </h3>
                      <p className="text-[10px] font-mono text-zinc-500">CLIENT_SIMULATOR_SANDBOX // STATUS: ACTIVE</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-3 py-1.5 rounded-lg bg-white/5 dark:bg-white/5 hover:bg-white/10 text-xs text-slate-400 hover:text-white border dark:border-white/10 border-neutral-200 cursor-pointer"
                  >
                    Close Simulator
                  </button>
                </div>

                {/* Simulator Display Body */}
                <div className="p-6 overflow-y-auto flex-1 dark:bg-neutral-920 bg-neutral-50 text-slate-300 dark:text-slate-300 light:text-slate-800">
                  
                  {/* PROJECT 1: HOSPITAL SYSTEM SIMULATOR */}
                  {selectedProject === 'hospital-system' && (
                    <div className="space-y-6">
                      <div className="p-4 rounded-xl dark:bg-neutral-900/80 bg-white border dark:border-white/5 border-neutral-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">MERN Backend Status</span>
                          <h4 className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-930 text-lg">Hospital Clinician Hub</h4>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" /> Connection Stable
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Appointment Creator Form */}
                        <div className="p-5 rounded-xl border dark:border-white/5 border-neutral-200 bg-white dark:bg-neutral-950/40 space-y-4">
                          <h5 className="font-display font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 text-xs uppercase tracking-widest flex items-center gap-2">
                            <Plus className="w-4 h-4 text-purple-400" /> Book Patient Visit
                          </h5>
                          
                          <form onSubmit={handleAddAppointment} className="space-y-3">
                            <div>
                              <label className="block text-[10px] font-mono text-slate-400 mb-1">PATIENT NAME</label>
                              <input
                                type="text"
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                                placeholder="e.g. John Doe"
                                className="w-full px-3 py-2 text-xs rounded-lg dark:bg-neutral-900 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none focus:border-blue-500"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block text-[10px] font-mono text-slate-400 mb-1">CLINICIAN</label>
                                <select
                                  value={doctorSelect}
                                  onChange={(e) => setDoctorSelect(e.target.value)}
                                  className="w-full px-2.5 py-2 text-xs rounded-lg dark:bg-neutral-900 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none focus:border-blue-500"
                                >
                                  <option>Dr. Smith (Cardiologist)</option>
                                  <option>Dr. Adams (Neurologist)</option>
                                  <option>Dr. Patel (Pediatrician)</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-[10px] font-mono text-slate-400 mb-1">SESSION TIME</label>
                                <select
                                  value={appointmentTime}
                                  onChange={(e) => setAppointmentTime(e.target.value)}
                                  className="w-full px-2.5 py-2 text-xs rounded-lg dark:bg-neutral-900 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none focus:border-blue-500"
                                >
                                  <option>09:00 AM</option>
                                  <option>10:30 AM</option>
                                  <option>02:15 PM</option>
                                  <option>04:00 PM</option>
                                </select>
                              </div>
                            </div>

                            <button
                              type="submit"
                              className="w-full py-2 rounded-lg bg-[#6366f1] text-[11px] font-bold text-white hover:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" /> Book Appointment
                            </button>
                          </form>
                        </div>

                        {/* Current Queue Dashboard */}
                        <div className="p-5 rounded-xl border dark:border-white/5 border-neutral-200 bg-white dark:bg-neutral-950/40 flex flex-col justify-between">
                          <div>
                            <h5 className="font-display font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 text-xs uppercase tracking-widest flex items-center justify-between mb-4">
                              <span>Active Booking Stream</span>
                              <span className="px-2 py-0.5 rounded bg-zinc-800 dark:bg-zinc-800 light:bg-slate-200 text-[10px] text-zinc-400">
                                {appointments.length} Visits
                              </span>
                            </h5>

                            <div className="space-y-2.5 max-h-[160px] overflow-y-auto">
                              {appointments.map((appoint, index) => (
                                <div
                                  key={index}
                                  className="p-3 rounded-lg bg-neutral-900/50 light:bg-neutral-100 border border-white-5 flex items-center justify-between"
                                >
                                  <div>
                                    <p className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">{appoint.name}</p>
                                    <p className="text-[10px] text-zinc-400 font-mono">{appoint.doc}</p>
                                  </div>
                                  <span className="px-2 py-0.5 rounded bg-[#6366f1]/20 text-[#6366f1] font-mono text-[9px]">
                                    {appoint.time}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <p className="text-[10px] text-zinc-500 mt-4 leading-relaxed font-sans">
                            *This client simulator mimics active Express API endpoint routers (`POST /api/appointments`) securely saved into a simulated memory schema.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 2: GFD ROADMAP SIMULATOR */}
                  {selectedProject === 'gfd-roadmap' && (
                    <div className="space-y-6">
                      <div className="p-4 rounded-xl dark:bg-indigo-950/20 bg-indigo-50 border border-indigo-500/20 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-mono text-[#6366f1] font-bold">GFD ROADMAP ACCELERATOR</span>
                          <h4 className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-base">Curriculum Topic Explorer</h4>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#6366f1]/15 text-[#6366f1] text-[10px] font-semibold">
                          Roadmapping Sandbox Active
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Selector items */}
                        <div className="md:col-span-5 space-y-3">
                          <span className="text-[10px] font-mono text-zinc-500 block">SELECT ROADMAP STAGE</span>
                          <div className="grid gap-2">
                            {['Frontend Core (HTML/CSS/JS)', 'React Fundamentals & Tailwind', 'Backend API Architecture', 'Database Scale & SQL/NoSQL'].map((serv) => (
                              <button
                                key={serv}
                                onClick={() => setSelectedService(serv)}
                                className={`p-3 rounded-xl border text-left text-xs font-medium cursor-pointer transition-colors ${
                                  selectedService === serv
                                    ? 'bg-blue-500/10 border-blue-500/40 text-blue-400'
                                    : 'bg-neutral-900/30 border-white-5 text-slate-400 hover:text-white hover:bg-neutral-800/40'
                                }`}
                              >
                                {serv}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Estimate detail form */}
                        <div className="md:col-span-7 p-5 rounded-xl border dark:border-white/5 border-neutral-200 bg-white dark:bg-neutral-950/40 space-y-4">
                          <h5 className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-800 text-xs uppercase tracking-widest">
                            Inquire for custom path on: <span className="text-[#6366f1]">{selectedService}</span>
                          </h5>

                          {quoteSent ? (
                            <div className="p-6 text-center space-y-2 dark:bg-neutral-900 bg-slate-50 border border-white-5 rounded-xl">
                              <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto text-lg">
                                <Check className="w-5 h-5" />
                              </div>
                              <p className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-zinc-700">Proposal sent successfully!</p>
                              <p className="text-[10px] text-zinc-500">Aman will review your request and suggest timeline additions.</p>
                            </div>
                          ) : (
                            <form onSubmit={handleSendQuote} className="space-y-3">
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <label className="block text-[9px] font-mono text-slate-400 mb-1">NAME</label>
                                  <input
                                    type="text"
                                    required
                                    value={quoteInquiry.name}
                                    onChange={(e) => setQuoteInquiry({...quoteInquiry, name: e.target.value})}
                                    placeholder="Enter your name"
                                    className="w-full px-3 py-2 text-xs rounded-lg dark:bg-neutral-900 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none focus:border-blue-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[9px] font-mono text-slate-400 mb-1">EMAIL</label>
                                  <input
                                    type="email"
                                    required
                                    value={quoteInquiry.email}
                                    onChange={(e) => setQuoteInquiry({...quoteInquiry, email: e.target.value})}
                                    placeholder="Enter email"
                                    className="w-full px-3 py-2 text-xs rounded-lg dark:bg-neutral-900 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none focus:border-blue-500"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block text-[9px] font-mono text-slate-400 mb-1">LEARNING GOAL BRIEF</label>
                                <textarea
                                  required
                                  value={quoteInquiry.desc}
                                  onChange={(e) => setQuoteInquiry({...quoteInquiry, desc: e.target.value})}
                                  placeholder="Describe what specific skills or sub-topics you want added to this timeline."
                                  rows={2}
                                  className="w-full px-3 py-2 text-xs rounded-lg dark:bg-neutral-900 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none focus:border-blue-500 resize-none"
                                />
                              </div>

                              <button
                                type="submit"
                                className="w-full py-2 rounded-lg bg-blue-500 text-[11px] font-bold text-white hover:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                Send Roadmap Request
                              </button>
                            </form>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 3: CRUD API DATABASE SIMULATOR */}
                  {selectedProject === 'crud-dashboard' && (
                    <div className="space-y-6">
                      <div className="p-4 rounded-xl dark:bg-purple-950/20 bg-purple-50 border border-purple-500/20 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-purple-400 font-bold">REST API INTERFACE</span>
                          <h4 className="font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm">JSON Users Schema Controller</h4>
                        </div>
                        <div className="px-2.5 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-purple-400">
                          database://mysql_pool5
                        </div>
                      </div>

                      {/* DB testing container */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Control Creator */}
                        <form onSubmit={handleAddApiUser} className="md:col-span-4 p-4 rounded-xl border dark:border-white/5 border-neutral-200 bg-white dark:bg-neutral-950/40 space-y-4">
                          <span className="text-[10px] font-mono text-zinc-400 block uppercase">Create Resource</span>
                          
                          <div className="space-y-3">
                            <div>
                              <label className="block text-[9px] font-mono text-slate-400 mb-1">USER NAME</label>
                              <input
                                type="text"
                                required
                                value={newUserName}
                                onChange={(e) => setNewUserName(e.target.value)}
                                placeholder="Alice Green"
                                className="w-full px-3 py-2 text-xs rounded-lg dark:bg-neutral-900 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-mono text-slate-400 mb-1">ROLE</label>
                              <select
                                value={newUserRole}
                                onChange={(e) => setNewUserRole(e.target.value)}
                                className="w-full px-2.5 py-2 text-xs rounded-lg dark:bg-neutral-900 bg-slate-100 border border-white-5 dark:text-white text-zinc-900 focus:outline-none"
                              >
                                <option>Frontend Eng</option>
                                <option>Backend Architect</option>
                                <option>Database Admin</option>
                                <option>Project Manager</option>
                              </select>
                            </div>

                            <button
                              type="submit"
                              disabled={isApiLoading}
                              className="w-full py-2 bg-purple-500 hover:bg-purple-600 disabled:opacity-50 hover:opacity-90 rounded-lg text-[11px] font-bold text-white flex items-center justify-center gap-1 text-center cursor-pointer"
                            >
                              {isApiLoading ? (
                                <>
                                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Inserting...
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5" /> POST Resource
                                </>
                              )}
                            </button>
                          </div>
                        </form>

                        {/* List output */}
                        <div className="md:col-span-8 p-4 rounded-xl border dark:border-white/5 border-neutral-200 bg-white dark:bg-neutral-950/40 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-zinc-400 block mb-3 uppercase">JSON DB Payload</span>
                            
                            <div className="space-y-2 max-h-[160px] overflow-y-auto">
                              {apiUsers.map((user) => (
                                <div
                                  key={user.id}
                                  className="p-3 rounded-lg dark:bg-neutral-900/60 bg-neutral-100 border border-white-5 flex items-center justify-between text-xs"
                                >
                                  <div>
                                    <p className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">{user.name}</p>
                                    <p className="text-[10px] text-zinc-500 font-mono">Role: {user.role}</p>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <span className="font-mono text-[10px] text-purple-400">Rating: {user.score}%</span>
                                    <button
                                      onClick={() => handleDeleteApiUser(user.id)}
                                      className="p-1 px-2 rounded hover:bg-red-500/10 text-red-400 transition-colors cursor-pointer"
                                    >
                                      DELETE
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="text-[10px] text-zinc-500 font-sans mt-4 leading-relaxed border-t border-white-5 pt-3">
                            Simulated endpoint routers: `GET /api/users`, `POST /api/users/[id]`, and `DELETE /api/users/[id]`.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
