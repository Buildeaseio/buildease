"use client"

import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function DemoForm({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData)

      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-10 shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <Dialog.Title className="text-3xl font-bold text-gray-900">
                Join the Waitlist
              </Dialog.Title>
              <p className="mt-2 text-lg text-gray-600">
                Discover how Buildease streamlines your operations, reduces costs, and boosts your bottom line with AI-powered construction management
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {error && (
            <div className="mb-4 rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          {!submitted ? (
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <p className="text-sm text-gray-500 mb-4">* Required Fields</p>

              <div className="grid grid-cols-2 gap-4">
                <p>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                    First Name*
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
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
                      className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
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
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
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
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
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
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
                  />
                </label>
              </p>

              <p>
                <label htmlFor="builderType" className="block text-sm font-semibold text-gray-700">
                  Which builder type best describes your business?*
                  <select
                    name="builderType"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
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
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-[#2286b9] focus:outline-none focus:ring-2 focus:ring-[#2286b9]/20"
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
                  className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#2286b9] px-8 py-4 font-medium text-white transition-all duration-200 hover:bg-[#2286b9]/90 hover:shadow-lg hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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