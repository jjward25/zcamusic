"use client"

import { useEffect, useState } from "react"

declare global {
    interface Window {
      Calendly?: {
        initInlineWidget: (options: {
          url: string
          parentElement: HTMLElement | null
          prefill?: Record<string, unknown>
          utm?: Record<string, unknown>
        }) => void
      }
    }
  }
  

const Contact = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/zcastudioproduction",
            parentElement: document.getElementById("calendly-inline-widget"),
            prefill: {},
            utm: {},
          })
      
          setTimeout(() => setIsCalendlyLoaded(true), 1000)
        }
      }
      

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Contact Us</h2>
      <div className="max-w-3xl mx-auto">
        <div id="calendly-inline-widget" style={{ minWidth: "320px", height: "600px" }}></div>
      </div>
      {isCalendlyLoaded && <div id="calendly-spacer" style={{ height: "630px" }}></div>}
    </section>
  )
}

export default Contact

