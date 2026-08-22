import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

function NeuralNetworkGraph({ count = 35, mousePos }) {
  const groupRef = useRef()
  const linesRef = useRef()
  const pulsesRef = useRef()

  // Generate node positions, connection pairs, and pulse data
  const { positions, nodeArray, linePositions, pulseData } = useMemo(() => {
    const nodes = []
    const pos = new Float32Array(count * 3)

    // Generate nodes in a spherical cluster
    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 2.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z
      nodes.push(new THREE.Vector3(x, y, z))
    }

    // Connect nodes within a distance threshold
    const lineCoords = []
    const pulses = []
    const maxDist = 2.8

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = nodes[i].distanceTo(nodes[j])
        if (dist < maxDist) {
          lineCoords.push(nodes[i].x, nodes[i].y, nodes[i].z)
          lineCoords.push(nodes[j].x, nodes[j].y, nodes[j].z)

          // Add signal pulse traveling between connected nodes
          pulses.push({
            start: nodes[i].clone(),
            end: nodes[j].clone(),
            progress: Math.random(),
            speed: 0.25 + Math.random() * 0.4,
          })
        }
      }
    }

    return {
      positions: pos,
      nodeArray: nodes,
      linePositions: new Float32Array(lineCoords),
      pulseData: pulses,
    }
  }, [count])

  // Ref for pulse positions buffer
  const pulsePositions = useMemo(() => new Float32Array(pulseData.length * 3), [pulseData])

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle constant rotation
      groupRef.current.rotation.y += delta * 0.12
      groupRef.current.rotation.x += delta * 0.04

      // Parallax smooth spring tilt to mouse
      if (mousePos.current) {
        const targetX = mousePos.current.x * 0.4
        const targetY = -mousePos.current.y * 0.4
        groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05
        groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05
      }
    }

    // Update signal pulses moving along network edges
    if (pulsesRef.current) {
      const positionsAttr = pulsesRef.current.geometry.attributes.position
      pulseData.forEach((p, idx) => {
        p.progress += delta * p.speed
        if (p.progress > 1) p.progress = 0

        const currentPos = new THREE.Vector3().lerpVectors(p.start, p.end, p.progress)
        positionsAttr.setXYZ(idx, currentPos.x, currentPos.y, currentPos.z)
      })
      positionsAttr.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef}>
      {/* Network Nodes (Spheres) */}
      {nodeArray.map((node, i) => (
        <mesh key={i} position={[node.x, node.y, node.z]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#A855F7' : i % 3 === 1 ? '#D946EF' : '#C084FC'}
            emissive={i % 3 === 0 ? '#A855F7' : i % 3 === 1 ? '#D946EF' : '#C084FC'}
            emissiveIntensity={2.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}

      {/* Edge Connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#A855F7" transparent opacity={0.28} />
      </lineSegments>

      {/* Pulsing Signals / Data Flow Particles */}
      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={pulseData.length}
            array={pulsePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          color="#E9D5FF"
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

class WebGLErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    console.warn('WebGL/Canvas fallback activated:', error)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full min-h-[400px] md:min-h-[550px] flex items-center justify-center relative">
          {/* Animated SVG Fallback */}
          <div className="w-72 h-72 rounded-full border border-[#A855F7]/30 bg-[#A855F7]/5 backdrop-blur-md flex items-center justify-center animate-pulse relative">
            <div className="w-48 h-48 rounded-full border border-[#D946EF]/30 bg-[#D946EF]/5 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#A855F7] to-[#D946EF] blur-xl opacity-60" />
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default function HeroNeuralNetwork() {
  const mousePos = useRef({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    mousePos.current = {
      x: (e.clientX / innerWidth) * 2 - 1,
      y: (e.clientY / innerHeight) * 2 - 1,
    }
  }

  return (
    <WebGLErrorBoundary>
      <div
        className="w-full h-full min-h-[400px] md:min-h-[550px] relative pointer-events-auto"
        onMouseMove={handleMouseMove}
      >
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#A855F7" />
          <pointLight position={[-10, -10, -10]} intensity={1.2} color="#D946EF" />

          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <NeuralNetworkGraph count={36} mousePos={mousePos} />
          </Float>
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  )
}
