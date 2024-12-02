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
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="payee" className="block text-sm font-medium text-gray-700">Payee Name</Label>
          <Input
            id="payee"
            name="payee"
            value={chequeData.payee}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <Label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (₹)</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            value={chequeData.amount}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</Label>
        <Input
          id="date"
          name="date"
          type="date"
          value={chequeData.date}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div className="flex justify-center">
        <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1">
          Generate Cheque
        </Button>
      </div>
    </form>
  )
}

