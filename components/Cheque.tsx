import { forwardRef } from 'react'

interface ChequeProps {
  payee: string
  amount: string
  date: string
  payeePosition: string
  amountWordsPosition: string
  amountFiguresPosition: string
  datePosition: string
}

export const Cheque = forwardRef<HTMLDivElement, ChequeProps>(
  ({ payee, amount, date, payeePosition, amountWordsPosition, amountFiguresPosition, datePosition }, ref) => {
    const formattedAmount = new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Number(amount))

    const numberToWords = (num: number): string => {
      const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
      
      const convertLessThanOneThousand = (n: number): string => {
        if (n < 20) return units[n];
        const ten = Math.floor(n / 10);
        const one = n % 10;
        return tens[ten] + (one ? '-' + units[one] : '');
      }

      if (num === 0) return 'Zero';

      let words = '';
      
      if (num >= 100000) {
        words += convertLessThanOneThousand(Math.floor(num / 100000)) + ' Lakh ';
        num %= 100000;
      }

      if (num >= 1000) {
        words += convertLessThanOneThousand(Math.floor(num / 1000)) + ' Thousand ';
        num %= 1000;
      }

      if (num >= 100) {
        words += convertLessThanOneThousand(Math.floor(num / 100)) + ' Hundred ';
        num %= 100;
      }

      if (num > 0) {
        words += convertLessThanOneThousand(num);
      }

      return words.trim() + ' Rupees Only';
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
        className="w-full max-w-3xl h-auto aspect-[16/7] border-2 border-gray-300 p-6 bg-white text-black relative"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: '16px',
          lineHeight: '1.5'
        }}
      >
        {/* Date Section */}
        <div className={datePosition}>
          <div className="grid grid-cols-8 gap-1">
            {formatDate(date).split('').map((char, i) => (
              <div key={i} className="w-4 h-4 flex items-center justify-center text-xs">
                {char}
              </div>
            ))}
          </div>
        </div>

        {/* Payee Name Section */}
        <div className={payeePosition}>
          <div className="flex-1 uppercase">
            {payee}
          </div>
        </div>

        {/* Amount in Words Section */}
        <div className={amountWordsPosition}>
          <div className="flex-1">
            {amountInWords}
          </div>
        </div>

        {/* Amount in Numbers */}
        <div className={amountFiguresPosition}>
          {formattedAmount}
        </div>
      </div>
    )
  }
)

Cheque.displayName = 'Cheque'