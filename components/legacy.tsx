"use client"

import { useDhoni } from "@/contexts/dhoni-context"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Heart, Star, Award, Crown } from "lucide-react"
import AchievementsGallery from "./achievements-gallery"

export default function Legacy() {
  const { dhoniData } = useDhoni()

  const legacyStats = [
    {
      icon: <Trophy className="w-8 h-8 text-orange-400" />,
      title: "Trophies Won",
      value: "15+",
      description: "Major international and domestic titles",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: "Fans Worldwide",
      value: "1B+",
      description: "Hearts touched across the globe",
    },
    {
      icon: <Star className="w-8 h-8 text-orange-400" />,
      title: "Records Held",
      value: "50+",
      description: "Cricket records that may never be broken",
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-400" />,
      title: "Years of Impact",
      value: "20+",
      description: "Inspiring generations of cricketers",
    },
  ]

  const achievements = [
    "Only captain to win all three ICC trophies",
    "Most successful Indian Test captain",
    "Fastest stumping in cricket history (0.08 seconds)",
    "Most dismissals by an Indian wicket-keeper",
    "Only wicket-keeper to score 10,000+ ODI runs",
    "Most matches as captain across all formats",
    "Highest individual score by a wicket-keeper in Tests",
    "Most sixes in ODI cricket by an Indian",
    "Only player to captain in 200+ ODIs",
    "Most wins as captain in IPL history",
  ]

  return (
    <section id="legacy" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Eternal <span className="text-orange-400">Legacy</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            More than just numbers - a legacy that transcends cricket and inspires millions
          </p>
        </div>

        {/* Legacy Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {legacyStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-blue-800/60 to-blue-900/60 backdrop-blur-sm border-orange-500 text-center"
            >
              <CardContent className="p-8">
                <div className="mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-orange-300 mb-2">{stat.title}</div>
                <div className="text-sm text-blue-200">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Major Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Hall of Fame <span className="text-orange-400">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {dhoniData.achievements.map((achievement, index) => (
              <Card key={index} className="bg-blue-800/40 backdrop-blur-sm border-orange-500">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-white">{achievement}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Records Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Unbreakable <span className="text-orange-400">Records</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((record, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-orange-600/20 to-blue-600/20 backdrop-blur-sm border-orange-500"
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-white">{record}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* World Cups Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            World Cup <span className="text-orange-400">Glory</span>
          </h3>
          <AchievementsGallery />
          <div className="grid md:grid-cols-3 gap-6">
            {dhoniData.captaincy.worldCups.map((cup, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 backdrop-blur-sm border-orange-500"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-center">
                    <Crown className="w-12 h-12 text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <h4 className="text-xl font-bold text-white mb-2">{cup}</h4>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">Champion</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Tribute */}
        <Card className="bg-gradient-to-br from-blue-800/60 to-orange-600/30 backdrop-blur-sm border-orange-500">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Thank You, <span className="text-orange-400">Captain Cool</span>
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-8">
              From a small town in Ranchi to the pinnacle of world cricket, MS Dhoni&apos;s journey is a testament to
              hard work, dedication, and unwavering belief. He didn&apos;t just win matches; he won hearts. He
              didn&apos;t just break records; he broke barriers. His legacy will inspire generations of cricketers and
              fans who dare to dream big.
            </p>
            <div className="flex items-center justify-center space-x-4 text-2xl">
              <span className="text-orange-400">🏏</span>
              <span className="text-white font-bold">Forever Our Captain</span>
              <span className="text-orange-400">👑</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
