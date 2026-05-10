import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'

import { Providers } from './providers'
import { CursorGlow } from '@/src/components/CursorGlow'
import FloatingNav from '@/src/components/FloatingNav'
import GlobalIdentityBar from '@/src/components/GlobalIdentityBar'
import SoftScrollReveal from '@/src/components/SoftScrollReveal'
import './globals.css'

const helvetica = localFont({
  src: [
    {
      path: '../fonts/Helvetica/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Helvetica/Helvetica Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
  display: 'swap',
})

const helveticaNeue = localFont({
  src: [
    {
      path: '../fonts/HelveticaNeue/HelveticaNeue-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/HelveticaNeue/HelveticaNeue Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/HelveticaNeue/HelveticaNeue-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica-neue',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gherard',
  description: 'Portfolio creativo de Gherard. Edición de video, branding y dirección creativa para marcas con personalidad y estética auténtica.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${helvetica.variable} ${helveticaNeue.variable}`}
    >
      <body className={`${helvetica.className} font-sans antialiased`}>
        <SoftScrollReveal />
        <Providers>{children}</Providers>
        <GlobalIdentityBar />
        <FloatingNav />
        <CursorGlow />
        <Analytics />
      </body>
    </html>
  )
}
