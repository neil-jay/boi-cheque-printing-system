import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bank of India Cheque Printing System | Print BOI Cheques Online',
  description: 'Bank of India cheque printing system. Easily print BOI cheques online with our secure and user-friendly tool. Compatible with all Bank of India cheque books.',
  keywords: 'Bank of India, BOI, cheque printing, online cheque, Bank of India cheque book, BOI cheque system',
  openGraph: {
    title: 'Bank of India Cheque Printing System',
    description: 'Print Bank of India cheques online with our open source BOI cheque printing tool.',
    type: 'website',
    url: 'https://boi-cheque-printing.example.com',
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
    description: 'Print Bank of India cheques online with our open source BOI cheque printing tool.',
    images: ['https://boi-cheque-printing.example.com/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}