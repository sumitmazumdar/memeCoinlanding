import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function About() {
  return (
    <section 
      id="about" 
      className="bg-[#98e4d6] py-16 bg-cover bg-center"
      style={{backgroundImage: "url('/path-to-about-bg.jpg')"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bubblegum text-4xl sm:text-5xl text-white text-center drop-shadow-lg mb-12">
          HOW PAINKILLA STANDS OUT
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px]">
          <div className="relative w-full h-[400px] md:h-full">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Painkilla AI Meme Machine"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="font-bubblegum text-xl text-white mb-8">
              Inspired by the success of GOATEUS MAXIMUS, Painkilla Coin will leverage a tireless AI-driven meme machine, trained on humanity's darkest truths and wielding razor-sharp humor. Think Schopenhauer with viral tweets, Nietzsche with Wi-Fi, and a Buddha who's seen too much.
            </p>
            <h3 className="font-bubblegum text-2xl text-white mb-4">The Painkilla AI will focus on:</h3>
            <ol className="list-decimal list-inside font-bubblegum text-xl text-white">
              <li>The Worst Pain: The gut-wrenching suffering no one talks about.</li>
              <li>The Ignored Pain: Issues dismissed because they're inconvenient.</li>
              <li>Solvable Pain: Problems we can actually fix.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

