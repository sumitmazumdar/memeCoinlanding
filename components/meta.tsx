import { Button } from '@/components/ui/button'
import { Twitter, DiscIcon as Discord } from 'lucide-react'

export function Meta() {
  return (
    <section 
      className="bg-[#98e4d6] py-16 bg-cover bg-center"
      style={{backgroundImage: "url('/path-to-meta-bg.jpg')"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-bubblegum text-4xl sm:text-5xl text-white drop-shadow-lg mb-12">
          CALL TO ACTION
        </h2>
        <p className="font-bubblegum text-xl text-white mb-8">
          Want to help make Painkilla Coin the most savage, impactful meme coin ever? Join us! Whether you're an AI wizard, blockchain buff, marketing genius, or just here to laugh through the chaos, we need you. Together, we can make pain impossible to ignore. Join the movement. Because pain deserves more than silence—it deserves Painkilla.
        </p>
        <div className="inline-flex gap-4 p-4 bg-yellow-400 rounded-lg">
          <h3 className="font-bubblegum text-2xl text-white mr-4">
            JOIN US
          </h3>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Discord className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

