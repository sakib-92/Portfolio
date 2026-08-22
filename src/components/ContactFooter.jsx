import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Download, ArrowUpRight, Heart } from 'lucide-react'

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
      title: 'GitHub Profile',
      value: 'github.com/sakib-92',
      href: 'https://github.com/sakib-92',
      icon: Github,
    },
    {
      title: 'LinkedIn Profile',
      value: 'linkedin.com/in/sakibali-sayyed',
      href: 'https://linkedin.com/in/sakibali-sayyed/',
      icon: Linkedin,
    },
    {
      title: 'Current Location',
      value: 'Pune, Maharashtra, India',
      href: '#',
      icon: MapPin,
    },
  ]

  return (
    <footer id="contact" className="pt-24 pb-12 relative overflow-hidden cinematic-bg border-t border-white/10">
      {/* Background Glow Spotlights */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#9333EA]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#D946EF]/18 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main CTA Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A855F7]/12 border border-[#A855F7]/35">
            <span className="text-xs font-mono font-semibold text-[#C084FC] uppercase tracking-widest">
              06 // GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight leading-tight">
            Let's build something <br />
            <span className="text-gradient-purple">intelligent together.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-sans">
            Whether you have a machine learning role, project collaboration, or AI consulting opportunity, I'd love to connect.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Contact Details & Resume Download */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest px-1">
              Direct Channels
            </h3>

            {contactCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <motion.a
                  key={idx}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-5 rounded-2xl border border-white/10 hover:border-[#A855F7]/40 transition-all duration-300 flex items-center justify-between group"
                  data-cursor-text="Connect"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#A855F7]/15 border border-[#A855F7]/30 flex items-center justify-center text-[#C084FC] group-hover:bg-[#9333EA] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400">{card.title}</div>
                      <div className="text-sm font-display font-bold text-white group-hover:text-[#C084FC] transition-colors">
                        {card.value}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#C084FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              )
            })}

            {/* Download Resume Block */}
            <div className="pt-2">
              <a
                href="/Sakib_Sayyed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full glass-card p-5 rounded-2xl border border-[#A855F7]/40 hover:bg-[#A855F7]/15 transition-all flex items-center justify-between group"
                data-cursor-text="PDF"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#9333EA] flex items-center justify-center text-white shadow-lg shadow-[#9333EA]/35">
                    <Download className="w-5 h-5 animate-bounce" />
                  </div>
                  <div>
                    <div className="text-sm font-display font-bold text-white">Download Resume (PDF)</div>
                    <div className="text-xs font-mono text-gray-400">Sakib Sayyed • AI/ML Resume</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C084FC]" />
              </a>
            </div>

          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative"
            >
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Send Me a Message
              </h3>
              <p className="text-xs font-mono text-gray-400 mb-6">
                Fill out the form below to send an instant email inquiry.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white">Message Dispatched!</h4>
                  <p className="text-sm text-gray-400 max-w-sm mx-auto">
                    Your email client has been launched with your message. I'll get back to you shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#A855F7] text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#A855F7] text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">Project Details / Message</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Describe your role or project opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#A855F7] text-white text-sm focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#9333EA] to-[#A855F7] hover:from-[#A855F7] hover:to-[#C084FC] text-white font-display font-bold text-sm tracking-wider shadow-lg shadow-[#9333EA]/35 hover:shadow-[#A855F7]/50 transition-all flex items-center justify-center gap-2"
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
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            © {new Date().getFullYear()} Sakib Sayyed. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sakib-92"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C084FC] transition-colors"
            >
              GitHub (sakib-92)
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/sakibali-sayyed/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C084FC] transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="mailto:engsakib92@gmail.com"
              className="hover:text-[#C084FC] transition-colors"
            >
              Email
            </a>
            <span>•</span>
            <span className="text-[#C084FC]">AI/ML Engineering Portfolio</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
