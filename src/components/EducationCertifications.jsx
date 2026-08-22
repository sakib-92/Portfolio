import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react'

export default function EducationCertifications() {
  const certifications = [
    {
      title: 'Python for ML',
      issuer: 'Coursera',
      year: '2024',
      badgeColor: 'text-[#C084FC] border-[#A855F7]/40 bg-[#A855F7]/15',
    },
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Google Cloud',
      year: '2025',
      badgeColor: 'text-purple-300 border-purple-400/40 bg-purple-500/15',
    },
    {
      title: 'Python Foundation Certification',
      issuer: 'Infosys Springboard',
      year: '2025',
      badgeColor: 'text-fuchsia-300 border-fuchsia-400/40 bg-fuchsia-500/15',
    },
  ]

  return (
    <section id="education" className="py-20 relative overflow-hidden cinematic-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
            <span className="text-xs font-mono font-semibold text-[#C084FC] uppercase tracking-wider">
              05 // ACADEMICS & CREDENTIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Education & <span className="text-gradient-purple">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Education Card (Large Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#A855F7]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#A855F7]/15 border border-[#A855F7]/30 flex items-center justify-center text-[#C084FC]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-gray-300">
                  <Calendar className="w-3.5 h-3.5 text-[#C084FC]" />
                  <span>Sep 2022 – Present</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C084FC] uppercase font-bold tracking-widest">
                  Undergraduate Degree
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  Bachelor of Engineering in Artificial Intelligence & Data Science
                </h3>
                <div className="flex items-center gap-2 text-sm font-sans text-gray-400 pt-1">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>ISBM College of Engineering, Pune, Maharashtra</span>
                </div>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-6 pt-6 border-t border-white/5">
                Specialized coursework in Machine Learning Algorithms, Deep Neural Networks, Data Structures & Algorithms, Database Management Systems, Natural Language Processing, and Big Data Technologies.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Status: Pursuing Final Year</span>
              <span className="text-purple-400 font-bold">Active Academic Standing</span>
            </div>
          </motion.div>

          {/* Certifications Grid (Compact Column) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest px-1">
              Verified Certifications
            </h3>

            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-[#A855F7]/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C084FC] group-hover:bg-[#9333EA] group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#C084FC] transition-colors">
                      {cert.title}
                    </h4>
                    <div className="text-xs font-mono text-gray-400">
                      {cert.issuer}
                    </div>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono font-bold ${cert.badgeColor}`}>
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
