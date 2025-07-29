"use client"

import { useDhoni } from "@/contexts/dhoni-context"
import { Heart, Star, Trophy } from "lucide-react"

export default function Footer() {
  const { dhoniData } = useDhoni()

  return (
    <footer className="bg-blue-900/80 backdrop-blur-sm border-t border-orange-500/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xl">
                7
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MS Dhoni</h3>
                <p className="text-orange-300 text-sm">Captain Cool</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              A tribute to the greatest captain and finisher cricket has ever seen. Thank you for the memories, Mahi! 🏏
            </p>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Facts</h4>
            <div className="space-y-2 text-sm text-blue-200">
              <div>Born: {dhoniData.personalInfo.birthDate}</div>
              <div>Birthplace: {dhoniData.personalInfo.birthPlace}</div>
              <div>Jersey Number: #{dhoniData.personalInfo.jerseyNumber}</div>
              <div>Role: {dhoniData.personalInfo.role}</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Major Achievements</h4>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Trophy className="w-4 h-4 text-orange-400" />
                <span>3 ICC Trophies</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Star className="w-4 h-4 text-orange-400" />
                <span>Most Successful Indian Captain</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Heart className="w-4 h-4 text-orange-400" />
                <span>Billion Hearts Won</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-500/20 pt-8 text-center">
          <p className="text-blue-200 text-sm mb-4">
            "I have always believed that process is more important than results." - MS Dhoni
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-blue-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>by a die-hard Dhoni fan</span>
          </div>
          <p className="text-xs text-blue-400 mt-2">© 2025 MS Dhoni Tribute. This is a fan-made tribute website.</p>
        </div>
      </div>
    </footer>
  )
}
