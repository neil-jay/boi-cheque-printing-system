import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ChequeData {
  payee: string
  amount: string
  date: string
}

interface ChequeFormProps {
  onSubmit: (data: ChequeData) => void
}

export function ChequeForm({ onSubmit }: ChequeFormProps) {
  const [chequeData, setChequeData] = useState<ChequeData>({
    payee: '',
    amount: '',
    date: new Date().toISOString().split('T')[0]
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChequeData({ ...chequeData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(chequeData)
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <Label htmlFor="payee">Payee Name</Label>
          <Input
            id="payee"
            name="payee"
            value={chequeData.payee}
            onChange={handleChange}
            required
            className="max-w-md"
          />
        </div>
        <div>
          <Label htmlFor="amount">Amount (₹)</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            value={chequeData.amount}
            onChange={handleChange}
            required
            className="max-w-md"
          />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={chequeData.date}
            onChange={handleChange}
            required
            className="max-w-md"
          />
        </div>
        <Button type="submit">Generate Cheque</Button>
      </form>
    </div>
  )
}
