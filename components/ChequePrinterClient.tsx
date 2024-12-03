'use client'

import { useState, useRef } from 'react'
import { ChequeForm } from '@/components/ChequeForm'
import { Cheque } from '@/components/Cheque'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, Star } from 'lucide-react'
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
    <div className="space-y-6 max-w-2xl mx-auto">
      <Alert className="bg-yellow-50 border-yellow-200 text-yellow-800">
        <InfoIcon className="h-4 w-4 text-yellow-800" />
        <AlertTitle className="font-semibold">Important Note</AlertTitle>
        <AlertDescription className="text-sm">
          This system works exclusively with Bank of India cheques. Please ensure you are using a Bank of India cheque book.
        </AlertDescription>
      </Alert>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-[#003399]">Enter Bank of India Cheque Details</h2>
        <ChequeForm onSubmit={setChequeData} />
      </div>

      {chequeData && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#003399]">Bank of India Cheque Preview</h2>
          <div className="w-full">
            <Cheque ref={chequeRef} {...chequeData} />
          </div>
          <div className="mt-4 text-center">
            <Button onClick={handlePrint} className="bg-green-500 hover:bg-green-600 text-white">
              Print Bank of India Cheque
            </Button>
          </div>
        </div>
      )}

      <div className="bg-blue-50 p-6 rounded-lg text-center">
        <h2 className="text-lg font-semibold mb-2 text-[#003399]">Open Source Project</h2>
        <p className="text-sm text-gray-600 mb-4">
          This Bank of India Cheque Printing System is an open-source project. We welcome contributions from the community.
        </p>
        <div className="flex justify-center">
          <Button variant="outline" size="sm" asChild className="bg-blue-700 hover:bg-blue-800 text-white">
            <Link href="https://github.com/neil-jay/boi-cheque-printing-system">
              <Star className="w-4 h-4 mr-2" />
              Star on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}