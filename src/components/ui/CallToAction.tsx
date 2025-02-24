import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button"

export function CallToAction() {
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
            Begin your smart farming journey today or talk to our agronomists
            about your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="text-md">
              <Link href="#">Start now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
