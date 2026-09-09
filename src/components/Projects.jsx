import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Sparkles, Network, ShieldCheck, TrendingUp, Play, ArrowRight, X } from 'lucide-react'
import LiveDemoModal from './LiveDemoModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeDemoProject, setActiveDemoProject] = useState(null)

  const projects = [
    {
      id: 'graph-rag',
      title: 'Biomedical Graph RAG – Multi-Hop Knowledge Graph Reasoning Engine',
      category: 'Graph RAG & Generative AI',
      hasLiveDemo: true,
      liveDemoUrl: 'https://sakib885-biomedical-graph-rag.static.hf.space/index.html',
      tech: ['Python', 'FastAPI', 'SQLite', 'Cypher', 'OpenAI API', 'Ollama', 'RAGAS', 'Docker'],
      metrics: '2.25M+ Relationships • 47K+ Nodes • 24 Edge Types',
      shortDesc: 'End-to-end Graph RAG platform traversing 2.25M+ relationships across 47K+ nodes, enabling complex 1- to 4-hop multi-entity reasoning with 4-tier Cypher guardrails.',
      fullDesc: 'Architected an end-to-end Graph RAG platform traversing 2.25M+ relationships and 47K+ nodes across 24 edge types, enabling complex 1- to 4-hop multi-entity reasoning. Engineered a hybrid retrieval pipeline with parameterized Cypher templates, schema-aware Text-to-Cypher fallback, and a 4-tier security guardrail against write-injection. Evaluated end-to-end reasoning using the RAGAS evaluation framework.',
      features: [
        'Traverses 2.25M+ biomedical relationships and 47,000+ knowledge graph nodes',
        'Multi-hop graph traversal enabling complex 1- to 4-hop multi-entity reasoning',
        'Hybrid retrieval pipeline with parameterized Cypher templates & schema-aware fallback',
        '4-tier security guardrail preventing AST-level write-injection vulnerabilities',
        'Standardized evaluation using RAGAS for faithfulness and answer relevance',
      ],
      icon: Network,
      accentColor: 'blue',
      githubUrl: 'https://github.com/sakib-92',
    },
    {
      id: 'finsight',
      title: 'FinSight – AI Financial Intelligence & Forecasting Platform',
      category: 'Financial ML & Time-Series',
      hasLiveDemo: true,
      liveDemoUrl: 'https://sakib885-finsight.static.hf.space/index.html',
      tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Scikit-learn'],
      metrics: 'Rs. 184.5 Cr ARR Analyzed • 94.2% Accuracy • Rs. 3.2 Cr Flagged',
      shortDesc: 'Financial intelligence platform analyzing Rs. 184.5 Cr ARR across 50,000+ ledger records, cutting forecasting turnaround from 14 days to under 3 minutes.',
      fullDesc: 'Architected an end-to-end financial intelligence platform analyzing Rs. 184.5 Cr ARR across 50,000+ ledger records, cutting forecasting turnaround from 14 days to under 3 minutes. Built dual SARIMAX/Holt-Winters forecasting models (94.2% accuracy, MAPE < 4.8%) plus an anomaly-detection engine that flagged Rs. 3.2 Cr in reporting risk.',
      features: [
        'Analyzed Rs. 184.5 Cr ARR across 50,000+ ledger and transaction records',
        'Cut forecasting turnaround from 14 business days to under 3 minutes',
        'Dual SARIMAX and Holt-Winters forecasting models with 94.2% accuracy (MAPE < 4.8%)',
        'Machine learning anomaly-detection engine flagging Rs. 3.2 Cr in reporting risk',
        'Full-stack architecture built with FastAPI, React, and TypeScript',
      ],
      icon: TrendingUp,
      accentColor: 'emerald',
      githubUrl: 'https://github.com/sakib-92',
    },
    {
      id: 'aircraft-failure',
      title: 'Explainable AI Aircraft Failure Prediction System',
      category: 'Explainable AI (XAI) & Reliability',
      hasLiveDemo: true,
      liveDemoUrl: null, // Interactive Simulation Sandbox
      tech: ['Python', 'Scikit-learn', 'Pandas', 'SHAP', 'LIME'],
      metrics: '90%+ Classification Accuracy • 40% Diagnosis Time Saved',
      shortDesc: 'Explainable AI system detecting aircraft component failures achieving 90%+ classification accuracy with SHAP & LIME interpretability techniques.',
      fullDesc: 'Built an explainable AI system to detect aircraft component failures achieving 90%+ classification accuracy across multi-class fault categories. Applied SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) interpretability techniques to reduce fault diagnosis time by 40%, making safety-critical model decisions auditable for domain engineers.',
      features: [
        'High-precision multi-class fault classification with 90%+ accuracy',
        'SHAP waterfall force-bar feature attributions and global feature impact plots',
        'LIME local fidelity approximations for black-box aero-engine telemetry',
        'Reduced fault diagnosis and root-cause analysis turnaround by 40%',
      ],
      icon: ShieldCheck,
      accentColor: 'slate',
      githubUrl: 'https://github.com/sakib-92',
    },
  ]

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
              <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
                04 // FEATURED PROJECTS &amp; LIVE DEMOS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
              Production AI &amp; <br />
              <span className="text-slate-500">Intelligent Systems</span>
            </h2>
          </div>
          
          {/* Live Demo Callout Badge */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 max-w-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-display font-bold text-slate-900">Live Hosted Deployments</div>
              <div className="text-[11px] font-sans text-slate-500">
                Explore real, live running models deployed on Hugging Face Spaces!
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header Top */}
                  <div className="p-6 border-b border-slate-200 bg-white">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-600 font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-display font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Metric Highlight */}
                    <div className="text-xs font-mono font-bold text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200/80 inline-block">
                      {project.metrics}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-sans">
                      {project.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-2">
                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold text-xs tracking-wide shadow-xs flex items-center justify-center gap-1.5 transition-colors"
                      data-cursor-text="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setActiveDemoProject(project)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold text-xs tracking-wide shadow-xs flex items-center justify-center gap-1.5 transition-colors"
                      data-cursor-text="Simulator"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Live Simulation</span>
                    </button>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-display font-semibold text-xs tracking-wide transition-colors"
                    title="View Full Architecture Details"
                  >
                    Details
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Interactive Simulation Modal (for Explainable AI & Sandbox) */}
      <AnimatePresence>
        {activeDemoProject && (
          <LiveDemoModal
            project={activeDemoProject}
            onClose={() => setActiveDemoProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Architecture Details Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-3xl w-full rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto"
            >
              {/* Modal Banner */}
              <div className="p-6 sm:p-8 bg-slate-900 text-white relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="relative z-10 space-y-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-300 uppercase font-bold tracking-wider border border-slate-700">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight pt-1">
                    {selectedProject.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400 font-semibold pt-1">
                    {selectedProject.metrics}
                  </div>
                </div>
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    Project Architectural Overview
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-sans">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Features & Technical Highlights */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2.5">
                    Engineering Highlights &amp; Core Innovations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.features.map((feat, fIdx) => (
                      <div key={fIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-xs font-sans text-slate-700 leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Technologies &amp; Libraries
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {selectedProject.liveDemoUrl ? (
                      <a
                        href={selectedProject.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold text-xs tracking-wide shadow-xs flex items-center gap-2"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Open Live Demo (Hugging Face)</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          const proj = selectedProject
                          setSelectedProject(null)
                          setActiveDemoProject(proj)
                        }}
                        className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold text-xs tracking-wide shadow-xs flex items-center gap-2"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Launch Simulation Sandbox</span>
                      </button>
                    )}
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-display font-semibold text-xs border border-slate-200 flex items-center gap-2"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-xs font-mono text-slate-500 hover:text-slate-800"
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
