import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bank of India Cheque Printing System | Print BOI Cheques Online',
  description: 'Official Bank of India cheque printing system. Easily print BOI cheques online with our secure, user-friendly, and open-source tool. Compatible with all Bank of India cheque books.',
  keywords: 'Bank of India, BOI, cheque printing, online cheque, Bank of India cheque book, BOI cheque system, open-source',
  authors: [{ name: 'neiljay', url: 'https://github.com/neil-jay' }],
  creator: 'Neil Jay',
  publisher: 'Bank of India Cheque Printing System',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Bank of India Cheque Printing System',
    description: 'Print Bank of India cheques online with our official BOI cheque printing tool.',
    type: 'website',
    url: 'https://boi-cheque-printing-system.vercel.app/',
    images: [
      {
        url: 'https://boi-cheque-printing.example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bank of India Cheque Printing System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bank of India Cheque Printing System',
    description: 'Print Bank of India cheques online with our official BOI cheque printing tool.',
    images: ['https://boi-cheque-printing.example.com/twitter-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}