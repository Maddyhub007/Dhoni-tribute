"use client"

import { useState } from "react"
import { useDhoni } from "@/contexts/dhoni-context"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const { setSelectedSection } = useDhoni()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "stats", label: "Stats" },
    { id: "timeline", label: "Journey" },
    { id: "gallery", label: "Gallery" },
    { id: "quotes", label: "Quotes" },
    { id: "legacy", label: "Legacy" },
  ]

  const scrollToSection = (sectionId: string) => {
    setSelectedSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-blue-900/95 backdrop-blur-sm border-b border-orange-500/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xl">
              7
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">MS Dhoni</h1>
              <p className="text-orange-300 text-sm">Captain Cool</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="text-white hover:text-orange-300 hover:bg-blue-800/50"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-orange-500/20">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="text-white hover:text-orange-300 hover:bg-blue-800/50 justify-start"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
