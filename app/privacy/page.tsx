import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bank of India Cheque Printing System',
  description: 'Privacy policy for the Bank of India Cheque Printing System. Learn how we protect your privacy while using minimal web analytics.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col font-terms">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="prose max-w-none text-justify">
            <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p className="mb-4 leading-relaxed text-gray-600">At Bank of India Cheque Printing System, we are committed to protecting your privacy. This Privacy Policy outlines how we handle your data when you use our online cheque printing service.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">No Data Collection or Storage</h2>
            <p className="mb-4 leading-relaxed text-gray-600">We want to assure you that our Bank of India Cheque Printing System does not collect, store, or process any personal information. All data entered into our system is temporary and exists only for the duration of your current session.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">How We Handle Your Information</h2>
            <p className="mb-4 leading-relaxed text-gray-600">When you use our cheque printing service:</p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li className="mb-2">All information you enter (such as payee name, amount, and date) is only displayed on your screen for the purpose of previewing and printing your cheque.</li>
              <li className="mb-2">This information is not transmitted to our servers or stored in any database.</li>
              <li className="mb-2">Once you close your browser window or navigate away from our site, all entered information is permanently deleted.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Web Analytics</h2>
            <p className="mb-4 leading-relaxed text-gray-600">We use Vercel Web Analytics to collect anonymous usage data. This helps us understand how our service is used and improve it. Vercel Web Analytics:</p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li className="mb-2">Does not use cookies or any other form of local storage</li>
              <li className="mb-2">Does not collect any personal data</li>
              <li className="mb-2">Does not track users across different websites</li>
              <li className="mb-2">Complies with GDPR, CCPA, and other privacy regulations</li>
            </ul>
            <p className="mb-4 leading-relaxed text-gray-600">The data collected includes:</p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li className="mb-2">Page views</li>
              <li className="mb-2">Visit duration</li>
              <li className="mb-2">Referrer information</li>
              <li className="mb-2">General location data (country/region level only)</li>
              <li className="mb-2">Device type and browser information</li>
            </ul>
            <p className="mb-4 leading-relaxed text-gray-600">This data is aggregated and cannot be used to identify individual users.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Data Security</h2>
            <p className="mb-4 leading-relaxed text-gray-600">While we do not collect or store any of your personal data, we still implement strict security measures to protect our website from unauthorized access or cyber attacks.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Third-Party Links</h2>
            <p className="mb-4 leading-relaxed text-gray-600">Our website may contain links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Changes to This Privacy Policy</h2>
            <p className="mb-4 leading-relaxed text-gray-600">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>

            <div className="bg-gray-100 p-4 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
              <p className="mb-2 text-gray-600">If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="text-gray-800">
                Email: <a href="mailto:privacy@boi-chequeprinting.com" className="text-blue-600 hover:underline">privacy@boi-chequeprinting.com</a><br />
                Phone: +91 XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}