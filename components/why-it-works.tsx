import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WhyItWorks() {
  return (
    <section 
      id="why-it-works" 
      className="bg-[#b8e6f7] py-16 bg-cover bg-center"
      style={{backgroundImage: "url('/path-to-why-it-works-bg.jpg')"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bubblegum text-4xl sm:text-5xl text-white text-center drop-shadow-lg mb-12">
          WHY IT'LL WORK
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-bubblegum text-2xl">Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside font-bubblegum text-gray-600">
                <li>A provocative, buzzworthy concept backed by crypto culture.</li>
                <li>A ready audience of antinatalists, activists, and meme-lovers.</li>
                <li>Danny Shine's 60K YouTube fans, craving taboo-smashing content.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-bubblegum text-2xl">Weaknesses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside font-bubblegum text-gray-600">
                <li>Regulations could kill the vibe.</li>
                <li>AI might get self-aware and roast us all.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

