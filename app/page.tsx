'use client'

import { useState, useRef } from 'react'
import { ChequeForm } from '@/components/ChequeForm'
import { Cheque } from '@/components/Cheque'
import { Button } from "@/components/ui/button"

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cheque Printing System</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Enter Cheque Details</h2>
          <ChequeForm onSubmit={setChequeData} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Cheque Preview</h2>
          {chequeData && (
            <>
              <Cheque ref={chequeRef} {...chequeData} />
              <Button onClick={handlePrint} className="mt-4">
                Print Cheque
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

