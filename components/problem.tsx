import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Problem() {
  return (
    <section 
      id="problem" 
      className="bg-[#b8e6f7] py-16 bg-cover bg-center"
      style={{backgroundImage: "url('/path-to-problem-bg.jpg')"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bubblegum text-4xl sm:text-5xl text-white text-center drop-shadow-lg mb-12">
          THE PROBLEM
        </h2>
        <p className="font-bubblegum text-xl text-white mb-8 text-center">
          Meme coins are worth over $100 billion, built on tired jokes and rocket emojis. Meanwhile, the world drowns in suffering:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-bubblegum text-2xl">Human Pain</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bubblegum text-gray-600">
                Unintended pregnancies, untreated illnesses, mental health crises dismissed as bad moods, wage slavery where people trade their lives for crumbs, and the fallout of overpopulation—war, starvation, preventable disease, and a burning planet.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-bubblegum text-2xl">Animal Pain</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bubblegum text-gray-600">
                Factory farming inflicts agony on billions annually, while wild animals endure starvation, disease, and predation without relief.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="font-bubblegum text-xl text-white mt-8 text-center">
          Crypto celebrates cartoon dogs while ignoring the chaos. Painkilla Coin is here to demand attention where it's most needed.
        </p>
      </div>
    </section>
  )
}

