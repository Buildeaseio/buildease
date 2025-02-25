"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "../Button"
import DemoForm from "./ContactForm"

export function CallToAction() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-6xl">
      {/* Main grid container
          Mobile: Single column
          Desktop: 6 columns with image taking 4, text taking 2 */}
      <div className={`
        grid items-center gap-8
        /* Mobile */
        grid-cols-1
        /* Desktop */
        sm:grid-cols-6
      `}>
        {/* Image Container
            Mobile: Shows first
            Desktop: Shows second, spans 4 columns */}
        <div className={`
          relative isolate rounded-xl
          /* Mobile */
          order-first
          /* Desktop */
          sm:order-last sm:col-span-4 sm:h-full
        `}>
          {/* Blurred background image */}
          <Image
            aria-hidden
            alt="Buildease Dashboard"
            src="/images/buildease-platform.png"
            height={1000}
            width={1000}
            className="absolute inset-0 -z-10 rounded-2xl blur-xl"
          />
          {/* Main image */}
          <Image
            alt="Buildease Dashboard"
            src="/images/buildease-platform.png"
            height={1000}
            width={1000}
            className="relative z-10 rounded-2xl"
          />
        </div>

        {/* Text Content Container
            Mobile: Shows second
            Desktop: Shows first, spans 2 columns */}
        <div className={`
          /* Mobile */
          order-last
          /* Desktop */
          sm:col-span-2 sm:order-first
        `}>
          <h2
            id="cta-title"
            className="scroll-my-60 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl"
          >
            Ready to get started?
          </h2>
          <p className="mt-3 mb-8 text-lg text-gray-600">
          Start streamlining your construction projects today or connect with our experts to discuss your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild 
              className="text-md cursor-pointer"
              onClick={() => setIsFormOpen(true)}
            >
              <span>Contact Us</span>
            </Button>
          </div>
        </div>
      </div>
      <DemoForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
    </section>
  )
}

export default CallToAction
