import { forwardRef } from 'react'

interface ChequeProps {
  payee: string
  amount: string
  date: string
}

export const Cheque = forwardRef<HTMLDivElement, ChequeProps>(
  ({ payee, amount, date }, ref) => {
    const formattedAmount = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(Number(amount)).replace('INR', '₹')

    const amountInWords = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(Number(amount))
      .replace('INR', '')
      .trim()
      .replace(/,/g, '')
      .replace(/\d/g, '')
      .replace(/\./g, '')
      + "Only****"

    const formatDate = (dateString: string) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).replace(/\//g, '')
    }

    return (
      <div
        ref={ref}
        className="w-[800px] h-[350px] border-2 border-gray-300 p-6 bg-white text-black relative font-serif"
      >
        {/* Date Section */}
        <div className="absolute top-4 right-4 border border-gray-300 p-1">
          <div className="grid grid-cols-8 gap-1 text-center">
            <div>D</div>
            <div>D</div>
            <div>M</div>
            <div>M</div>
            <div>Y</div>
            <div>Y</div>
            <div>Y</div>
            <div>Y</div>
            {formatDate(date).split('').map((char, i) => (
              <div key={i} className="border border-gray-300 w-6 h-6">
                {char}
              </div>
            ))}
          </div>
        </div>

        {/* Payee Name Section */}
        <div className="mb-4 mt-16">
          <div className="flex-1 border-b-2 border-gray-300">
            {payee}
          </div>
        </div>

        {/* Amount in Words Section */}
        <div className="mb-4">
          <div className="flex-1 border-b-2 border-gray-300">
            {amountInWords}
          </div>
        </div>

        {/* Amount in Numbers */}
        <div className="absolute right-8 top-32 border-2 border-gray-300 px-4 py-2">
          <span className="mr-2">₹</span>
          {formattedAmount}
        </div>
      </div>
    )
  }
)

Cheque.displayName = 'Cheque'

