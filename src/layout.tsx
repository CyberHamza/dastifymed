'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, Clock, Book, FileText, HelpCircle } from 'lucide-react'
import { SignInDialog } from './sign-in-dialog'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FB]">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4">
          <div className="flex items-center h-20">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">Dastify</span>
            </Link>
            <div className="hidden md:flex flex-grow justify-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  } text-sm transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden md:block">
              <SignInDialog />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-auto text-gray-600 hover:text-blue-600"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        <motion.div
          className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                } block px-3 py-2 text-base font-medium rounded-md`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <SignInDialog />
            </div>
          </div>
        </motion.div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Dartify</h3>
              <p className="text-gray-400 mb-4">Streamlining medical billing for Malaysian healthcare providers with innovative solutions and exceptional service.</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>123 Jalan Ampang, 50450 Kuala Lumpur, Malaysia</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>info@dastify.com</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+60 3-1234 5678</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-200">Our Services</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <Book className="w-4 h-4 mr-2" />
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <FileText className="w-4 h-4 mr-2" />
                  <Link href="/guides">Guides</Link>
                </li>
                <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="space-y-4">
                <a href="https://facebook.com/dastify" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook className="w-5 h-5 mr-2" />
                  <span>Facebook</span>
                </a>
                <a href="https://instagram.com/dastify" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram className="w-5 h-5 mr-2" />
                  <span>Instagram</span>
                </a>
                <a href="https://linkedin.com/company/dastify" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="w-5 h-5 mr-2" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com/dastify" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter className="w-5 h-5 mr-2" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} Dartify. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-4">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

