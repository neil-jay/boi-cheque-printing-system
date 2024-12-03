import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangle, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center | Bank of India Cheque Printing System',
  description: 'Get help with using the Bank of India Cheque Printing System. Learn how to print cheques and troubleshoot common issues.',
}

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Help Center</h1>
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <Alert className="mb-6">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Important Note</AlertTitle>
            <AlertDescription>
              This system works exclusively with Bank of India cheques. Please ensure you are using a Bank of India cheque book.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">How to Print a Cheque</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Enter the payee&apos;s name in the &quot;Pay to&quot; field. (Note: The name will be printed in ALL CAPS regardless of how you enter it)</li>
                <li>Enter the amount in numbers in the &quot;Amount (₹)&quot; field.</li>
                <li>Select the date for the cheque.</li>
                <li>Click the &quot;Generate Cheque&quot; button to preview your cheque.</li>
                <li>Review the cheque preview carefully. Make sure all details are correct.</li>
                <li>If everything looks correct, click the &quot;Print Cheque&quot; button.</li>
                <li>In your browser&apos;s print dialog, make sure to select &quot;Actual Size&quot; or &quot;100%&quot; scaling to ensure the cheque prints at the correct size.</li>
              </ol>
            </section>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Print Preview Note</AlertTitle>
              <AlertDescription>
                The print preview may sometimes look different from the actual printed cheque. Rest assured, our system has been thoroughly tested to ensure proper printing. If you encounter any issues, please contact our support team.
              </AlertDescription>
            </Alert>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium">Q: Is it safe to print cheques online?</h3>
                  <p>A: Yes, our system is designed with security in mind. We don&apos;t store any of your cheque information. All data is processed locally in your browser and is cleared when you close the page.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Q: Can I use this system for any Bank of India account?</h3>
                  <p>A: Yes, this system is designed to work with all Bank of India cheque books. However, always verify the printed cheque against your physical cheque book to ensure compatibility.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Q: What if my printed cheque doesn&apos;t align correctly with my cheque book?</h3>
                  <p>A: Ensure you&apos;re printing at 100% scale. If issues persist, please contact our support team for assistance.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Q: Why is the payee name always in capital letters?</h3>
                  <p>A: For consistency and clarity, our system automatically converts the payee name to capital letters. This is a standard practice for many banks to ensure legibility.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
              <p>If you need further assistance, please don&apos;t hesitate to contact our support team:</p>
              <p>Email: support@boi-chequeprinting.com<br />
              Phone: +91 XXXXXXXXXX</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
