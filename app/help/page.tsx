import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HelpCenter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Help Center</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="text-justify">
            <h2 className="text-2xl font-semibold mb-4">How to Use the Bank of India Cheque Printing System</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Enter Cheque Details:</strong> Fill in the required fields on the main page, including the payee's name, the amount in numbers, and the date.
              </li>
              <li>
                <strong>Generate Cheque Preview:</strong> After entering the details, click the "Generate Cheque" button to see a preview of your cheque.
              </li>
              <li>
                <strong>Review the Cheque:</strong> Carefully review the generated cheque preview to ensure all details are correct.
              </li>
              <li>
                <strong>Print the Cheque:</strong> If everything looks correct, click the "Print Cheque" button. This will open your browser's print dialog.
              </li>
              <li>
                <strong>Use Proper Paper:</strong> Make sure to load your printer with the official Bank of India cheque paper before printing.
              </li>
              <li>
                <strong>Sign the Cheque:</strong> After printing, don't forget to sign the cheque in the designated area.
              </li>
            </ol>
          </section>
          <section className="text-justify">
            <h2 className="text-2xl font-semibold mb-4">Tips for Successful Cheque Printing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Always double-check the payee name and amount before printing.</li>
              <li>Ensure your printer is properly calibrated to align with the Bank of India cheque format.</li>
              <li>If you make a mistake, do not attempt to edit the printed cheque. Instead, void it and print a new one.</li>
              <li>Keep your Bank of India cheque paper in a secure location.</li>
            </ul>
          </section>
          <div className="text-center">
            <Link href="/">
              <Button>Return to Cheque Printing</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

