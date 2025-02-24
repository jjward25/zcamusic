import Header from "../components/Header"
import Offerings from "../components/Offerings"
import Contact from "../components/Contact"
import StudioImages from "../components/StudioImages"
import Credits from "../components/Credits"

export default function Home() {
  return ( 
    <main className="min-h-screen bg-black bg-opacity-50 text-white">
      <Header />
      <Offerings />
      <StudioImages />
      <div className="max-h-[700px] overflow-hidden">
      <Contact />
      </div>
      <p className="text-center text-gray-400 text-sm mb-4">
      zcastudioproduction@gmail.com
      </p>
      
      <Credits /> 
      <p className="text-center text-gray-400 text-sm mt-4 italic">
        © 2025 ZCA Studio Production. All rights reserved.
      </p>
    </main>
  )
}

