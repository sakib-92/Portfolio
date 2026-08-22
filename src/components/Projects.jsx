import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Sparkles, Layers, Cpu, Activity, X, ArrowRight, ShieldCheck } from 'lucide-react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 'bi-dashboard',
      title: 'Enterprise AI-Powered Business Intelligence Dashboard',
      category: 'Full-Stack ML & ETL',
      tech: ['Python', 'Scikit-learn', 'SQL', 'Pandas', 'MongoDB', 'NLP', 'ETL'],
      metrics: '50% Manual Effort Reduction • 10K+ Records Handled',
      shortDesc: 'Full-stack dashboard integrating 5+ business modules — sales forecasting, attrition prediction, customer segmentation — with real-time automated alerts via scalable ETL pipelines.',
      fullDesc: 'Developed a full-stack automated dashboard integrating 5+ predictive business modules including sales forecasting, attrition prediction, and customer segmentation. Designed real-time automated alert systems driven by scalable ETL pipelines, processing 10K+ customer & financial records with sub-second inference latency. Reduced manual analysis effort by 50% for executive stakeholders.',
      features: [
        'Integrated 5+ predictive business intelligence modules',
        'Scalable ETL data pipelines handling 10,000+ records',
        'Sub-second ML model inference latency',
        'Real-time automated anomaly and threshold alerts',
      ],
      icon: Activity,
      gradient: 'from-[#A855F7] via-[#9333EA] to-[#D946EF]',
      githubUrl: 'https://github.com/sakib-92',
    },
    {
      id: 'aircraft-failure',
      title: 'Explainable AI Aircraft Failure Prediction System',
      category: 'Explainable AI (XAI) & Reliability',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'SHAP', 'LIME'],
      metrics: '90%+ Classification Accuracy • 40% Diagnosis Time Saved',
      shortDesc: 'Explainable AI system detecting aircraft component failures with 90%+ classification accuracy across multi-class fault categories.',
      fullDesc: 'Built an explainable AI system to detect aircraft component failures before catastrophic breakdown, achieving 90%+ classification accuracy across multi-class fault categories. Applied SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) interpretability techniques to reduce fault diagnosis time by 40%, making safety-critical model decisions fully auditable for domain engineers.',
      features: [
        'Multi-class fault classification achieving 90%+ accuracy',
        'SHAP feature impact visualizations & force plots',
        'LIME local sample explanation for black-box models',
        '40% reduction in safety diagnosis cycle time',
      ],
      icon: ShieldCheck,
      gradient: 'from-[#C084FC] via-[#A855F7] to-[#7E22CE]',
      githubUrl: 'https://github.com/sakib-92',
    },
    {
      id: 'restaurant-genai',
      title: 'Generative AI Restaurant Content Generator',
      category: 'GenAI & LangChain',
      tech: ['LangChain', 'OpenAI API', 'Python', 'NLP', 'Prompt Engineering'],
      metrics: '60% Content Creation Effort Saved • 10+ Cuisine Types',
      shortDesc: 'AI-powered app generating restaurant names and custom menus for 10+ cuisine types using LangChain and OpenAI API with advanced prompt engineering.',
      fullDesc: 'Developed an AI-powered content generation application leveraging LangChain and OpenAI APIs to produce contextual restaurant names, slogans, and tailored menus across 10+ global cuisine types. Implemented advanced prompt engineering techniques and output parsing pipelines, reducing manual content creation effort by 60%.',
      features: [
        'LangChain sequential chains for multi-step creative generation',
        'Custom prompt templates optimized for zero-shot & few-shot output',
        'Support for 10+ international cuisine profiles',
        'Context-aware dietary and price tier parameters',
      ],
      icon: Cpu,
      gradient: 'from-[#D946EF] via-[#A855F7] to-[#C084FC]',
      githubUrl: 'https://github.com/sakib-92',
    },
  ]

  return (
    <section id="projects" className="py-24 relative overflow-hidden cinematic-bg border-t border-white/5">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#A855F7]/12 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-xs font-mono font-semibold text-[#C084FC] uppercase tracking-wider">
                04 // FEATURED PROJECTS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight">
              Production ML & <br />
              <span className="text-gradient-purple">Intelligent Systems</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm font-mono max-w-xs">
            // Click any card to inspect model architecture, metrics, and technical implementation.
          </p>
        </div>

        {/* Projects 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#A855F7]/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(168,85,247,0.22)]"
                data-cursor-text="View"
              >
                <div>
                  {/* Card Header Banner */}
                  <div className={`h-44 w-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-gray-200 uppercase tracking-widest">
                        {project.category}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="text-xs font-mono font-bold text-[#E9D5FF] bg-black/60 px-2.5 py-1 rounded-lg inline-block border border-[#A855F7]/40 mb-1">
                        {project.metrics}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#C084FC] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 leading-relaxed font-sans mb-6">
                      {project.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link Prompt */}
                <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-xs font-mono font-semibold text-[#C084FC] group-hover:text-white transition-colors">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Modal Popup for Selected Project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-3xl w-full rounded-3xl border border-white/15 overflow-hidden shadow-2xl bg-[#080410] my-auto"
            >
              {/* Modal Banner */}
              <div className={`p-6 sm:p-8 bg-gradient-to-r ${selectedProject.gradient} relative`}>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10">
                  <span className="px-3 py-1 rounded-full bg-black/50 text-xs font-mono text-[#E9D5FF] uppercase font-bold tracking-wider border border-white/20">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-display font-black text-white mt-3 tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Project Overview
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Features & Technical Highlights */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Key Features & Technical Achievements
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feat, fIdx) => (
                      <div key={fIdx} className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-start gap-2.5">
                        <Sparkles className="w-4 h-4 text-[#C084FC] mt-0.5 shrink-0" />
                        <span className="text-xs font-sans text-gray-200">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Technologies & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 rounded-xl bg-[#A855F7]/15 border border-[#A855F7]/35 text-xs font-mono text-[#C084FC]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#9333EA] hover:bg-[#A855F7] text-white font-display font-bold text-xs tracking-wider shadow-lg shadow-[#9333EA]/35 transition-all flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repo (sakib-92)</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-full glass-card hover:bg-white/10 text-gray-300 text-xs font-mono tracking-wider"
                  >
                    Close Window
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

