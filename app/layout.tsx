import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Archivo } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'Servidor dos Programadores | Comunidade de tecnologia',
  description:
    'Comunidade de tecnologia para todos os públicos. Networking, dicas, eventos e + de TI. Junte-se a mais de 20 mil devs.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`bg-background ${poppins.variable} ${archivo.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
