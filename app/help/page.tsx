import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangle, Home, HelpCircle, FileText, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center | Bank of India Cheque Printing System',
  description: 'Get help with using the Bank of India Cheque Printing System. Learn how to print cheques and troubleshoot common issues.',
}

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#003399]">Help Center</h1>
            <Link href="/">
              <Button variant="outline" size="sm" className="bg-white hover:bg-gray-100 text-[#003399] border-[#003399]">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <Alert className="mb-8 bg-blue-100 border-blue-300 text-blue-900">
            <InfoIcon className="h-5 w-5 text-blue-900" />
            <AlertTitle className="text-lg font-semibold">Important Note</AlertTitle>
            <AlertDescription className="mt-2">
              This system works exclusively with Bank of India cheques. Please ensure you are using a Bank of India cheque book.
            </AlertDescription>
          </Alert>

          <div className="space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#003399] flex items-center">
                <HelpCircle className="mr-2 h-6 w-6" />
                How to Print a Cheque
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-800">
                <li>Enter the payee's name in the "Pay to" field. (Note: The name will be printed in ALL CAPS regardless of how you enter it)</li>
                <li>Enter the amount in numbers in the "Amount (₹)" field.</li>
                <li>Select the date for the cheque.</li>
                <li>Click the "Generate Cheque" button to preview your cheque.</li>
                <li>Review the cheque preview carefully. Make sure all details are correct.</li>
                <li>If everything looks correct, click the "Print Cheque" button.</li>
                <li>In your browser's print dialog, make sure to select "Actual Size" or "100%" scaling to ensure the cheque prints at the correct size.</li>
              </ol>
            </section>

            <Alert variant="destructive" className="bg-red-100 border-red-300 text-red-900">
              <AlertTriangle className="h-5 w-5 text-red-900" />
              <AlertTitle className="text-lg font-semibold">Print Preview Note</AlertTitle>
              <AlertDescription className="mt-2">
                The print preview may sometimes look different from the actual printed cheque. Rest assured, our system has been thoroughly tested to ensure proper printing. If you encounter any issues, please contact our support team.
              </AlertDescription>
            </Alert>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#003399] flex items-center">
                <FileText className="mr-2 h-6 w-6" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Q: Is it safe to print cheques online?</h3>
                  <p className="mt-2 text-gray-800">A: Yes, our system is designed with security in mind. We don't store any of your cheque information. All data is processed locally in your browser and is cleared when you close the page.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Q: Can I use this system for any Bank of India account?</h3>
                  <p className="mt-2 text-gray-800">A: Yes, this system is designed to work with all Bank of India cheque books. However, always verify the printed cheque against your physical cheque book to ensure compatibility.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Q: What if my printed cheque doesn't align correctly with my cheque book?</h3>
                  <p className="mt-2 text-gray-800">A: Ensure you're printing at 100% scale. If issues persist, please contact our support team for assistance.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Q: Why is the payee name always in capital letters?</h3>
                  <p className="mt-2 text-gray-800">A: For consistency and clarity, our system automatically converts the payee name to capital letters. This is a standard practice for many banks to ensure legibility.</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#003399] flex items-center">
                <Phone className="mr-2 h-6 w-6" />
                Contact Support
              </h2>
              <p className="text-gray-800 mb-4">If you need further assistance, please don't hesitate to contact our support team:</p>
              <p className="text-gray-800">
                Email: <a href="mailto:support@boi-chequeprinting.com" className="text-blue-700 hover:underline">support@boi-chequeprinting.com</a><br />
                Phone: +91 XXXXXXXXXX
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}