import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './styles.scss'
import { SiteNav } from './components/SiteNav'

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })
const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', display: 'swap', weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://anil-os.dev'),
  title: { default: 'Anil Kumar — Full-Stack Engineer & Technical Trainer', template: '%s | Anil Kumar' },
  description: 'The portfolio of Anil Kumar: Java full-stack engineer, AI application explorer, and technical trainer.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Anil Kumar — Full-Stack Engineer & Technical Trainer',
    description: 'Building practical software, exploring AI, and sharing what I learn.',
    type: 'website',
    url: 'https://anil-os.dev'
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable} ${mono.variable} ${serif.variable}`}>
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  )
}
