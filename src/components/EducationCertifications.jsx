import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react'

export default function EducationCertifications() {
  const certifications = [
    {
      title: 'Python for ML',
      issuer: 'Coursera',
      year: '2024',
    },
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Google Cloud',
      year: '2025',
    },
    {
      title: 'Python Foundation Certification',
      issuer: 'Infosys Springboard',
      year: '2025',
    },
  ]

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 mb-3 shadow-xs">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              05 // ACADEMICS &amp; CERTIFICATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
            Education &amp; <br />
            <span className="text-slate-500">Verified Credentials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Education Card (Large Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200 text-xs font-mono text-slate-600">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sep. 2022 – 2026</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-mono text-blue-600 uppercase font-bold tracking-wider">
                  Undergraduate Degree Program
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                  Bachelor of Engineering in Artificial Intelligence and Data Science
                </h3>
                <div className="flex items-center gap-2 text-sm font-sans text-slate-500 pt-1">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>ISBM College of Engineering, Pune, Maharashtra</span>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-5 pt-5 border-t border-slate-100">
                Coursework and practical projects spanning Machine Learning Algorithms, Deep Learning, Natural Language Processing, Big Data Technologies, Data Structures &amp; Algorithms, and Distributed Database Management Systems.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Graduation Year: <strong className="text-slate-900">2026</strong></span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Final Year Student
              </span>
            </div>
          </motion.div>

          {/* Certifications Grid (Compact Column) */}
          <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
            <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest px-1">
              Verified Professional Certifications
            </h3>

            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h4>
                    <div className="text-xs font-mono text-slate-500">
                      {cert.issuer}
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md border border-slate-200 bg-slate-50 text-[11px] font-mono font-bold text-slate-700">
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
