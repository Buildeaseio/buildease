"use client"

import { FadeContainer, FadeDiv, FadeSpan } from "@/components/Fade"
import DemoForm from "@/components/ui/DemoForm"
import GameOfLife from "@/components/ui/HeroBackground"
import Link from "next/link"
import { useState } from 'react'
import { RiArrowRightUpLine } from "react-icons/ri"

export default function ComingSoon() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section aria-label="comingsoon">
      <FadeContainer className="relative flex flex-col items-center justify-center">
        <FadeDiv className="mx-auto">
          <Link
            href="/"
            className="mx-auto w-full"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-[#2286b9]/20 ring-[#2286b9]/10 filter backdrop-blur-[1px] transition-colors hover:bg-[#2286b9]/[2.5%] focus:outline-hidden sm:text-sm">
              <span className="shrink-0 truncate rounded-full border bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                New
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">
                  Construction Management Platform
                </span>

                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </Link>
        </FadeDiv>
        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-8xl sm:leading-[5.5rem]">
          <FadeSpan>Buildease</FadeSpan> <FadeSpan>Blog</FadeSpan>
          <br />
          <div className="mt-4">
            <FadeSpan>Coming</FadeSpan> <FadeSpan>Soon...</FadeSpan>
          </div>
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-xl">
          <FadeSpan>The Buildease Blog will be your go-to source for mastering construction management, boosting efficiency, and staying ahead of the competition.</FadeSpan>
          <br />
          <FadeSpan>Stay tuned!</FadeSpan>
        </p>
        <div className="mt-10 flex items-center gap-x-6 relative z-10">
          <button
            type="button"
            onClick={() => {
              console.log('Button clicked, setting form to open');
              setIsFormOpen(true);
            }}
            className="inline-flex items-center justify-center rounded-lg bg-[#2286b9] px-8 py-3 font-medium text-white transition-all duration-200 hover:bg-[#2286b9]/90 cursor-pointer hover:shadow-lg hover:translate-y-[-2px]"
          >
            <span>Join the Waitlist</span>
          </button>
        </div>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <GameOfLife />
        </div>
      </FadeContainer>
      <DemoForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
    </section>
  )
}
