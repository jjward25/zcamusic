const AnimatedBackground = () => {
    const symbols = [
      // Treble Clef
      "M15 46c5-11 9-23 9-34 0-4-1-8-4-11-3-3-7-4-11-4-4 0-7 1-10 4-3 3-4 7-4 11 0 4 1 8 4 11 3 3 6 4 10 4 2 0 4 0 6-1 0 9-4 20-9 31-5 10-11 21-18 32-1 1-1 2-1 3 0 1 0 1 1 2 0 1 1 1 2 1 1 0 2 0 3-1 11-16 19-31 25-45 1 4 2 9 4 15 1 5 3 11 5 17 2 7 4 13 6 19 2 5 4 10 7 14 3 3 6 5 9 5 2 0 4-1 5-2 2-2 2-4 2-6 0-4-1-8-4-13-3-6-6-12-9-19-3-8-6-16-7-24-2-9-3-17-3-25",
      // Quarter Note
      "M30 5V70M30 70c0 8-7 15-15 15s-15-7-15-15 7-15 15-15 15 7 15 15",
      // Bass Clef
      "M95 50c0 3-1 5-3 7s-4 3-7 3-5-1-7-3-3-4-3-7 1-5 3-7 4-3 7-3 5 1 7 3 3 4 3 7zM20 40h15m-15 10h15M10 35c0-8 1-14 4-19s7-8 12-8c4 0 7 1 10 4s4 6 4 10c0 5-2 10-6 14s-9 6-15 6h-1",
      // Flat Note
      "M20 20v60M20 50c0-5 1-9 4-12s6-5 10-5c3 0 5 1 7 3s3 4 3 7c0 4-2 8-6 11l-18 15",
      // Sharp Note
      "M35 30v40M65 30v40M30 45h40M30 55h40",
      // Beamed Note
      "M10 50h80M20 50v-30M40 50v-20M60 50v-30M80 50v-20",
    ]
  
    return (
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        {[...Array(20)].map((_, i) => (
          <svg
            key={i}
            className="absolute animate-float"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 15}s`,
              animationDelay: `${-Math.random() * 15}s`,
            }}
          >
            <path
              d={symbols[Math.floor(Math.random() * symbols.length)]}
              fill="none"
              stroke={`hsl(${Math.random() * 360}, 70%, 50%)`}
              strokeWidth="2"
              opacity="0.5"
            />
          </svg>
        ))}
      </div>
    )
  }
  
  export default AnimatedBackground
  
  