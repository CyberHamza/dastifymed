'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Layout from '../../components/layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Clock, FileText, Zap, Shield, Users, Headphones, BarChart, Sliders, Smartphone, Globe, Database, Lock, Cloud, Cpu, Layers, RefreshCw, Inbox, Award } from 'lucide-react'
import { useRouter } from 'next/navigation'

const services = [
  { 
    title: "Medical Billing", 
    description: "Streamline your billing process with our advanced software.",
    icon: <FileText className="w-10 h-10 text-blue-500" />,
    color: "bg-blue-50"
  },
  { 
    title: "Revenue Cycle Management", 
    description: "Optimize your revenue cycle for maximum efficiency.",
    icon: <RefreshCw className="w-10 h-10 text-green-500" />,
    color: "bg-green-50"
  },
  { 
    title: "Claims Processing", 
    description: "Fast and accurate claims processing to reduce denials.",
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    color: "bg-yellow-50"
  },
  { 
    title: "Analytics and Reporting", 
    description: "Gain insights with our comprehensive analytics tools.",
    icon: <BarChart className="w-10 h-10 text-purple-500" />,
    color: "bg-purple-50"
  },
  { 
    title: "Patient Portal", 
    description: "Empower patients with easy access to their billing information.",
    icon: <Users className="w-10 h-10 text-indigo-500" />,
    color: "bg-indigo-50"
  },
  { 
    title: "24/7 Support", 
    description: "Round-the-clock assistance for all your billing needs.",
    icon: <Headphones className="w-10 h-10 text-red-500" />,
    color: "bg-red-50"
  },
  { 
    title: "Customizable Workflows", 
    description: "Tailor our system to fit your unique billing processes.",
    icon: <Sliders className="w-10 h-10 text-orange-500" />,
    color: "bg-orange-50"
  },
  { 
    title: "Mobile App", 
    description: "Access your billing dashboard on-the-go with our mobile app.",
    icon: <Smartphone className="w-10 h-10 text-teal-500" />,
    color: "bg-teal-50"
  },
  { 
    title: "Integration Services", 
    description: "Seamlessly integrate with your existing healthcare systems.",
    icon: <Layers className="w-10 h-10 text-pink-500" />,
    color: "bg-pink-50"
  },
  { 
    title: "Compliance Management", 
    description: "Stay up-to-date with the latest healthcare billing regulations.",
    icon: <Shield className="w-10 h-10 text-gray-500" />,
    color: "bg-gray-50"
  },
  { 
    title: "Real-time Eligibility Verification", 
    description: "Instantly verify patient insurance eligibility.",
    icon: <CheckCircle className="w-10 h-10 text-emerald-500" />,
    color: "bg-emerald-50"
  },
  { 
    title: "Automated Reminders", 
    description: "Reduce missed payments with automated patient reminders.",
    icon: <Clock className="w-10 h-10 text-cyan-500" />,
    color: "bg-cyan-50"
  },
  { 
    title: "Multi-location Support", 
    description: "Manage billing for multiple healthcare locations effortlessly.",
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    color: "bg-blue-50"
  },
  { 
    title: "Data Migration Services", 
    description: "Seamlessly transfer your existing billing data to our platform.",
    icon: <Database className="w-10 h-10 text-green-500" />,
    color: "bg-green-50"
  },
  { 
    title: "Secure Data Encryption", 
    description: "Protect sensitive patient information with advanced encryption.",
    icon: <Lock className="w-10 h-10 text-yellow-500" />,
    color: "bg-yellow-50"
  },
  { 
    title: "Cloud-based Solution", 
    description: "Access your billing system from anywhere with our cloud platform.",
    icon: <Cloud className="w-10 h-10 text-purple-500" />,
    color: "bg-purple-50"
  },
  { 
    title: "AI-powered Coding Assistance", 
    description: "Improve coding accuracy with our AI-powered suggestions.",
    icon: <Cpu className="w-10 h-10 text-indigo-500" />,
    color: "bg-indigo-50"
  },
  { 
    title: "Denial Management", 
    description: "Efficiently handle and reduce claim denials.",
    icon: <RefreshCw className="w-10 h-10 text-red-500" />,
    color: "bg-red-50"
  },
  { 
    title: "Electronic Remittance Advice (ERA)", 
    description: "Automatically process and reconcile electronic remittances.",
    icon: <Inbox className="w-10 h-10 text-orange-500" />,
    color: "bg-orange-50"
  },
  { 
    title: "Credentialing Services", 
    description: "Streamline the provider credentialing process.",
    icon: <Award className="w-10 h-10 text-teal-500" />,
    color: "bg-teal-50"
  },
]

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We begin with a thorough assessment of your current billing processes and needs.",
    icon: <Users className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Customized Solution Design",
    description: "Our team designs a tailored solution that addresses your specific challenges.",
    icon: <Sliders className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Seamless Implementation",
    description: "We handle the entire setup process, ensuring minimal disruption to your operations.",
    icon: <Layers className="w-12 h-12 text-yellow-500" />,
  },
  {
    title: "Staff Training",
    description: "Comprehensive training sessions to ensure your team is comfortable with the new system.",
    icon: <FileText className="w-12 h-12 text-purple-500" />,
  },
  {
    title: "Go-Live and Support",
    description: "We provide dedicated support during and after the go-live phase to ensure smooth operations.",
    icon: <Zap className="w-12 h-12 text-red-500" />,
  },
  {
    title: "Continuous Optimization",
    description: "Regular check-ins and updates to continuously improve your billing processes.",
    icon: <RefreshCw className="w-12 h-12 text-indigo-500" />,
  },
]

export default function ServicesPage() {
  const router = useRouter()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-center max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive solutions to streamline your healthcare billing process
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full hover:shadow-lg transition-all duration-300 overflow-hidden group ${service.color}`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">{service.icon}</div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h2>
                    <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                    <Button variant="outline" className="mt-auto group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50" ref={ref}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
            
            <div className="space-y-20">
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`flex items-center ${isEven ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div className="w-1/2 px-4">
                      <Card className={`transform ${isEven ? 'hover:-translate-y-2' : 'hover:translate-y-2'} transition-transform duration-300`}>
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            {step.icon}
                            <h3 className="text-xl font-semibold ml-4">{step.title}</h3>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="w-10 h-10 rounded-full bg-blue-500 border-4 border-white flex items-center justify-center text-white font-bold"
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                    <div className="w-1/2 px-4" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Billing Process?</h2>
          <p className="text-xl mb-8">Let us help you streamline your healthcare billing.</p>
          <Button 
            size="lg" 
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => router.push('/contact')}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </Layout>
  )
}

