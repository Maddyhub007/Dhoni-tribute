"use client"

import { useState, useEffect } from "react"
import { useDhoni } from "@/contexts/dhoni-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, RefreshCw, Heart } from "lucide-react"

export default function Quotes() {
  const { dhoniData } = useDhoni()
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const additionalQuotes = [
    "I have three dogs at home. Even after losing a series or winning a series, they treat me the same way.",
    "Self-belief and hard work will always earn you success.",
    "I believe in giving more than 100% on the field, and I don't really worry about the result if there's great commitment on the field.",
    "The wicket-keeper is like a goalkeeper in football.",
    "I like to be involved in the game. I like to be in the thick of action.",
    "You don't play for the crowd, you play for the country.",
    "I have always believed that process is more important than results.",
    "Gut feeling is all about the experiences that you have had in your life.",
  ]

  const allQuotes = [...dhoniData.quotes, ...additionalQuotes]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % allQuotes.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [allQuotes.length])

  const nextQuote = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % allQuotes.length)
      setIsAnimating(false)
    }, 300)
  }

  const getRandomQuote = () => {
    setIsAnimating(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * allQuotes.length)
      setCurrentQuote(randomIndex)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section id="quotes" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Words of <span className="text-orange-400">Wisdom</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Insights from the mind of a champion - quotes that inspire and motivate
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Quote Display */}
          <Card className="bg-gradient-to-br from-blue-800/60 to-blue-900/60 backdrop-blur-sm border-orange-500 mb-8">
            <CardContent className="p-12 text-center">
              <Quote className="w-16 h-16 text-orange-400 mx-auto mb-6 opacity-50" />

              <div
                className={`transition-all duration-300 ${isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"}`}
              >
                <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-6 italic">
                  "{allQuotes[currentQuote]}"
                </blockquote>

                <div className="flex items-center justify-center space-x-2">
                  <div className="w-12 h-0.5 bg-orange-400"></div>
                  <cite className="text-orange-400 font-semibold text-lg not-italic">MS Dhoni</cite>
                  <div className="w-12 h-0.5 bg-orange-400"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quote Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <Button
              onClick={nextQuote}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3"
            >
              Next Quote
            </Button>

            <Button
              onClick={getRandomQuote}
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-blue-900 font-semibold px-6 py-3 bg-transparent"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Random Quote
            </Button>
          </div>

          {/* Quote Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {allQuotes.slice(0, 8).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote % 8 ? "bg-orange-400 scale-125" : "bg-blue-400/30 hover:bg-blue-400/50"
                }`}
                onClick={() => setCurrentQuote(index)}
              />
            ))}
          </div>

          {/* Quote Categories */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-blue-800/40 backdrop-blur-sm border-orange-500">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">On Leadership</h3>
                <p className="text-blue-200 text-sm">
                  Wisdom on leading teams and making tough decisions under pressure
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-800/40 backdrop-blur-sm border-orange-500">
              <CardContent className="p-6 text-center">
                <Quote className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">On Cricket</h3>
                <p className="text-blue-200 text-sm">
                  Insights about the game, strategy, and the mental aspects of cricket
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-800/40 backdrop-blur-sm border-orange-500">
              <CardContent className="p-6 text-center">
                <RefreshCw className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">On Life</h3>
                <p className="text-blue-200 text-sm">
                  Life lessons and philosophy that extend beyond the cricket field
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
