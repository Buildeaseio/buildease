"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { RiArrowRightUpLine } from "@remixicon/react"

export default function DemoForm({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 2 seconds and close
    setTimeout(() => {
      setIsOpen(false)
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-10 shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <Dialog.Title className="text-3xl font-bold text-gray-900">
                Book Your Demo
              </Dialog.Title>
              <p className="mt-2 text-lg text-gray-600">
                Experience how BuildEase can transform your construction operations
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Tell us about your needs (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#2286b9] px-8 py-4 font-medium text-white transition duration-300 ease-out hover:bg-[#2286b9]/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[#366A79] transition-all duration-300 group-hover:translate-x-0">
                  {isSubmitting ? (
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    <RiArrowRightUpLine className="size-5" />
                  )}
                </span>
                <span className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-full">
                  {isSubmitting ? 'Submitting...' : 'Schedule Demo'}
                </span>
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="text-[#2286b9] mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Thank you!</h3>
              <p className="mt-2 text-lg text-gray-600">We&apos;ll be in touch with you shortly.</p>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
} 