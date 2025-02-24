"use client"

import { useEffect, useRef } from "react"

const Header = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const bars = 20
    const barWidth = canvas.width / bars
    const animationSpeed = 0.05 // Reduced speed

    const heights = Array(bars).fill(0)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bars; i++) {
        const targetHeight = Math.random() * canvas.height
        heights[i] += (targetHeight - heights[i]) * animationSpeed

        const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - heights[i])
        gradient.addColorStop(0, "#00246B") // Spotify green at the bottom
        gradient.addColorStop(0.7, "#FFA500") // Orange in the middle
        gradient.addColorStop(1, "#CADCFC") // Red-orange at the top
        

        ctx.fillStyle = gradient
        ctx.fillRect(i * barWidth, canvas.height - heights[i], barWidth - 2, heights[i])
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <header className="relative h-64 mt-24 mb-16">
      <canvas ref={canvasRef} width={800} height={200} className="w-1/3 h-full mx-auto" />
      
      <div className="absolute inset-0 flex items-center justify-center overflow-visible">
        <svg viewBox="0 0 500 200" className="w-full max-w-2xl">
          <defs>
            <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1DB954" />
              <stop offset="50%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            id="curve"
            fill="transparent"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text width="500">
            <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
              <tspan className="text-6xl font-bold" fill="url(#titleGradient)" filter="url(#glow)">
                ZAM Studios
              </tspan>
            </textPath>
          </text>
          <g className="animate-pulse">
            <circle cx="73.2" cy="148.6" r="4" fill="#1DB954" />
            <circle cx="426.9" cy="150" r="4" fill="#FF4500" />
          </g>
        </svg>
      </div>
    </header>
  )
}

export default Header

