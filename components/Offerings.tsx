const Offering = ({ title, description }: { title: string; description: string }) => (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700">
      <h3 className="text-xl font-semibold mb-2 text-green-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
  
  const Offerings = () => {
    const offerings = [
      { title: "Mixing", description: "Professional mixing services to perfect your sound." },
      { title: "Mastering", description: "Finalize your tracks with industry-standard mastering." },
      { title: "Studio Time", description: "Book our state-of-the-art studio for your recordings." },
      { title: "Event Recording", description: "Capture live events with high-quality audio recording." },
    ]
  
    return (
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <Offering key={index} title={offering.title} description={offering.description} />
          ))}
        </div>
      </section>
    )
  }
  
  export default Offerings
  
  