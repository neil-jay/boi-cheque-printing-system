import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ChequeData {
  payee: string
  amount: string
  date: string
  payeePosition: string
  amountWordsPosition: string
  amountFiguresPosition: string
  datePosition: string
}

interface ChequeFormProps {
  onSubmit: (data: ChequeData) => void
}

export function ChequeForm({ onSubmit }: ChequeFormProps) {
  const [chequeData, setChequeData] = useState<ChequeData>({
    payee: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    payeePosition: 'mb-4 mt-[4.6rem] ml-24',
    amountWordsPosition: 'mb-0 mt-[-0.7rem] ml-36',
    amountFiguresPosition: 'absolute right-14 top-32 px-4 py-2',
    datePosition: 'absolute top-8 right-[-0.4rem] p-1'
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
        <div>
          <Label htmlFor="payeePosition">Payee Position (CSS classes)</Label>
          <Input
            id="payeePosition"
            name="payeePosition"
            value={chequeData.payeePosition}
            onChange={handleChange}
            required
            className="max-w-md"
          />
        </div>
        <div>
          <Label htmlFor="amountWordsPosition">Amount in Words Position (CSS classes)</Label>
          <Input
            id="amountWordsPosition"
            name="amountWordsPosition"
            value={chequeData.amountWordsPosition}
            onChange={handleChange}
            required
            className="max-w-md"
          />
        </div>
        <div>
          <Label htmlFor="amountFiguresPosition">Amount in Figures Position (CSS classes)</Label>
          <Input
            id="amountFiguresPosition"
            name="amountFiguresPosition"
            value={chequeData.amountFiguresPosition}
            onChange={handleChange}
            required
            className="max-w-md"
          />
        </div>
        <div>
          <Label htmlFor="datePosition">Date Position (CSS classes)</Label>
          <Input
            id="datePosition"
            name="datePosition"
            value={chequeData.datePosition}
            onChange={handleChange}
            required
            className="max-w-md"
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white">Generate Cheque</Button>
        </div>
      </form>
    </div>
  )
}