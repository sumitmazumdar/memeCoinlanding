import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const futureCoins = [
  { name: "AnesthesiaCoin", description: "Relief where screaming is still the standard." },
  { name: "TranshumanCoin", description: "Upgrade your body to feel less pain—or none at all." },
  { name: "MagicMushroomCoin", description: "Psychedelics to heal broken minds." },
  { name: "CannabisforAllCoin", description: "Weed for healing, chilling, and forgetting the chaos." },
  { name: "Child-FreeCoin", description: "No tantrums, no regrets." },
  { name: "DepopulationCoin", description: "Fewer humans, happier planet." },
  { name: "SleepForeverCoin", description: "Your right to exit, judgment-free." },
]

export function FutureCoins() {
  return (
    <section 
      id="future-coins" 
      className="bg-[#98e4d6] py-16 bg-cover bg-center"
      style={{backgroundImage: "url('/path-to-future-coins-bg.jpg')"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bubblegum text-4xl sm:text-5xl text-white text-center drop-shadow-lg mb-12">
          FUTURE COINS
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {futureCoins.map((coin, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-bubblegum text-xl text-center">
                  {coin.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bubblegum text-sm text-center text-gray-600">
                  {coin.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

