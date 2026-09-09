import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, Cloud, Zap, TrendingUp, Users } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'AI/ML Intern',
      company: 'Thynk Tech India',
      location: 'Pune, India',
      period: 'Sep. 2025 – Feb. 2026',
      points: [
        'Developed and deployed 3+ machine learning models using Python, Scikit-learn, and Pandas for an EdTech platform serving 500+ users.',
        'Performed data preprocessing, feature engineering, and model evaluation on real-world datasets, improving model accuracy by 15% across iterative training cycles.',
        'Designed and optimized data pipelines using JSON processing, reducing data handling time by 30% and enabling faster downstream model training.',
        'Translated business requirements into AI-driven features, improving recommendation systems and personalized learning experiences for 500+ active users, across the end-to-end ML lifecycle on Google Cloud Platform.',
      ],
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Google Cloud Platform', 'JSON Processing', 'Feature Engineering', 'Recommendation Systems'],
      highlights: [
        { label: 'Model Accuracy', val: '+15%', icon: TrendingUp },
        { label: 'Data Handling Time', val: '30% Faster', icon: Zap },
        { label: 'Active Users', val: '500+ Users', icon: Users },
        { label: 'Deployment Target', val: 'Google Cloud', icon: Cloud },
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              03 // INTERNSHIP EXPERIENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
            Industry Impact &amp; <br />
            <span className="text-slate-500">Practical ML Engineering</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-12">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>

              {/* Main Experience Card */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200">
                
                {/* Role Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-200">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 font-bold uppercase mb-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-slate-500">
                    <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                      <Calendar className="w-3.5 h-3.5 text-slate-600" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 mt-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
                  {exp.highlights.map((h, hIdx) => {
                    const Icon = h.icon
                    return (
                      <div key={hIdx} className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-display font-bold text-slate-900">{h.val}</div>
                          <div className="text-[10px] font-sans text-slate-500">{h.label}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700 font-medium"
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
