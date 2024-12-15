import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { About } from '@/components/about'
import { HowItWorks } from '@/components/how-it-works'
import { Tokenomics } from '@/components/tokenomics'
import { WhyItWorks } from '@/components/why-it-works'
import { FutureCoins } from '@/components/future-coins'
import { Meta } from '@/components/meta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <About />
      <HowItWorks />
      <Tokenomics />
      <WhyItWorks />
      <FutureCoins />
      <Meta />
    </main>
  )
}

