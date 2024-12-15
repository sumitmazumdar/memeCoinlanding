import Link from 'next/link'
import { Twitter, DiscIcon as Discord } from 'lucide-react'

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bubblegum text-2xl text-primary">
              Painkilla
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="font-bubblegum text-gray-700 hover:text-primary">
              HOME
            </Link>
            <Link href="#about" className="font-bubblegum text-gray-700 hover:text-primary">
              ABOUT
            </Link>
            <Link href="#how-to-buy" className="font-bubblegum text-gray-700 hover:text-primary">
              HOW TO BUY
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://twitter.com" className="text-gray-700 hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://discord.com" className="text-gray-700 hover:text-primary">
              <Discord className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

