'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/image-resizer/bmooadknflpjeaagpaaclbcgdpgglagn?hl=en-GB&authuser=0'

export const CTAButton = () => {
  const handleClick = () => {
    window.open(CHROME_STORE_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <Button 
      size="lg" 
      onClick={handleClick}
      className="group"
    >
      Add to Chrome 
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  )
}

