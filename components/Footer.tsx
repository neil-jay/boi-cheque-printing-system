import Link from 'next/link'
import { ShareButton } from '@/components/ShareButton'

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-700">
              Bank of India Cheque Printing System
            </h2>
            <p className="text-sm">
              Secure and efficient cheque printing for Bank of India account holders.
            </p>
            <ShareButton />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-blue-800 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-800 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-800 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Open Source</h3>
            <p className="text-sm">
              This project is developed and maintained by Rahul Sharma, a software engineer passionate about creating open-source tools for financial institutions.
            </p>
            <p className="text-sm">
              For more information or to contribute, visit the project's GitHub page.
            </p>
            <Link href="https://github.com/neil-jay/cheque-printing-system" className="text-blue-600 hover:underline text-sm">
              View on GitHub
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-200 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bank of India Cheque Printing System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

