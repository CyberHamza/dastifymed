'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Heart, Lightbulb, Clock, CheckCircle, Lock } from 'lucide-react'

const values = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Compliance Excellence",
    description: "Ensuring adherence to all healthcare billing regulations and standards."
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Patient-Centric",
    description: "Putting patient care first by streamlining the billing process."
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Innovation",
    description: "Continuously improving our technology to serve you better."
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Efficiency",
    description: "Optimizing billing processes to save time and resources."
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "Accuracy",
    description: "Maintaining the highest standards of precision in billing."
  },
  {
    icon: <Lock className="w-12 h-12" />,
    title: "Security",
    description: "Protecting sensitive healthcare data with advanced security measures."
  }
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mx-auto mb-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

