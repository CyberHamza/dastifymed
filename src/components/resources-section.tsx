'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const resources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of medical billing and how to use Dastify effectively.",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Best Practices",
    description: "Discover industry best practices for optimal billing management.",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step tutorials on using Dastify features.",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Case Studies",
    description: "Read success stories from healthcare providers using Dastify.",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Integration Guide",
    description: "Learn how to integrate Dastify with your existing systems.",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Compliance Guide",
    description: "Stay compliant with healthcare billing regulations.",
    image: "/placeholder.svg?height=200&width=400"
  }
]

export function ResourcesSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayedResources = isExpanded ? resources : resources.slice(0, 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <Button variant="outline" className="w-full">
                        Contact Us
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="text-center mt-8">
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-600 hover:text-gray-900"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      </div>
    </section>
  )
}

