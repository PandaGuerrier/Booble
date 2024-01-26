import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Booble 💚💙❤️',
  description: 'The booble project: a project to inform about filter bubbles',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr">
    <head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </head>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
