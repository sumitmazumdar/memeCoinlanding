import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="bg-[#b8e6f7] py-16 bg-cover bg-center"
      style={{backgroundImage: "url('/path-to-how-it-works-bg.jpg')"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bubblegum text-4xl sm:text-5xl text-white text-center drop-shadow-lg mb-12">
          HOW PAINKILLA COIN WORKS
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-bubblegum text-xl text-center">
                Launched on Solana
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bubblegum text-sm text-center text-gray-600">
                For fast, cheap transactions.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-bubblegum text-xl text-center">
                Painkilla AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bubblegum text-sm text-center text-gray-600">
                Churns out viral campaigns and savage memes.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-bubblegum text-xl text-center">
                Collaborators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bubblegum text-sm text-center text-gray-600">
                Join the fun, spreading awareness and throwing cash into the pot—some might profit, some might not, but everyone gets a wild ride.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

