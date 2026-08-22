import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowDown, Brain, Database, Cpu, Eye } from 'lucide-react'
import HeroNeuralNetwork from './3d/HeroNeuralNetwork'

export default function Hero() {
  const headlineWords = ['AI/ML', 'Engineer']

  const highlights = [
    { num: '#01', title: 'Machine Learning', icon: Brain },
    { num: '#02', title: 'Generative AI & LLMs', icon: Cpu },
    { num: '#03', title: 'Data Engineering', icon: Database },
    { num: '#04', title: 'Explainable AI', icon: Eye },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  }

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-12 flex flex-col justify-between overflow-hidden cinematic-bg">
      {/* Ambient Deep Violet/Magenta Spotlights behind Hero */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9333EA]/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#D946EF]/18 rounded-full blur-[170px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Eyebrow */}
          <motion.div
            className="lg:col-span-6 z-20 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow Label */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A855F7]/12 border border-[#A855F7]/35 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#C084FC] animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#C084FC] uppercase">
                Hey, I'm a
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight leading-none text-white">
              {headlineWords.map((word, i) => (
                <span key={i} className="inline-block mr-4">
                  {i === 0 ? (
                    <span className="text-gradient-purple">{word}</span>
                  ) : (
                    <span className="text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">{word}</span>
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Tagline & Description */}
            <motion.div variants={itemVariants} className="space-y-3 pt-2">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-100 tracking-tight">
                Great models should <span className="text-[#C084FC] underline decoration-2 underline-offset-4 decoration-[#A855F7]/50">feel invisible.</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal">
                From data pipelines to deployed intelligence, I build AI systems that solve real problems.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#9333EA] to-[#A855F7] hover:from-[#A855F7] hover:to-[#C084FC] text-white font-display font-bold text-sm tracking-wide shadow-xl shadow-[#9333EA]/40 hover:shadow-[#A855F7]/60 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                data-cursor-text="Explore"
              >
                <span>View My Projects</span>
              </a>
              <a
                href="/Sakib_Sayyed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full glass-card hover:bg-white/10 text-gray-200 hover:text-white font-display font-semibold text-sm tracking-wide border border-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
                data-cursor-text="PDF"
              >
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Integrated Portrait + 3D Neural Network Overlay */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] md:min-h-[550px]">
            
            {/* 3D Neural Network Graphic floating in background/side */}
            <div className="absolute inset-0 z-0 opacity-80 lg:opacity-100">
              <HeroNeuralNetwork />
            </div>

            {/* Sakib's Portrait Photo with Dramatic Rim Lighting Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative z-10 w-64 sm:w-80 lg:w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group border border-white/10"
              data-cursor-text="Sakib"
            >
              {/* Rim light glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9333EA]/35 via-transparent to-[#D946EF]/35 z-10 pointer-events-none group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.85)] z-10 pointer-events-none" />
              
              <img
                src="/images/sakib-headshot.png"
                alt="Sakib Sayyed - AI/ML Engineer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Status pill on photo */}
              <div className="absolute bottom-4 left-4 right-4 z-20 glass-pill px-4 py-2.5 rounded-2xl flex items-center justify-between border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
                  <span className="text-xs font-mono text-gray-200">Open for AI/ML Roles</span>
                </div>
                <span className="text-[10px] font-mono text-[#C084FC] uppercase font-bold tracking-wider">Pune, IN</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Highlights Strip: 4 Numbered Pillars */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full mt-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-white/10"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="glass-card px-4 py-3.5 rounded-2xl flex items-center gap-3 border border-white/5 hover:border-[#A855F7]/40 transition-all duration-300 group"
              >
                <div className="text-xs font-mono font-bold text-[#C084FC] bg-[#A855F7]/15 px-2 py-1 rounded-md group-hover:bg-[#9333EA] group-hover:text-white transition-colors">
                  {item.num}
                </div>
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#C084FC] transition-colors" />
                  <span className="text-xs font-display font-semibold text-gray-200 group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Smooth Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 text-gray-500 hover:text-[#C084FC] transition-colors"
        aria-label="Scroll down to About section"
      >
        <ArrowDown className="w-4 h-4 animate-bounce text-[#C084FC]" />
      </a>
    </section>
  )
}
