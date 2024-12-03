import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ChequePrinterClient from '@/components/ChequePrinterClient'

export default function ChequePrinter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Bank of India Cheque Printing System</h1>
        <p className="text-center mb-6 text-gray-600 max-w-2xl mx-auto">
          Welcome to the Bank of India cheque printing system. Easily print BOI cheques online with our secure, user-friendly, and open-source tool. Compatible with all Bank of India cheque books.
        </p>
        <ChequePrinterClient />
      </main>
      <Footer />
    </div>
  )
}