import { forwardRef } from 'react'

interface ChequeProps {
  payee: string
  amount: string
  date: string
}

export const Cheque = forwardRef<HTMLDivElement, ChequeProps>(
  ({ payee, amount, date }, ref) => {
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(Number(amount))

    return (
      <div
        ref={ref}
        className="w-[600px] h-[250px] border-2 border-gray-300 p-4 bg-white text-black relative font-serif"
      >
        <div className="text-2xl font-bold mb-4">CHEQUE</div>
        <div className="mb-2">
          <span className="font-semibold">Date:</span> {date}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Pay to the order of:</span> {payee}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Amount:</span> {formattedAmount}
        </div>
        <div className="absolute bottom-4 right-4 font-bold">SIGNATURE</div>
        <div className="absolute bottom-4 left-4 text-sm">
          This is not a real cheque. For demonstration purposes only.
        </div>
      </div>
    )
  }
)

Cheque.displayName = 'Cheque'
