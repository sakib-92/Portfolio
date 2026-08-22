import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X, Cpu } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section highlighting
      const sections = navLinks.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4 pb-2 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Glass Pill Navbar */}
        <div className={`w-full glass-pill rounded-full px-5 py-3 flex items-center justify-between transition-all duration-300 shadow-2xl ${
          scrolled ? 'bg-[#080410]/95 shadow-[#A855F7]/10 border-white/10' : ''
        }`}>
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
            data-cursor-text="Sakib"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9333EA] to-[#D946EF] flex items-center justify-center text-white shadow-md shadow-[#9333EA]/35 group-hover:scale-105 transition-transform duration-300">
              <Cpu className="w-4 h-4 text-white font-bold" />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight group-hover:text-[#C084FC] transition-colors">
              Sakib Sayyed
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-[#C084FC] font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                  data-cursor-text={link.name}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#A855F7]/20 rounded-full border border-[#A855F7]/40 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action: Get in Touch Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#9333EA] to-[#A855F7] hover:from-[#A855F7] hover:to-[#C084FC] text-white px-5 py-2.5 rounded-full font-display text-xs font-bold tracking-wider shadow-lg shadow-[#9333EA]/35 hover:shadow-[#A855F7]/50 hover:-translate-y-0.5 transition-all duration-300"
              data-cursor-text="Connect"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-x-4 top-20 z-40 glass-card rounded-3xl p-6 border border-white/10 shadow-2xl pointer-events-auto bg-[#080410]/95"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-display font-medium text-gray-200 hover:text-[#C084FC] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full flex items-center justify-center gap-2 bg-[#9333EA] text-white py-3 rounded-2xl font-display font-bold text-sm shadow-lg shadow-[#9333EA]/35"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
