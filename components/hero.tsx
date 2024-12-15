import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#98e4d6] pt-16 bg-cover bg-center" style={{backgroundImage: "url('/path-to-hero-bg.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="font-bubblegum text-4xl sm:text-6xl md:text-7xl text-white drop-shadow-lg mb-8">
          PAINKILLA COIN
        </h1>
        <div className="relative w-full" style={{ height: "calc(100vh - 200px)" }}>
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Painkilla Coin Meme"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <p className="font-bubblegum text-xl text-white mt-8">
          Pain sucks. Life's a relentless grinder, and most of us are the meat. Society's solution? Scroll past suffering like it's someone else's problem. Enter Painkilla Coin—the meme coin that's here to flip the script, hijacking the crypto world to drag pain into the spotlight with savage humor and biting satire. This isn't your fluffy dog meme coin. Painkilla Coin is unapologetic, brutally honest, and armed with truth bombs sharp enough to pierce denial. Ready to laugh through the tears? Let's go.
        </p>
      </div>
    </section>
  )
}

