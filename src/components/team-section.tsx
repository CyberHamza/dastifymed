'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Medical Billing Director",
    years: "15yr",
    rating: 4.9,
    id: "9320",
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-pink-100"
  },
  {
    name: "Dr. James Wilson",
    role: "Compliance Officer",
    years: "12yr",
    rating: 4.8,
    id: "9321",
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-blue-100"
  },
  {
    name: "Dr. Maria Rodriguez",
    role: "Technical Director",
    years: "10yr",
    rating: 4.7,
    id: "9322",
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-green-100"
  },
  {
    name: "Dr. Michael Chang",
    role: "Operations Manager",
    years: "13yr",
    rating: 4.6,
    id: "9323",
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-yellow-100"
  }
]

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10 rounded-none">
              <CardContent className="p-6 text-center bg-gradient-to-br from-white to-gray-100 h-full flex flex-col justify-between">
                <div>
                  <div className={`relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ${member.bgColor} p-1`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                  <p className="text-xs text-gray-500 mb-4">{member.years} Experience</p>
                </div>
                <Button variant="outline" size="sm" className="w-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

