import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Help | Bank of India Cheque Printing System',
  description: 'Get help with using the Bank of India Cheque Printing System. Learn how to print cheques and troubleshoot common issues.',
}

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Help Center</h1>
        <div className="prose max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mt-6 mb-4">How to Print a Cheque</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Enter the payee&apos;s name in the &quot;Pay to&quot; field.</li>
            <li>Enter the amount in numbers in the &quot;Amount (₹)&quot; field.</li>
            <li>Select the date for the cheque.</li>
            <li>Click the &quot;Generate Cheque&quot; button to preview your cheque.</li>
            <li>Review the cheque preview carefully. Make sure all details are correct.</li>
            <li>If everything looks correct, click the &quot;Print Cheque&quot; button.</li>
            <li>In your browser&apos;s print dialog, make sure to select &quot;Actual Size&quot; or &quot;100%&quot; scaling to ensure the cheque prints at the correct size.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Frequently Asked Questions</h2>
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
          </div>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Support</h2>
          <p>If you need further assistance, please don&apos;t hesitate to contact our support team:</p>
          <p>Email: support@boi-chequeprinting.com<br />
          Phone: +91 XXXXXXXXXX</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}