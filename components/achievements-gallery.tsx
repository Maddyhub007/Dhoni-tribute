"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AchievementsGallery() {
  const majorAchievements = [
    {
      image: "https://www.teahub.io/photos/full/31-311359_m-s-dhoni-indian-cricketer-handsome-looks-hd.jpg",
      title: "T20 World Cup Winner",
      year: "2007",
      description: "First T20 World Cup triumph under young captain",
      badge: "Young Captain",
    },
    {
      image: "https://www.mykhel.com/img/2020/04/ms-dhoni-2011-wc-final-six-1585821500.jpg",
      title: "2011 World Cup Winner",
      year: "2011",
      description: "The winning six that ended India's 28-year wait",
      badge: "Finisher",
    },
    
    {
      image: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/06/23/Pictures/_3a2c4238-b528-11ea-b3b3-7b919605787e.jpg",
      title: "2013 Champions Trophy Winner",
      year: "2013",
      description: "Completed the trophy treble in England",
      badge: "OG Captain",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {majorAchievements.map((achievement, index) => (
        <Card
          key={`${achievement.image}-${index}`}
          className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 backdrop-blur-sm border-orange-500 overflow-hidden group hover:scale-105 transition-transform duration-300"
        >
          <div className=" relative h-64">
            <Image
              src={achievement.image || "/placeholder.svg"}
              alt={achievement.title}
              fill
              className="object-fit group-hover:scale-110 transition-transform duration-300 w-full h-full"
              onError={(e) => {
                e.currentTarget.src =
                  "/placeholder.svg?height=200&width=300&text=" + encodeURIComponent(achievement.title)
              }}
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-yellow-500/90 text-yellow-900 font-bold">{achievement.badge}</Badge>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
              <Badge variant="outline" className="border-orange-400 text-orange-300">
                {achievement.year}
              </Badge>
            </div>
            <p className="text-blue-200 text-sm">{achievement.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
