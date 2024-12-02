'use client'

import { useState, useRef } from 'react'
import { ChequeForm } from '@/components/ChequeForm'
import { Cheque } from '@/components/Cheque'
import { Button } from "@/components/ui/button"
import Footer from '@/components/Footer'
import Header from '@/components/Header'

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Simplified Cheque Printing System</h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-center">Enter Cheque Details</h2>
            <ChequeForm onSubmit={setChequeData} />
          </div>
          {chequeData && (
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-2 text-center">Cheque Preview</h2>
              <div className="w-full max-w-3xl">
                <Cheque ref={chequeRef} {...chequeData} />
              </div>
              <Button onClick={handlePrint} className="mt-4">
                Print Cheque
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

