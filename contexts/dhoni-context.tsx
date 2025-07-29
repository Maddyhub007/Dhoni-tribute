"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface DhoniData {
  personalInfo: {
    fullName: string
    nickname: string
    birthDate: string
    birthPlace: string
    jerseyNumber: number
    role: string
  }
  careerStats: {
    odis: { matches: number; runs: number; average: number; centuries: number; fifties: number }
    tests: { matches: number; runs: number; average: number; centuries: number; fifties: number }
    t20is: { matches: number; runs: number; average: number; centuries: number; fifties: number }
    ipl: { matches: number; runs: number; average: number; centuries: number; fifties: number }
  }
  achievements: string[]
  timeline: Array<{ year: number; event: string; description: string }>
  quotes: string[]
  captaincy: {
    odiWins: number
    testWins: number
    t20Wins: number
    worldCups: string[]
  }
}

interface DhoniContextType {
  dhoniData: DhoniData
  selectedSection: string
  setSelectedSection: (section: string) => void
  isLoading: boolean
}

const DhoniContext = createContext<DhoniContextType | undefined>(undefined)

export const useDhoni = () => {
  const context = useContext(DhoniContext)
  if (!context) {
    throw new Error("useDhoni must be used within a DhoniProvider")
  }
  return context
}

export const DhoniProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState("hero")
  const [isLoading, setIsLoading] = useState(true)

  const dhoniData: DhoniData = {
    personalInfo: {
      fullName: "Mahendra Singh Dhoni",
      nickname: "Captain Cool, Mahi, MSD",
      birthDate: "July 7, 1981",
      birthPlace: "Ranchi, Jharkhand, India",
      jerseyNumber: 7,
      role: "Wicket-keeper Batsman",
    },
    careerStats: {
      odis: { matches: 350, runs: 10773, average: 50.57, centuries: 10, fifties: 73 },
      tests: { matches: 90, runs: 4876, average: 38.09, centuries: 6, fifties: 33 },
      t20is: { matches: 98, runs: 1617, average: 37.6, centuries: 0, fifties: 2 },
      ipl: { matches: 264, runs: 5082, average: 39.55, centuries: 0, fifties: 24 },
    },
    achievements: [
      "2007 T20 World Cup Winner (Captain)",
      "2011 Cricket World Cup Winner (Captain)",
      "2013 Champions Trophy Winner (Captain)",
      "ICC ODI Player of the Year 2008, 2009",
      "Rajiv Gandhi Khel Ratna Award 2007",
      "Padma Shri 2009",
      "Padma Bhushan 2018",
      "Most successful Indian Test captain",
      "Most dismissals by an Indian wicket-keeper",
      "5 IPL titles with Chennai Super Kings",
    ],
    timeline: [
      { year: 2004, event: "International Debut", description: "Made ODI debut against Bangladesh" },
      { year: 2005, event: "Test Debut", description: "Test debut against Sri Lanka in Chennai" },
      { year: 2007, event: "T20 World Cup Victory", description: "Led India to first T20 World Cup triumph" },
      { year: 2007, event: "ODI Captaincy", description: "Appointed as ODI captain" },
      { year: 2008, event: "Test Captaincy", description: "Became Test captain" },
      { year: 2011, event: "World Cup Glory", description: "Hit the winning six in World Cup final" },
      { year: 2013, event: "Champions Trophy", description: "Won Champions Trophy in England" },
      { year: 2014, event: "Test Retirement", description: "Retired from Test cricket" },
      { year: 2017, event: "ODI/T20I Captaincy", description: "Stepped down as limited-overs captain" },
      { year: 2019, event: "World Cup Semi-final", description: "Last World Cup appearance" },
      { year: 2020, event: "International Retirement", description: "Retired from international cricket" },
    ],
    quotes: [
      "I never allow myself to be pressured.",
      "The day I think about a World Cup and a trophy, I'll go mad.",
      "I have always believed that process is more important than results.",
      "You don't play for the crowd, you play for the country.",
      "I am like everyone, I make mistakes.",
      "Gut feeling is all about the experiences that you have had in your life.",
    ],
    captaincy: {
      odiWins: 110,
      testWins: 27,
      t20Wins: 41,
      worldCups: ["2007 T20 World Cup", "2011 Cricket World Cup", "2013 Champions Trophy"],
    },
  }

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <DhoniContext.Provider value={{ dhoniData, selectedSection, setSelectedSection, isLoading }}>
      {children}
    </DhoniContext.Provider>
  )
}
