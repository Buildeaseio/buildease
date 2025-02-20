"use client"

import { RiArrowRightUpLine } from "@remixicon/react"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Success() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="text-center px-8 py-10 rounded-3xl bg-white shadow-[0_0_50px_-12px_rgb(0,0,0,0.12)] max-w-lg mx-4"
      >
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-[#2286b9] mb-8"
        >
          <div className="mx-auto h-20 w-20 rounded-full bg-[#2286b9]/10 flex items-center justify-center">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank you!</h1>
          <p className="text-xl text-gray-600 mb-10 max-w-md mx-auto">
            We&apos;ve received your information and our team will reach out to you shortly.
          </p>
          <Link 
            href="/" 
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#2286b9] px-8 py-3 font-medium text-white transition duration-300 ease-out hover:bg-[#2286b9]/90"
          >
            <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[#366A79] transition-all duration-300 group-hover:translate-x-0">
              <RiArrowRightUpLine className="size-5" />
            </span>
            <span className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-full">
              <span>Return to Homepage</span>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
} 