"use client"

import { useState } from "react"
import { useDhoni } from "@/contexts/dhoni-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Target, Award, Crown } from "lucide-react"

export default function Stats() {
  const { dhoniData } = useDhoni()
  const [activeFormat, setActiveFormat] = useState<"odis" | "tests" | "t20is" | "ipl">("odis")

  const formatLabels = {
    odis: "ODIs",
    tests: "Tests",
    t20is: "T20Is",
    ipl: "IPL",
  }

  const formatColors = {
    odis: "from-blue-600 to-blue-800",
    tests: "from-red-600 to-red-800",
    t20is: "from-green-600 to-green-800",
    ipl: "from-purple-600 to-purple-800",
  }

  return (
    <section id="stats" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Career <span className="text-orange-400">Statistics</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Numbers that tell the story of greatness - from international cricket to IPL dominance
          </p>
        </div>

        {/* Format Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(formatLabels).map(([format, label]) => (
            <Button
              key={format}
              variant={activeFormat === format ? "default" : "outline"}
              className={`px-6 py-3 font-semibold transition-all ${
                activeFormat === format
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-blue-900"
              }`}
              onClick={() => setActiveFormat(format as "odis" | "tests" | "t20is" | "ipl")}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <Card className={`bg-gradient-to-br ${formatColors[activeFormat]} border-orange-500 text-white`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-100">Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{dhoniData.careerStats[activeFormat].matches}</div>
            </CardContent>
          </Card>

          <Card className={`bg-gradient-to-br ${formatColors[activeFormat]} border-orange-500 text-white`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-100">Runs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{dhoniData.careerStats[activeFormat].runs.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className={`bg-gradient-to-br ${formatColors[activeFormat]} border-orange-500 text-white`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-100">Average</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{dhoniData.careerStats[activeFormat].average}</div>
            </CardContent>
          </Card>

          <Card className={`bg-gradient-to-br ${formatColors[activeFormat]} border-orange-500 text-white`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-100">Centuries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{dhoniData.careerStats[activeFormat].centuries}</div>
            </CardContent>
          </Card>

          <Card className={`bg-gradient-to-br ${formatColors[activeFormat]} border-orange-500 text-white`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-100">Fifties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{dhoniData.careerStats[activeFormat].fifties}</div>
            </CardContent>
          </Card>
        </div>

        {/* Captaincy Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-blue-800/40 backdrop-blur-sm border-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-orange-400" />
                <CardTitle className="text-white">ODI Wins</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-400">{dhoniData.captaincy.odiWins}</div>
              <p className="text-sm text-blue-200">as Captain</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-800/40 backdrop-blur-sm border-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-orange-400" />
                <CardTitle className="text-white">Test Wins</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-400">{dhoniData.captaincy.testWins}</div>
              <p className="text-sm text-blue-200">as Captain</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-800/40 backdrop-blur-sm border-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-orange-400" />
                <CardTitle className="text-white">T20I Wins</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-400">{dhoniData.captaincy.t20Wins}</div>
              <p className="text-sm text-blue-200">as Captain</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-800/40 backdrop-blur-sm border-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-400" />
                <CardTitle className="text-white">World Cups</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-400">3</div>
              <p className="text-sm text-blue-200">Major Trophies</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
