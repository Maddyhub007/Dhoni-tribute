"use client"

import Image from "next/image"

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background stadium image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://tse4.mm.bing.net/th/id/OIP.CsKQMT2BOCWU8Q9W1Q-x3AHaE8?pid=Api&P=0&h=180"
          alt="Cricket Stadium"
          fill
          className="object-cover"
          priority
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg?height=800&width=1200&text=Cricket+Stadium"
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-orange-600/90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
    </div>
  )
}
