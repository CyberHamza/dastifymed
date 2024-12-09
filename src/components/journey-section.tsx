'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

const milestones = [
  {
    year: 2020,
    title: "Foundation",
    description: "Established Dastify with a vision to revolutionize medical billing in Malaysia."
  },
  {
    year: 2021,
    title: "Market Leadership",
    description: "Became the leading medical billing solution provider in Kuala Lumpur."
  },
  {
    year: 2022,
    title: "Innovation Award",
    description: "Received the Healthcare Technology Innovation Award for our AI-powered billing system."
  },
  {
    year: 2023,
    title: "Regional Expansion",
    description: "Extended our services to Singapore and Thailand, serving over 500 healthcare providers."
  }
]

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section className="py-20 bg-gray-50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" />
          
          <div className="space-y-24">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 pr-8 pl-4">
                    <Card className={`transform ${isEven ? 'hover:-translate-y-2' : 'hover:translate-y-2'} transition-transform duration-300`}>
                      <CardContent className="p-6">
                        <div className="text-4xl font-bold text-gray-900 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      style={{
                        scale: useTransform(scrollYProgress, [0, 1], [1, 2]),
                        opacity: useTransform(scrollYProgress, [0, 1], [1, 0])
                      }}
                      className="w-6 h-6 rounded-full bg-white border-4 border-gray-900"
                    />
                  </div>
                  <div className="w-1/2 pl-8 pr-4" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

