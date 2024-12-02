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

    const numberToWords = (num: number) => {
      const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
      const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

      if (num === 0) return 'Zero';

      const convertLessThanThousand = (n: number): string => {
        if (n < 10) return units[n];
        if (n < 20) return teens[n - 10];
        const ten = Math.floor(n / 10);
        const one = n % 10;
        return (ten > 0 ? tens[ten] + (one > 0 ? '-' + units[one] : '') : units[one]);
      }

      const convert = (n: number): string => {
        if (n < 1000) return convertLessThanThousand(n);
        const thousands = Math.floor(n / 1000);
        const remainder = n % 1000;
        let result = convert(thousands) + ' Thousand';
        if (remainder > 0) result += ' ' + convertLessThanThousand(remainder);
        return result;
      }

      return convert(Math.floor(num)) + ' Rupees Only';
    }

    const amountInWords = numberToWords(Number(amount));

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
          <div className="grid grid-cols-8 gap-1">
            {formatDate(date).split('').map((char, i) => (
              <div key={i} className="border border-gray-300 w-6 h-6 flex items-center justify-center">
                {char}
              </div>
            ))}
          </div>
        </div>

        {/* Payee Name Section */}
        <div className="mb-4 mt-16">
          <div className="flex-1 border-b-2 border-gray-300 uppercase">
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
          {formattedAmount}
        </div>
      </div>
    )
  }
)

Cheque.displayName = 'Cheque'
