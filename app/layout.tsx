import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FWOG - Future World of Meme Coin',
  description: 'Welcome to the Future World of Meme Coin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-custom min-h-screen`}>{children}</body>
    </html>
  )
}
