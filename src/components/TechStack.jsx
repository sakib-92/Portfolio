import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Brain, Network, Bot, Database, Wrench, Layers } from 'lucide-react'

export default function TechStack() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Python', 'HTML/CSS', 'Java (Basics)', 'JavaScript', 'SQL'],
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['Scikit-learn', 'XGBoost', 'Random Forest', 'Regression', 'Classification', 'Clustering', 'Feature Engineering', 'Feature Selection'],
    },
    {
      title: 'Deep Learning',
      icon: Network,
      skills: ['Generative AI', 'TensorFlow', 'PyTorch', 'Neural Networks'],
    },
    {
      title: 'Generative AI & NLP',
      icon: Bot,
      skills: ['LangChain', 'OpenAI API', 'Prompt Engineering', 'LLMs', 'RAG', 'Vector Databases'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Oracle', 'SQLite'],
    },
    {
      title: 'Frameworks',
      icon: Layers,
      skills: ['React.js', 'FastAPI', 'REST APIs'],
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Power BI', 'Docker', 'Jupyter Notebook'],
    },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 mb-3 shadow-xs">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              02 // TECHNICAL SKILLS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
            Technical Stack &amp; <br />
            <span className="text-slate-500">Engineering Tooling</span>
          </h2>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                data-cursor-text="Tech"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Badges Grid */}
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom line */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{cat.skills.length} core items</span>
                  <span className="text-slate-500 font-semibold">production-ready</span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
