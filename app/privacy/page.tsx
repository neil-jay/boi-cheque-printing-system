import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bank of India Cheque Printing System',
  description: 'Privacy policy for the Bank of India Cheque Printing System. Learn how we protect your privacy by not collecting or storing any personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <div className="prose max-w-3xl mx-auto">
          <p>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p>At Bank of India Cheque Printing System, we are committed to protecting your privacy. This Privacy Policy outlines how we handle your data when you use our online cheque printing service.</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">No Data Collection or Storage</h2>
          <p>We want to assure you that our Bank of India Cheque Printing System does not collect, store, or process any personal information. All data entered into our system is temporary and exists only for the duration of your current session.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">How We Handle Your Information</h2>
          <p>When you use our cheque printing service:</p>
          <ul>
            <li>All information you enter (such as payee name, amount, and date) is only displayed on your screen for the purpose of previewing and printing your cheque.</li>
            <li>This information is not transmitted to our servers or stored in any database.</li>
            <li>Once you close your browser window or navigate away from our site, all entered information is permanently deleted.</li>
            <li>We do not use cookies or any other tracking technologies to collect information about your visit.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
          <p>Since we do not collect or store any of your data, there is no risk of your personal information being compromised through our system. However, we still implement strict security measures to protect our website from unauthorized access or cyber attacks.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Links</h2>
          <p>Our website may contain links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Bank of India Cheque Printing System<br />
          Email: privacy@boi-chequeprinting.com<br />
          Phone: +91 XXXXXXXXXX</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
