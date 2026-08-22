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
    <div className="min-h-screen bg-[#0A090D] text-gray-100 selection:bg-[#FF5A1F] selection:text-white relative">
      {/* Subtle Grain Overlay */}
      <div className="grain-overlay" />

      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Fixed Glass Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
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
