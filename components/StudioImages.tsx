import Image from "next/image"

const StudioImages = () => {
  const images = ["/studio1.png", "/studio2.png", "/studio3.png", "/studio4.png"]

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Our Studio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-64 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`Studio image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StudioImages

