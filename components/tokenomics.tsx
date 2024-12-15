import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Tokenomics() {
  return (
    <section 
      id="tokenomics" 
      className="bg-[#98e4d6] py-16 bg-cover bg-center"
      style={{backgroundImage: "url('/path-to-tokenomics-bg.jpg')"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bubblegum text-4xl sm:text-5xl text-white text-center drop-shadow-lg mb-12">
          TOKENOMICS
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-bubblegum text-xl text-center">
                1 Billion Tokens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bubblegum text-sm text-center text-gray-600">
                Fixed supply.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-bubblegum text-xl text-center">
                Burning and Liquidity Locks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bubblegum text-sm text-center text-gray-600">
                To prevent scams.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-bubblegum text-xl text-center">
                No Presales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bubblegum text-sm text-center text-gray-600">
                Fair launch for everyone.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

