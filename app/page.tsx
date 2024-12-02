'use client'

import { useState, useRef } from 'react'
import { ChequeForm } from '@/components/ChequeForm'
import { Cheque } from '@/components/Cheque'
import { Button } from "@/components/ui/button"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import { Github, FileCode2 } from 'lucide-react'

export default function ChequePrinter() {
  const [chequeData, setChequeData] = useState<{
    payee: string
    amount: string
    date: string
  } | null>(null)

  const chequeRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    if (chequeRef.current) {
      const printContents = chequeRef.current.innerHTML
      const originalContents = document.body.innerHTML

      document.body.innerHTML = printContents
      window.print()
      document.body.innerHTML = originalContents
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold mb-2 text-center">Bank of India Cheque Printing System</h1>
            <p className="text-center text-blue-100">
              An open-source solution for easy and accurate cheque printing
            </p>
          </div>
          <div className="p-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-sm text-blue-700">
                This cheque printing system is an open-source project. 
                Users are free to use it for their needs and can update the code for their projects.
              </p>
              <div className="mt-2 flex justify-center space-x-4">
                <Link href="/help#open-source" className="inline-flex items-center text-blue-600 hover:underline">
                  <FileCode2 className="w-4 h-4 mr-1" />
                  Learn more
                </Link>
                <a href="https://github.com/example/boi-cheque-printing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline">
                  <Github className="w-4 h-4 mr-1" />
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Enter Bank of India Cheque Details</h2>
                <ChequeForm onSubmit={setChequeData} />
              </div>
              {chequeData && (
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Bank of India Cheque Preview</h2>
                  <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
                    <Cheque ref={chequeRef} {...chequeData} />
                  </div>
                  <Button onClick={handlePrint} className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Print Bank of India Cheque
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

