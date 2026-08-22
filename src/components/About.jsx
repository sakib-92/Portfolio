import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Terminal, Award, Users, Activity } from 'lucide-react'

export default function About() {
  const stats = [
    {
      value: '3+',
      label: 'ML Models Deployed',
      subtext: 'End-to-end pipelines deployed to GCP',
      icon: Terminal,
      color: 'from-[#C084FC] to-[#A855F7]',
    },
    {
      value: '90%+',
      label: 'Model Accuracy Achieved',
      subtext: 'Across multi-class fault classification',
      icon: Activity,
      color: 'from-[#A855F7] to-[#D946EF]',
    },
    {
      value: '500+',
      label: 'Users Impacted',
      subtext: 'Active users on EdTech platform',
      icon: Users,
      color: 'from-[#D946EF] to-[#F43F5E]',
    },
  ]

  const coreFocus = [
    'End-to-End ML Pipelines',
    'Generative AI & LLM RAG Systems',
    'Explainable AI (SHAP & LIME)',
    'Scalable ETL & Feature Engineering',
    'Cloud Deployment on GCP',
    'Business Intelligence & Predictive Analytics',
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden cinematic-bg border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A855F7]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D946EF]/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="text-xs font-mono font-semibold text-[#C084FC] uppercase tracking-wider">
              01 // SUMMARY & IMPACT
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight">
            Engineering Intelligence. <br />
            <span className="text-gradient-purple">Delivering Real Value.</span>
          </h2>
        </div>

        {/* Top Split: Detailed Bio & Core Expertise Pills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed font-sans font-light">
              <strong className="text-white font-semibold">AI/ML Engineer</strong> with hands-on experience in Machine Learning, Data Science, NLP, Generative AI, LLMs, and Data Engineering. Skilled in building end-to-end ML pipelines, predictive models, ETL workflows, cloud deployment, and AI-powered applications using Python, Scikit-learn, LangChain, OpenAI APIs, SQL, MongoDB, and Google Cloud Platform.
            </p>

            <p className="text-base text-gray-400 leading-relaxed font-sans">
              Experienced in <span className="text-[#C084FC] font-medium">Explainable AI (SHAP, LIME)</span>, feature engineering, and model optimization. Passionate about building scalable AI solutions that drive business intelligence, automation, and data-driven decision making.
            </p>

            {/* Core Focus Pills */}
            <div className="pt-4">
              <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-4">
                Core Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreFocus.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#A855F7]/35 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C084FC] shrink-0" />
                    <span className="text-xs font-display font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stat Highlight Block */}
          <div className="lg:col-span-5 space-y-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="glass-card p-6 rounded-3xl border border-white/10 hover:border-[#A855F7]/40 transition-all duration-300 group"
                  data-cursor-text="Stat"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-5xl sm:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} tracking-tight group-hover:scale-105 transition-transform origin-left`}>
                        {stat.value}
                      </div>
                      <div className="text-base font-display font-bold text-white mt-1">
                        {stat.label}
                      </div>
                      <div className="text-xs font-mono text-gray-400 mt-0.5">
                        {stat.subtext}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#A855F7]/20 group-hover:border-[#A855F7]/40 transition-colors">
                      <Icon className="w-6 h-6 text-[#C084FC]" />
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
