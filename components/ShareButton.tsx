'use client'

import { Button } from "@/components/ui/button"
import { Share2 } from 'lucide-react'
import { useState } from 'react'

export function ShareButton() {
  const [shared, setShared] = useState(false)

  const handleShare = async () => {
    const shareData = {
      title: 'Bank of India Cheque Printing System',
      text: 'Check out this online Bank of India Cheque Printing System!',
      url: window.location.href
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        setShared(true)
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setShared(true)
      }
    } catch (err) {
      console.error('Error sharing:', err)
    }

    setTimeout(() => setShared(false), 2000)
  }

  return (
    <Button onClick={handleShare} className="bg-blue-700 hover:bg-blue-800 text-white">
      <Share2 className="w-4 h-4 mr-2" />
      {shared ? 'Shared!' : 'Share'}
    </Button>
  )
}