const Credits = () => {
    const credits = [
      { title: "Song 1", artist: "Artist 1", spotifyLink: "https://open.spotify.com/track/1" },
      { title: "Song 2", artist: "Artist 2", spotifyLink: "https://open.spotify.com/track/2" },
      { title: "Song 3", artist: "Artist 3", spotifyLink: "https://open.spotify.com/track/3" },
      { title: "Song 4", artist: "Artist 4", spotifyLink: "https://open.spotify.com/track/4" },
    ]
  
    return (
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Credits & Samples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credits.map((credit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-400">{credit.title}</h3>
              <p className="text-gray-300 mb-4">{credit.artist}</p>
              <a
                href={credit.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors shadow-md"
              >
                Listen on Spotify
              </a>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Credits
  
  