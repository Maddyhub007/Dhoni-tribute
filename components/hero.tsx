"use client"

import { useEffect, useState } from "react"
import { useDhoni } from "@/contexts/dhoni-context"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Heart } from "lucide-react"
import Image from "next/image"
import HeroBackground from "./hero-background"

export default function Hero() {
  const { dhoniData } = useDhoni()
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % dhoniData.quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [dhoniData.quotes.length])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
      <HeroBackground />
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-orange-300">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">LEGEND • CAPTAIN • FINISHER</span>
                <Star className="w-5 h-5 fill-current" />
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                MS <span className="text-orange-400">DHONI</span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start space-x-4 text-2xl lg:text-3xl text-blue-200">
                <span>Captain Cool</span>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Mahi</span>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-orange-400 font-bold">#7</span>
              </div>
            </div>

            {/* Rotating Quotes */}
            <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-6 border border-orange-500">
              <p className="text-lg lg:text-xl text-white italic leading-relaxed">
                 &ldquo;{dhoniData.quotes[currentQuoteIndex]}&rdquo;
              </p>
              <div className="flex justify-center mt-4 space-x-2">
                {dhoniData.quotes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentQuoteIndex ? "bg-orange-400" : "bg-blue-400/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-800/40 backdrop-blur-sm rounded-lg p-4 text-center border border-orange-500">
                <Trophy className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-sm text-blue-200">World Cups</div>
              </div>
              <div className="bg-blue-800/40 backdrop-blur-sm rounded-lg p-4 text-center border border-orange-500">
                <Star className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">183</div>
                <div className="text-sm text-blue-200">Matches as Captain</div>
              </div>
              <div className="bg-blue-800/40 backdrop-blur-sm rounded-lg p-4 text-center border border-orange-500">
                <Heart className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">∞</div>
                <div className="text-sm text-blue-200">Love from Fans</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3"
                onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore His Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-blue-900 font-semibold px-8 py-3 bg-transparent"
                onClick={() => document.getElementById("legacy")?.scrollIntoView({ behavior: "smooth" })}
              >
                His Legacy
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto rounded-full">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-full blur-3xl"></div>

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-blue-800/50 to-orange-600/50 rounded-full p-8 border-4 border-orange-400/30">
                <Image
                  src="https://wallpaperaccess.com/full/1338260.jpg"
                  alt="MS Dhoni - Captain Cool"
                  width={400}
                  height={400}
                  className="rounded-full w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=400&width=400&text=MS+Dhoni+Portrait"
                  }}
                />

                {/* Jersey number overlay */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-2xl font-bold text-white">7</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
