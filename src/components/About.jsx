import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Terminal, Award, Users, Activity, Layers, Network } from 'lucide-react'

export default function About() {
  const stats = [
    {
      value: '3+',
      label: 'ML Models Deployed',
      subtext: 'EdTech platform serving 500+ users on GCP',
      icon: Terminal,
    },
    {
      value: '90%+',
      label: 'Classification Accuracy',
      subtext: 'Across multi-class aircraft fault categories',
      icon: Activity,
    },
    {
      value: 'Rs. 184.5 Cr',
      label: 'ARR Analyzed',
      subtext: '50,000+ ledger records processed in FinSight',
      icon: Layers,
    },
    {
      value: '2.25M+',
      label: 'Graph Relationships',
      subtext: 'Traversed across 47K+ nodes & 24 edge types',
      icon: Network,
    },
  ]

  const coreFocus = [
    'End-to-End ML Pipelines & Model Optimization',
    'Graph RAG & Multi-Hop Entity Reasoning',
    'Explainable AI (SHAP & LIME Interpretability)',
    'Scalable ETL & JSON Data Pipelines',
    'Cloud Deployment & MLOps on Google Cloud Platform',
    'Time-Series Forecasting (SARIMAX / Holt-Winters)',
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              01 // SUMMARY &amp; IMPACT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
            Engineering Intelligence. <br />
            <span className="text-slate-500">Delivering Measurable Impact.</span>
          </h2>
        </div>

        {/* Top Split: Detailed Bio & Core Expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            <p className="text-lg text-slate-700 leading-relaxed font-sans">
              <strong className="text-slate-950 font-semibold">AI/ML Engineer</strong> with hands-on experience in Machine Learning, Data Science, NLP, Generative AI, LLM and Data Engineering. Skilled in building end-to-end ML pipelines, predictive models, ETL workflows, cloud deployment, and AI-powered applications using Python, Scikit-learn, LangChain, OpenAI APIs, SQL, MongoDB, and Google Cloud Platform.
            </p>

            <p className="text-base text-slate-600 leading-relaxed font-sans">
              Experienced in <span className="text-slate-950 font-medium">Explainable AI (SHAP, LIME)</span>, feature engineering, model optimization, and full-stack development. Passionate about developing scalable AI solutions that drive business intelligence, automation, and data-driven decision making.
            </p>

            {/* Core Capabilities */}
            <div className="pt-3">
              <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-3">
                Core Engineering Competencies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreFocus.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-display font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stat Highlight Block (2x2 Grid) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  data-cursor-text="Stat"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-display font-bold text-slate-800 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] font-sans text-slate-500 mt-1 leading-snug">
                      {stat.subtext}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
