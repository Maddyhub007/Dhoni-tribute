"use client"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface ImageModalProps {
  images: Array<{
    src: string
    title: string
    description: string
  }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function ImageGalleryModal({ images, currentIndex, isOpen, onClose, onNavigate }: ImageModalProps) {
  if (!isOpen) return null

  const nextImage = () => {
    onNavigate((currentIndex + 1) % images.length)
  }

  const prevImage = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-6xl w-full">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
          onClick={prevImage}
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
          onClick={nextImage}
        >
          <ChevronRight className="w-8 h-8" />
        </Button>

        {/* Main image */}
        <div className="relative">
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].title}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />

          {/* Image info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
            <h3 className="text-2xl font-bold text-white mb-2">{images[currentIndex].title}</h3>
            <p className="text-blue-200">{images[currentIndex].description}</p>
          </div>
        </div>

        {/* Image counter */}
        <div className="text-center mt-4">
          <span className="text-white">
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      </div>
    </div>
  )
}
