import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Motion values for fluid smooth spring movement
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Spring options for smooth physics
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 }
  const ringX = useSpring(mouseX, springConfig)
  const ringY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true)
      return
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      // Check hovered element
      const target = e.target.closest('a, button, [data-cursor], .interactive-hover')
      if (target) {
        setIsHovered(true)
        const customText = target.getAttribute('data-cursor-text')
        setCursorText(customText || '')
      } else {
        setIsHovered(false)
        setCursorText('')
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mouseX, mouseY, isVisible])

  if (isTouchDevice || !isVisible) return null

  return (
    <>
      {/* Small Core Dot - Sleek Charcoal */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-slate-900 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-sm"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* Trailing Outer Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center border border-slate-700/40 bg-slate-900/5 backdrop-blur-[2px] transition-colors duration-200"
        style={{
          x: ringX,
          y: ringY,
          width: isHovered ? (cursorText ? 84 : 46) : 30,
          height: isHovered ? (cursorText ? 84 : 46) : 30,
          borderRadius: cursorText ? '20px' : '50%',
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
          borderColor: isHovered ? 'rgba(15, 23, 42, 0.7)' : 'rgba(100, 116, 139, 0.3)',
          backgroundColor: isHovered ? (cursorText ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.08)') : 'rgba(15, 23, 42, 0.03)'
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono tracking-wider font-bold text-white uppercase px-2 text-center animate-fade-in">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  )
}
