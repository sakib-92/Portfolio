import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Brain, Database, Cpu, Eye, PlayCircle, FileText } from 'lucide-react'

export default function Hero() {
  const highlights = [
    { num: '#01', title: 'Machine Learning', desc: 'Predictive modeling & classification', icon: Brain },
    { num: '#02', title: 'Generative AI & LLMs', desc: 'Graph RAG & prompt engineering', icon: Cpu },
    { num: '#03', title: 'Data Engineering', desc: 'Scalable ETL & JSON pipelines', icon: Database },
    { num: '#04', title: 'Explainable AI', desc: 'SHAP & LIME interpretability', icon: Eye },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  }

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-14 flex flex-col justify-between overflow-hidden light-modern-bg">
      {/* Soft Ambient Light Backdrop Shading */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-slate-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Eyebrow */}
          <motion.div
            className="lg:col-span-7 z-20 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow Label */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider text-slate-700 uppercase">
                AI / ML Engineer &amp; Researcher
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.08] text-slate-900">
              Sakib <br />
              <span className="text-gradient-slate">Sayyed</span>
            </motion.h1>

            {/* Simple & Professional Tagline & Description */}
            <motion.div variants={itemVariants} className="space-y-3 pt-1">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-800 tracking-tight">
                Building intelligent systems with <span className="text-blue-600">Machine Learning &amp; AI.</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-sans">
                Passionate about developing scalable ML pipelines, predictive analytics, and end-to-end AI solutions that solve real-world problems.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
                data-cursor-text="Projects"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Explore Projects &amp; Live Demos</span>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Sakib_Sayyed_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-display font-semibold text-sm tracking-wide border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
                data-cursor-text="Resume"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Restored Original Portrait with Rich Shaded Backdrop */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Radial Studio Shade Backdrop */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-slate-300/60 via-slate-200/50 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-slate-400/25 blur-2xl pointer-events-none -bottom-6" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 w-64 sm:w-76 lg:w-[330px] flex flex-col items-center"
              data-cursor-text="Sakib"
            >
              {/* Portrait Container with Elegant Studio Shading */}
              <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-slate-500/25 border border-slate-200/80 ring-4 ring-slate-100/80 group">
                <img
                  src={`${import.meta.env.BASE_URL}images/sakib-headshot.png`}
                  alt="Sakib Sayyed - AI/ML Engineer"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.fallback) {
                      e.currentTarget.dataset.fallback = 'true';
                      e.currentTarget.src = './images/sakib-headshot.png';
                    }
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Subtle Cinematic Studio Shade Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-slate-900/10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
                
                {/* Inner Glow Rim */}
                <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/20 pointer-events-none" />
              </div>

              {/* Status Pill Merged at Bottom with Drop Shadow */}
              <div className="mt-3.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2.5 border border-slate-200 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-medium text-slate-800">Open for AI/ML Roles</span>
                <span className="text-[10px] font-mono text-slate-400 font-bold">• Pune, IN</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Highlights Strip: 4 Numbered Pillars */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full mt-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 pt-6 border-t border-slate-200"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    {item.num}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="text-sm font-display font-bold text-slate-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] font-sans text-slate-500 mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Smooth Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 text-slate-400 hover:text-slate-800 transition-colors"
        aria-label="Scroll down to About section"
      >
        <ArrowDown className="w-4 h-4 animate-bounce text-slate-600" />
      </a>
    </section>
  )
}
