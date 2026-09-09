import React from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import EducationCertifications from './components/EducationCertifications'
import ContactFooter from './components/ContactFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-slate-900 selection:text-white relative">
      {/* Light Grid Pattern Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none light-grid-pattern opacity-60 z-0" />

      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Fixed Glass Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <EducationCertifications />
      </main>

      {/* Footer & Contact Section */}
      <ContactFooter />
    </div>
  )
}
