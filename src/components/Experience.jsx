import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, Cloud, Zap, TrendingUp, Layers } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'AI/ML Intern',
      company: 'Thynk Tech India',
      location: 'Pune, India',
      period: 'Sep 2025 – Feb 2026',
      impact: '500+ Active Users Served',
      points: [
        'Developed and deployed 3+ machine learning models using Python, Scikit-learn, and Pandas for an EdTech platform serving 500+ users.',
        'Performed data preprocessing and feature engineering, improving model accuracy by 15% across iterative training cycles.',
        'Designed and optimized data pipelines using JSON processing, reducing data handling time by 30% and enabling faster downstream model training.',
        'Translated business requirements into AI-driven features, improving recommendation systems and personalized learning experiences.',
        'Gained hands-on experience across the full ML lifecycle including data collection, validation, and deployment on Google Cloud Platform (GCP).'
      ],
      tags: ['Python', 'Scikit-learn', 'Pandas', 'GCP', 'JSON Pipelines', 'ML Lifecycle'],
      highlights: [
        { label: 'Accuracy Improvement', val: '+15%', icon: TrendingUp },
        { label: 'Pipeline Acceleration', val: '30% Faster', icon: Zap },
        { label: 'Cloud Target', val: 'GCP Deployed', icon: Cloud },
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden cinematic-bg border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF2A4B]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="text-xs font-mono font-semibold text-[#C084FC] uppercase tracking-wider">
              03 // WORK EXPERIENCE & INTERNSHIPS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight">
            Industry Impact & <br />
            <span className="text-gradient-purple">Practical Engineering</span>
          </h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 border-l-2 border-[#A855F7]/35 space-y-12">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Glowing Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#050307] border-2 border-[#A855F7] flex items-center justify-center shadow-[0_0_15px_#A855F7]">
                <div className="w-2 h-2 rounded-full bg-[#C084FC] animate-ping" />
              </div>

              {/* Main Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#A855F7]/40 transition-all duration-300 shadow-2xl">
                
                {/* Role Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C084FC] font-bold uppercase mb-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-gray-400">
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-[#C084FC]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 mt-1">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Metric Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                  {exp.highlights.map((h, hIdx) => {
                    const Icon = h.icon
                    return (
                      <div key={hIdx} className="bg-white/[0.03] p-3 rounded-2xl border border-white/5 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#A855F7]/15 flex items-center justify-center text-[#C084FC]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-display font-bold text-white">{h.val}</div>
                          <div className="text-[10px] font-mono text-gray-400">{h.label}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#C084FC] mt-1 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-[#A855F7]/12 border border-[#A855F7]/25 text-xs font-mono text-[#C084FC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
