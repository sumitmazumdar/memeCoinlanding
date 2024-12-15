import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const steps = [
  {
    title: 'CREATE WALLET',
    description: 'DOWNLOAD PHANTOM OR YOUR WALLET OF CHOICE FROM APP STORE OR GOOGLE PLAY STORE. DESKTOP USERS, DOWNLOAD THE GOOGLE CHROME EXTENSION BY GOING TO PHANTOM.',
    action: 'BUY NOW'
  },
  {
    title: 'GET SOME ETH',
    description: 'HAVE ETH IN YOUR WALLET TO TRANSFER TO JUPITER TO SWAP. TRANSFER FROM ANOTHER WALLET, OR BUY DIRECTLY ON PHANTOM. TRANSFER FROM ANOTHER WALLET, OR BUY ON ANY EXCHANGE AND SEND IT TO YOUR WALLET.',
    action: 'BUY NOW'
  },
  {
    title: 'GO TO JUPITER',
    description: 'CONNECT TO JUPITER. CONNECT YOUR WALLET TO JUPITER BY CLICKING "CONNECT WALLET" AND CHOOSING PHANTOM. SELECT FWOG, AND CONFIRM WHEN PHANTOM PROMPTS YOU FOR A WALLET SIGNATURE.',
    action: 'BUY NOW'
  },
  {
    title: 'SWAP FOR FWOG',
    description: 'SWITCH ETH FOR FWOG, WE HAVE ZERO TAXES SO YOU CAN SET SLIPPAGE TO 0.1%. IF YOU DON\'T HAVE ETH, YOU CAN BUY DIRECTLY ON PHANTOM.',
    action: 'BUY NOW'
  }
]

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="bg-[#98e4d6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bubblegum text-4xl sm:text-5xl text-white text-center drop-shadow-lg mb-12">
          HOW TO BUY
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-bubblegum text-xl text-center">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bubblegum text-sm text-center text-gray-600">
                  {step.description}
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline" className="font-bubblegum">
                  {step.action}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

