import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Bank of India Cheque Printing System',
  description: 'Terms of Service for the Bank of India Cheque Printing System. Understand your rights and responsibilities when using our service.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col font-terms">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Terms of Service</h1>
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="prose max-w-none text-justify">
            <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Acceptance of Terms</h2>
            <p className="mb-4 leading-relaxed text-gray-600">By using the Bank of India Cheque Printing System, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. Description of Service</h2>
            <p className="mb-4 leading-relaxed text-gray-600">The Bank of India Cheque Printing System is a web-based tool designed to facilitate the printing of Bank of India cheques. This service is intended for use only with Bank of India cheque books.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. User Responsibilities</h2>
            <p className="mb-4 leading-relaxed text-gray-600">You are responsible for:</p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li className="mb-2">Ensuring that you have the authority to print cheques from the account you are using.</li>
              <li className="mb-2">Verifying the accuracy of all information entered into the system.</li>
              <li className="mb-2">Maintaining the security of your account and preventing unauthorized access.</li>
              <li className="mb-2">Complying with all applicable laws and regulations regarding cheque printing and use.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Limitations of Liability</h2>
            <p className="mb-4 leading-relaxed text-gray-600">We strive to maintain the accuracy and functionality of our service, but we cannot guarantee that it will be error-free or uninterrupted. We are not liable for any damages or losses resulting from your use of this service.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">5. Privacy and Data Protection</h2>
            <p className="mb-4 leading-relaxed text-gray-600">We are committed to protecting your privacy. Please refer to our Privacy Policy for details on how we handle your data.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">6. Modifications to the Service</h2>
            <p className="mb-4 leading-relaxed text-gray-600">We reserve the right to modify or discontinue the service at any time, with or without notice.</p>

            <div className="bg-gray-100 p-4 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Contact Information</h2>
              <p className="mb-2 text-gray-600">If you have any questions about these Terms of Service, please contact us at:</p>
              <p className="text-gray-800">
                Email: <span className="text-gray-800">{'neiljay'} [at] {'pcmender'} [dot] {'online'}</span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
