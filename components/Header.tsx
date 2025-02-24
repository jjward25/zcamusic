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
    const animationSpeed = 0.05

    const heights = Array(bars).fill(0)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bars; i++) {
        const targetHeight = Math.random() * canvas.height
        heights[i] += (targetHeight - heights[i]) * animationSpeed

        const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - heights[i])
        gradient.addColorStop(0, "#000000")
        gradient.addColorStop(0.7, "#FFA500")
        gradient.addColorStop(1, "#176161")

        ctx.fillStyle = gradient
        ctx.fillRect(i * barWidth, canvas.height - heights[i], barWidth - 2, heights[i])
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <header className="relative h-64 mt-24 mb-16">
      <canvas ref={canvasRef} width={800} height={300} className="w-full md:w-1/3 h-full mx-auto" />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <svg viewBox="0 0 500 300" className="w-full max-w-2xl">
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
            d="M73.2,148.6c4-0,65.5-96.8,178.6-95.6c111.3,1.2,130.8,90.3,175.1,97"
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

        {/* Profile Picture */}
        <div className="absolute top-1/2 mt-12 transform -translate-y-1/2 flex-none w-40 h-40 rounded-full overflow-hidden border-2 border-black dark:border-white shadow-lg">
        <img
            src="/zca2.png"
            alt="prof"
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:rotate-180"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
