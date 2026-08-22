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
      {/* Small Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#A855F7] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_#A855F7]"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* Trailing Outer Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center border border-[#A855F7]/60 bg-[#A855F7]/10 backdrop-blur-[2px] transition-colors duration-200"
        style={{
          x: ringX,
          y: ringY,
          width: isHovered ? (cursorText ? 90 : 50) : 34,
          height: isHovered ? (cursorText ? 90 : 50) : 34,
          borderRadius: cursorText ? '24px' : '50%',
        }}
        animate={{
          scale: isHovered ? 1.25 : 1,
          borderColor: isHovered ? 'rgba(168, 85, 247, 0.9)' : 'rgba(168, 85, 247, 0.4)',
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono tracking-wider font-bold text-[#C084FC] uppercase px-2 text-center animate-fade-in">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  )
}
