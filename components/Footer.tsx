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
              This project is developed and maintained by neiljay.
              For more information or to contribute, visit the project&apos;s GitHub page:
            </p>
            <Link href="https://github.com/rahulsharma/boi-cheque-printing" className="text-blue-600 hover:underline text-sm inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
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