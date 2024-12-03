import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bank of India Cheque Printing System',
  description: 'Privacy policy for the Bank of India Cheque Printing System. Learn how we protect your privacy while using minimal web analytics.',
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
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">No Personal Data Collection or Storage</h2>
          <p>We want to assure you that our Bank of India Cheque Printing System does not collect, store, or process any personal information. All data entered into our system for cheque printing is temporary and exists only for the duration of your current session.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">How We Handle Your Information</h2>
          <p>When you use our cheque printing service:</p>
          <ul>
            <li>All information you enter (such as payee name, amount, and date) is only displayed on your screen for the purpose of previewing and printing your cheque.</li>
            <li>This information is not transmitted to our servers or stored in any database.</li>
            <li>Once you close your browser window or navigate away from our site, all entered information is permanently deleted.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Web Analytics</h2>
          <p>We use Vercel Web Analytics to collect anonymous usage data. This helps us understand how our service is used and improve it. Vercel Web Analytics:</p>
          <ul>
            <li>Does not use cookies or any other form of local storage</li>
            <li>Does not collect any personal data</li>
            <li>Does not track users across different websites</li>
            <li>Complies with GDPR, CCPA, and other privacy regulations</li>
          </ul>
          <p>The data collected includes:</p>
          <ul>
            <li>Page views</li>
            <li>Visit duration</li>
            <li>Referrer information</li>
            <li>General location data (country/region level only)</li>
            <li>Device type and browser information</li>
          </ul>
          <p>This data is aggregated and cannot be used to identify individual users.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
          <p>While we do not collect or store any of your personal data, we still implement strict security measures to protect our website from unauthorized access or cyber attacks.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Links</h2>
          <p>Our website may contain links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>

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

