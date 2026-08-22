import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Brain, Network, Bot, Database, Wrench } from 'lucide-react'

export default function TechStack() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-[#C084FC] to-[#A855F7]',
      skills: ['Python', 'SQL', 'JavaScript', 'HTML/CSS', 'Java (Basics)'],
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'from-[#A855F7] to-[#9333EA]',
      skills: ['Scikit-learn', 'XGBoost', 'Random Forest', 'Feature Engineering', 'Classification', 'Clustering'],
    },
    {
      title: 'Deep Learning',
      icon: Network,
      color: 'from-[#9333EA] to-[#D946EF]',
      skills: ['TensorFlow', 'PyTorch', 'Neural Networks'],
    },
    {
      title: 'Generative AI & NLP',
      icon: Bot,
      color: 'from-[#D946EF] to-[#EC4899]',
      skills: ['LangChain', 'OpenAI API', 'Prompt Engineering', 'LLMs', 'RAG', 'Vector Databases'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-[#C084FC] to-[#818CF8]',
      skills: ['PostgreSQL', 'MongoDB', 'Oracle'],
    },
    {
      title: 'Frameworks & Tools',
      icon: Wrench,
      color: 'from-[#A855F7] to-[#C084FC]',
      skills: ['React.js', 'FastAPI', 'REST APIs', 'Git', 'GitHub', 'Docker', 'Power BI', 'Jupyter Notebook'],
    },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden cinematic-bg border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#A855F7]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D946EF]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="text-xs font-mono font-semibold text-[#C084FC] uppercase tracking-wider">
              02 // TECH STACK & TOOLING
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight">
            Architecting With Modern <br />
            <span className="text-gradient-purple">AI & Engineering Stack</span>
          </h2>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-3xl border border-white/10 hover:border-[#A855F7]/40 transition-all duration-300 group flex flex-col justify-between"
                data-cursor-text="Tech"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${cat.color} p-0.5 shadow-lg shadow-[#A855F7]/15 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-[#0C0714] rounded-[14px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white tracking-tight group-hover:text-[#C084FC] transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Badges Grid */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-[#A855F7]/18 border border-white/10 hover:border-[#A855F7]/40 text-xs font-mono text-gray-300 hover:text-white transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom decorative code line */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>cat: {cat.title.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_')}</span>
                  <span className="text-[#C084FC]/80 font-bold">{cat.skills.length} items</span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
