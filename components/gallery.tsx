"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Trophy, Zap, Heart, Crown, Star } from "lucide-react"
import Image from "next/image"
import ImageGalleryModal from "./image-gallery-modal"

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const galleryImages = [
    {
      src: "https://www.mykhel.com/img/2020/04/ms-dhoni-2011-wc-final-six-1585821500.jpg",
      title: "The Winning Six - 2011 World Cup Final",
      description: "The moment that made a billion hearts skip a beat - Dhoni's iconic six at Wankhede Stadium",
      category: "World Cup",
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      src: "http://www.espncricinfo.com/db/PICTURES/CMS/150200/150264.jpg",
      title: "The Helicopter Shot",
      description: "Signature shot that became his trademark - power, precision, and style",
      category: "Signature",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      src: "https://im.indiatimes.in/facebook/2017/Nov/fb_1510978431_1510978438.jpg",
      title: "Captain Cool in Action",
      description: "Leading from the front with composure under pressure",
      category: "Leadership",
      icon: <Crown className="w-4 h-4" />,
    },
    {
      src: "https://www.probatsman.com/wp-content/uploads/2023/05/Chennai-Super-Kings.jpg",
      title: "CSK Championship Glory",
      description: "Celebrating another IPL title with Chennai Super Kings family",
      category: "IPL",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      src: "https://images.news18.com/ibnlive/uploads/2022/09/inia-t20-world-cup-win.jpg?impolicy=website&width=0&height=0",
      title: "T20 World Cup Victory 2007",
      description: "First major trophy as captain - the beginning of a golden era",
      category: "World Cup",
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      src: "https://firstsportz.com/wp-content/uploads/2023/05/ms-dhoni-stumping-shubman-gill-1.jpg",
      title: "Lightning Fast Stumping",
      description: "Quick hands behind the wickets - fastest stumping in cricket history",
      category: "Wicket Keeping",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      src: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/06/23/Pictures/_3a2c4238-b528-11ea-b3b3-7b919605787e.jpg",
      title: "Champions Trophy 2013",
      description: "Completing the trophy cabinet with Champions Trophy victory",
      category: "World Cup",
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      src: "https://www.insidesport.in/wp-content/uploads/2019/02/JSCA-Stadium-names.jpg",
      title: "Humble Beginnings",
      description: "From the streets of Ranchi to the pinnacle of world cricket",
      category: "Journey",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      src: "https://www.thestatesman.com/wp-content/uploads/2020/01/MS-Dhoni-3.jpg",
      title: "Farewell Captain",
      description: "Emotional retirement - end of an era that defined Indian cricket",
      category: "Legacy",
      icon: <Star className="w-4 h-4" />,
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "World Cup":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
      case "IPL":
        return "bg-purple-500/20 text-purple-300 border-purple-400/30"
      case "Leadership":
        return "bg-blue-500/20 text-blue-300 border-blue-400/30"
      case "Signature":
        return "bg-orange-500/20 text-orange-300 border-orange-400/30"
      default:
        return "bg-green-500/20 text-green-300 border-green-400/30"
    }
  }

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Iconic <span className="text-orange-400">Moments</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Relive the moments that defined a career and inspired millions
          </p>
        </div>

        {/* Main Gallery Display */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <Card className="bg-blue-800/40 backdrop-blur-sm border-orange-500/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <Image
                  src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={galleryImages[currentImageIndex].title}
                  width={800}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "/placeholder.svg?height=500&width=800&text=" +
                      encodeURIComponent(galleryImages[currentImageIndex].title)
                  }}
                />

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={getCategoryColor(galleryImages[currentImageIndex].category)}>
                      <span className="flex items-center space-x-1">
                        {galleryImages[currentImageIndex].icon}
                        <span>{galleryImages[currentImageIndex].category}</span>
                      </span>
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{galleryImages[currentImageIndex].title}</h3>
                  <p className="text-blue-200">{galleryImages[currentImageIndex].description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentImageIndex
                  ? "ring-2 ring-orange-400 scale-105"
                  : "hover:scale-105 opacity-70 hover:opacity-100"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                width={120}
                height={80}
                className="w-24 h-16 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=80&width=120&text=Thumbnail"
                }}
              />
              {index === currentImageIndex && <div className="absolute inset-0 bg-orange-400/20"></div>}
            </button>
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-6">
          <span className="text-blue-200">
            {currentImageIndex + 1} of {galleryImages.length}
          </span>
        </div>
      </div>

      {/* Modal */}
      <ImageGalleryModal
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </section>
  )
}
