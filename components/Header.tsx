import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Cheque Printing System</span>
              <svg className="h-10 w-auto text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 9h16v2H4V9zm0 4h16v2H4v-2z" />
              </svg>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            About
          </Link>
          <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

