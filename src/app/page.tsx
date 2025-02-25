"use client"
import Testimonial from "@/components/ui/AutonomousFeature"
import { CallToAction } from "@/components/ui/CallToAction"
import EstimatingFeature from "@/components/ui/EstimatingFeature"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import Hero from "@/components/ui/Hero"



export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div className="pt-56">
        <Hero />
      </div>
      <div className="mt-52 px-4 xl:px-0">
        <Features />
      </div>
      <div className="mt-32 px-4 xl:px-0">
        <Testimonial />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="px-4 xl:px-0">
        <EstimatingFeature />
      </div>
      <div className="mt-40 mb-40 px-4 xl:px-0">
        <CallToAction />
      </div>
    </main>
  )
}
