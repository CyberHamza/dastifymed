'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Layout from '../../components/layout'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    details: "info@dastify.com",
    description: "Send us an email anytime for inquiries"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    details: "+60 3-1234 5678",
    description: "Mon-Fri from 9am to 6pm"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    details: "123 Jalan Ampang, 50450 Kuala Lumpur",
    description: "Come see us in person"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    details: "Monday - Friday: 9:00 AM - 6:00 PM",
    description: "Closed on weekends and public holidays"
  }
]

export default function ContactUsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Contact Us"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl">We'd love to hear from you</p>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-600 mb-2">{info.details}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    name="first-name"
                    type="text"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    name="last-name"
                    type="text"
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Map Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Office Location"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

