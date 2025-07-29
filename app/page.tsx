"use client"

import { DhoniProvider } from "@/contexts/dhoni-context"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Timeline from "@/components/timeline"
import Gallery from "@/components/gallery"
import Quotes from "@/components/quotes"
import Legacy from "@/components/legacy"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <DhoniProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
        <Header />
        <Hero />
        <Stats />
        <Timeline />
        <Gallery />
        <Quotes />
        <Legacy />
        <Footer />
      </div>
    </DhoniProvider>
  )
}
