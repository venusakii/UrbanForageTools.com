"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export function LivingVeinBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const mouseRef = useRef({ x: 0, y: 0 })
  const clickRef = useRef({ x: 0, y: 0, active: false })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleClick = (e: MouseEvent) => {
      clickRef.current = { x: e.clientX, y: e.clientY, active: true }
      setTimeout(() => {
        clickRef.current.active = false
      }, 1000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)

    // Vein nodes
    const nodes: { x: number; y: number; vx: number; vy: number; size: number }[] = []
    const nodeCount = 50

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
      })
    }

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isDark = theme === "dark"
      const veinColor = isDark ? "#00F2D4" : "#7EE081"
      const glowColor = isDark ? "rgba(0, 242, 212, 0.1)" : "rgba(126, 224, 129, 0.1)"

      // Update nodes
      nodes.forEach((node) => {
        // Mouse attraction
        const dx = mouseRef.current.x - node.x
        const dy = mouseRef.current.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          node.vx += (dx / dist) * 0.02
          node.vy += (dy / dist) * 0.02
        }

        // Click pulse
        if (clickRef.current.active) {
          const cdx = clickRef.current.x - node.x
          const cdy = clickRef.current.y - node.y
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy)
          if (cdist < 300) {
            node.vx += (cdx / cdist) * 0.5
            node.vy += (cdy / cdist) * 0.5
          }
        }

        // Apply velocity with damping
        node.x += node.vx
        node.y += node.vy
        node.vx *= 0.98
        node.vy *= 0.98

        // Wrap around
        if (node.x < 0) node.x = canvas.width
        if (node.x > canvas.width) node.x = 0
        if (node.y < 0) node.y = canvas.height
        if (node.y > canvas.height) node.y = 0
      })

      // Draw connections (veins)
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((other) => {
          const dx = other.x - node.x
          const dy = other.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            const opacity = (1 - dist / 150) * (0.3 + Math.sin(time + i) * 0.1)
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)

            // Curved vein
            const midX = (node.x + other.x) / 2 + Math.sin(time + i) * 10
            const midY = (node.y + other.y) / 2 + Math.cos(time + i) * 10
            ctx.quadraticCurveTo(midX, midY, other.x, other.y)

            ctx.strokeStyle = veinColor
              .replace(")", `, ${opacity})`)
              .replace("rgb", "rgba")
              .replace("#00F2D4", `rgba(0, 242, 212, ${opacity})`)
              .replace("#7EE081", `rgba(126, 224, 129, ${opacity})`)
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      // Draw nodes with glow
      nodes.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.x * 0.01) * 0.5 + 0.5

        // Glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size * 3 * pulse, 0, Math.PI * 2)
        ctx.fillStyle = glowColor
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = veinColor
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
      cancelAnimationFrame(animationId)
    }
  }, [mounted, theme])

  if (!mounted) return null

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />
}
