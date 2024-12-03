import { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ChequePrinterClient from '@/components/ChequePrinterClient'

export const metadata: Metadata = {
  title: 'Bank of India Cheque Printing System | Print BOI Cheques Online',
  description: 'Official Bank of India cheque printing system. Easily print BOI cheques online with our secure, user-friendly, and open-source tool. Compatible with all Bank of India cheque books.',
  keywords: 'Bank of India, BOI, cheque printing, online cheque, Bank of India cheque book, BOI cheque system, open-source',
}

export default function ChequePrinter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Bank of India Cheque Printing System</h1>
        <p className="text-center mb-6 text-gray-600">
          Easily print Bank of India cheques online with our secure and user-friendly tool.
        </p>
        <ChequePrinterClient />
      </main>
      <Footer />
    </div>
  )
}