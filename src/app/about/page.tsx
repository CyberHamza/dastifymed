'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Layout from '../../components/layout'
import { TeamSection } from '../../components/team-section'
import { JourneySection } from '../../components/journey-section'
import { ValuesSection } from '../../components/values-section'

export default function AboutUsPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section className="relative h-[50vh] overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="About Us Hero"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">About Dastify</h1>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Mission</h2>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                To revolutionize medical billing in Malaysia through innovative technology and exceptional service, 
                empowering healthcare providers to focus on what matters most - patient care.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Vision</h2>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                To be the leading medical billing solution in Malaysia and Southeast Asia, 
                setting the standard for efficiency, accuracy, and customer satisfaction in healthcare finance.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <JourneySection />
      <TeamSection />
      <ValuesSection />
    </Layout>
  )
}

