"use client"

import { useState } from "react"
import { useDhoni } from "@/contexts/dhoni-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Star } from "lucide-react"

export default function Timeline() {
  const { dhoniData } = useDhoni()
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  const getEventIcon = (event: string) => {
    if (event.toLowerCase().includes("world cup") || event.toLowerCase().includes("trophy")) {
      return <Trophy className="w-5 h-5 text-orange-400" />
    }
    if (event.toLowerCase().includes("captain")) {
      return <Star className="w-5 h-5 text-orange-400" />
    }
    return <Calendar className="w-5 h-5 text-orange-400" />
  }

  const getEventColor = (event: string) => {
    if (event.toLowerCase().includes("world cup") || event.toLowerCase().includes("trophy")) {
      return "from-yellow-600 to-orange-600"
    }
    if (event.toLowerCase().includes("captain")) {
      return "from-purple-600 to-blue-600"
    }
    if (event.toLowerCase().includes("debut")) {
      return "from-green-600 to-blue-600"
    }
    return "from-blue-600 to-blue-800"
  }

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Journey of a <span className="text-orange-400">Legend</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            From a small-town boy to India's most successful captain - every milestone that shaped the legend
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-blue-600 rounded-full"></div>

          <div className="space-y-12">
            {dhoniData.timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <Card
                    className={`bg-gradient-to-br ${getEventColor(item.event)} border-orange-500/20 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedYear === item.year ? "ring-2 ring-orange-400" : ""
                    }`}
                    onClick={() => setSelectedYear(selectedYear === item.year ? null : item.year)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        {getEventIcon(item.event)}
                        <Badge variant="secondary" className="bg-orange-400/20 text-orange-300 border-orange-400/30">
                          {item.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.event}</h3>
                      <p className="text-blue-100 leading-relaxed">{item.description}</p>

                      {selectedYear === item.year && (
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <p className="text-sm text-blue-200">Click to collapse details</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-orange-400 rounded-full border-4 border-blue-900 shadow-lg"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-orange-400 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-blue-800/40 backdrop-blur-sm border-orange-500/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Career Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">16</div>
                  <div className="text-blue-200">Years of International Cricket</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">332</div>
                  <div className="text-blue-200">Matches as Captain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">3</div>
                  <div className="text-blue-200">ICC Trophies Won</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
