import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Download, ArrowUpRight } from 'lucide-react'

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setSubmitted(true)
    
    // Open mailto fallback
    const mailtoUrl = `mailto:engsakib92@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`
    window.location.href = mailtoUrl

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  const contactCards = [
    {
      title: 'Email Address',
      value: 'engsakib92@gmail.com',
      href: 'mailto:engsakib92@gmail.com',
      icon: Mail,
    },
    {
      title: 'Phone Number',
      value: '+91-9156793756',
      href: 'tel:+919156793756',
      icon: Phone,
    },
    {
      title: 'LinkedIn Profile',
      value: 'linkedin.com/in/sakibali-sayyed',
      href: 'https://linkedin.com/in/sakibali-sayyed/',
      icon: Linkedin,
    },
    {
      title: 'GitHub Profile',
      value: 'github.com/sakib-92',
      href: 'https://github.com/sakib-92',
      icon: Github,
    },
    {
      title: 'Location',
      value: 'Pune, India',
      href: '#',
      icon: MapPin,
    },
  ]

  return (
    <footer id="contact" className="pt-24 pb-12 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main CTA Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-widest">
              06 // GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
            Let's build scalable AI <br />
            <span className="text-slate-500">solutions together.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans max-w-xl mx-auto">
            Available for full-time AI/ML Engineering roles, research opportunities, and enterprise ML consultations.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Direct Channels & Resume Download */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest px-1">
              Direct Contact Channels
            </h3>

            {contactCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <motion.a
                  key={idx}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200 flex items-center justify-between group"
                  data-cursor-text="Connect"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500">{card.title}</div>
                      <div className="text-sm font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {card.value}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </motion.a>
              )
            })}

            {/* Download Resume Block */}
            <div className="pt-2">
              <a
                href="/Sakib_Sayyed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white p-4 rounded-2xl border border-slate-300 shadow-xs hover:border-slate-400 hover:shadow-md transition-all flex items-center justify-between group"
                data-cursor-text="PDF"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-xs">
                    <Download className="w-4 h-4 animate-bounce" />
                  </div>
                  <div>
                    <div className="text-sm font-display font-bold text-slate-900">Download Resume (PDF)</div>
                    <div className="text-xs font-mono text-slate-500">Sakib Sayyed • AI/ML Engineer Resume</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
              </a>
            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-xl font-display font-bold text-slate-900 mb-1">
                Send Direct Message
              </h3>
              <p className="text-xs font-mono text-slate-500 mb-6">
                Fill out the form below to initiate an email inquiry directly to Sakib.
              </p>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-slate-900">Inquiry Dispatched!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Your email client has been launched with your drafted message. I will respond promptly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1.5 uppercase font-medium">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-slate-900 text-slate-900 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1.5 uppercase font-medium">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-slate-900 text-slate-900 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 uppercase font-medium">Project Details / Opportunity</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Share details regarding your role, team, or project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-slate-900 text-slate-900 text-sm focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                    data-cursor-text="Send"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </motion.div>
          </div>

        </div>

        {/* Footer Sub-strip */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Sakib Sayyed. AI/ML Engineering Portfolio.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sakib-92"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              GitHub (sakib-92)
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/sakibali-sayyed/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="mailto:engsakib92@gmail.com"
              className="hover:text-slate-900 transition-colors"
            >
              engsakib92@gmail.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
