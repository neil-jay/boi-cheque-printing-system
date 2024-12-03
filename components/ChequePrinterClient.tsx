'use client'

import { useState, useRef } from 'react'
import { ChequeForm } from '@/components/ChequeForm'
import { Cheque } from '@/components/Cheque'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, Github } from 'lucide-react'
import Link from 'next/link'

export default function ChequePrinterClient() {
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
    <div className="space-y-8">
      <div>
        <Alert className="mb-6 bg-yellow-100 border-yellow-400 text-yellow-800">
          <InfoIcon className="h-4 w-4 text-yellow-800" />
          <AlertTitle>Important Note</AlertTitle>
          <AlertDescription>
            This system works exclusively with Bank of India cheques. Please ensure you are using a Bank of India cheque book.
          </AlertDescription>
        </Alert>
        <h2 className="text-xl font-semibold mb-2 text-center">Enter Bank of India Cheque Details</h2>
        <ChequeForm onSubmit={setChequeData} />
      </div>
      {chequeData && (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-center">Bank of India Cheque Preview</h2>
          <div className="w-full max-w-3xl">
            <Cheque ref={chequeRef} {...chequeData} />
          </div>
          <Button onClick={handlePrint} className="mt-4 bg-green-500 hover:bg-green-600 text-white">
            Print Bank of India Cheque
          </Button>
        </div>
      )}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          This is an open-source project. Contribute on GitHub:
        </p>
        <Link href="https://github.com/yourusername/boi-cheque-printing" className="inline-flex items-center text-blue-600 hover:underline mt-2">
          <Github className="w-4 h-4 mr-2" />
          BOI Cheque Printing System
        </Link>
      </div>
    </div>
  )
}