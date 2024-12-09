// ... (previous footer code remains the same until the copyright section)

<div className="mt-12 border-t border-gray-800 pt-8">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center"
  >
    <p className="text-gray-400 mb-4">
      &copy; {new Date().getFullYear()} Dastify. All rights reserved.
    </p>
    <div className="flex justify-center space-x-4">
      <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
        Privacy Policy
      </Link>
      <span className="text-gray-600">•</span>
      <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
        Terms of Service
      </Link>
    </div>
  </motion.div>
</div>

