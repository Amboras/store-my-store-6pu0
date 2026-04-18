'use client'

import { useState } from 'react'
import { X, Coffee, Truck, Leaf } from 'lucide-react'

const messages = [
  { icon: Truck, text: 'Complimentary shipping on orders over $45' },
  { icon: Coffee, text: 'Freshly roasted — shipped within 48 hours of roast' },
  { icon: Leaf, text: 'Single-origin, direct-trade, 100% arabica' },
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-espresso text-[hsl(var(--brand-cream))]">
      <div className="container-custom flex items-center justify-center py-2.5 text-xs tracking-[0.15em] uppercase overflow-hidden">
        <div className="hidden md:flex items-center gap-10">
          {messages.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon className="h-3.5 w-3.5 text-copper" strokeWidth={1.75} />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Truck className="h-3.5 w-3.5 text-copper" strokeWidth={1.75} />
          <span>Free shipping over $45</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
