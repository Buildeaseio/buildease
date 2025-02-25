"use client"

import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function DemoForm({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
    email: '',
    builderType: '',
    annualRevenue: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form. Please try again.')
      }

      setSubmitted(true)
      setTimeout(() => setIsOpen(false), 2000)
    } catch (error) {
      console.error('Form submission error:', error)
      setError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-[10000]">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
      
      {/* Modal Container - Full screen overlay */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* Modal Panel - Mobile: Full width, Desktop: Max width 600px */}
        <Dialog.Panel className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2 sm:p-6 shadow-2xl relative">
          {/* Close Button - Mobile: Closer to edge, Desktop: Further from edge */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-1 right-1 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          
          {/* Header Section - Reduced vertical spacing */}
          <div className="mb-2 sm:mb-6">
            <Dialog.Title className="text-lg sm:text-2xl font-bold text-gray-900">
              Join the Waitlist
            </Dialog.Title>
            <p className="mt-0.5 sm:mt-1 text-sm sm:text-base text-gray-600">
              Discover how Buildease streamlines your operations, reduces costs, and boosts your bottom line with AI-powered construction management.
            </p>
          </div>

          {/* Form Content - Conditional render based on submission status */}
          {!submitted ? (
            <form 
              onSubmit={handleSubmit}
              className="space-y-2 sm:space-y-4"
            >
              <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-4">* Required Fields</p>

              {/* Name Fields - Mobile: Stack vertically, Desktop: Side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                    First Name*
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="mt-1 sm:mt-2 block w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                    />
                  </label>
                </p>
                
                <p>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                    Last Name*
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="mt-1 sm:mt-2 block w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                    />
                  </label>
                </p>
              </div>

              <p>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                  Phone*
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-1 sm:mt-2 block w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                  />
                </label>
              </p>

              <p>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                  Company*
                  <input
                    type="text"
                    name="company"
                    required
                    className="mt-1 sm:mt-2 block w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                  />
                </label>
              </p>

              <p>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email*
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 sm:mt-2 block w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                  />
                </label>
              </p>

              <p>
                <label htmlFor="builderType" className="block text-sm font-semibold text-gray-700">
                  Which builder type best describes your business?*
                  <select
                    name="builderType"
                    required
                    className="mt-1 sm:mt-2 block w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                  >
                    <option value="">Select</option>
                    <option value="residential-homebuilder">Residential – Homebuilder</option>
                    <option value="specialty-trade">Specialty/Trade Contractor</option>
                    <option value="residential-remodeler">Residential – Remodeler</option>
                    <option value="commercial-contractor">Commercial General Contractor</option>
                  </select>
                </label>
              </p>

              <p>
                <label htmlFor="annualRevenue" className="block text-sm font-semibold text-gray-700">
                  What is your average annual revenue?*
                  <select
                    name="annualRevenue"
                    required
                    className="mt-1 sm:mt-2 block w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                  >
                    <option value="">Select</option>
                    <option value="0-499k">$0 – 499K</option>
                    <option value="500k-999k">$500K – 999K</option>
                    <option value="1m-4.99m">$1M – 4.99M</option>
                    <option value="5m-7.99m">$5M – 7.99M</option>
                    <option value="8m-10.99m">$8M – 10.99M</option>
                    <option value="11m-15.99m">$11M – 15.99M</option>
                    <option value="16m-20.99m">$16M – 20.99M</option>
                    <option value="21m-25.99m">$21M – 25.99M</option>
                    <option value="26m-30.99m">$26M – 30.99M</option>
                    <option value="31m+">$31M+</option>
                  </select>
                </label>
              </p>

              <p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#2286b9] px-6 sm:px-8 py-2.5 sm:py-4 font-medium text-white transition-all duration-200 hover:bg-[#2286b9]/90 hover:shadow-lg hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </p>
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