"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { getCalApi } from "@calcom/embed-react"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { SolarLogo } from "../../../public/SolarLogo"
import { Button } from "../Button"
import DemoForm from "./DemoForm"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const scrolled = useScroll(15)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#2286B9" },
          dark: { "cal-brand": "#2286B9" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, [])

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
          scrolled || open
            ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
            : "bg-white/0",
        )}
      >
        <div className="w-full md:my-auto">
          <div className="relative flex items-center justify-between">
            <Link href={siteConfig.baseLinks.home} aria-label="Home" className="flex items-center gap-2">
              <span className="sr-only">Buildease Logo</span>
              <SolarLogo className="h-8 w-8" />
              <span className="text-xl font-semibold text-gray-900">Buildease</span>
            </Link>
            <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
              <div className="flex items-center gap-10 font-medium">
                <Link className="px-2 py-1 text-gray-900 transition-colors duration-200 hover:text-[#2286b9]" href="/solutions">
                  Solutions
                </Link>
                <div className="relative">
                  <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="px-2 py-1 text-gray-900 transition-colors duration-200 hover:text-[#2286b9] flex items-center gap-1"
                  >
                    Products
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-xl shadow-lg bg-white/80 backdrop-blur-sm border border-gray-200/50 transition-all duration-200">
                      <div className="py-1.5">
                        <Link 
                          href="/use-cases" 
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50/50 hover:text-[#2286b9] transition-colors duration-200"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Use Cases
                        </Link>
                        {/* Add more dropdown items here as needed */}
                      </div>
                    </div>
                  )}
                </div>
                <Link className="px-2 py-1 text-gray-900 transition-colors duration-200 hover:text-[#2286b9]" href="/products">
                  Blog
                </Link>
              </div>
            </nav>
            <button
              onClick={() => setIsFormOpen(true)}
              className="hidden h-10 px-4 sm:block rounded-md border border-gray-300 bg-white hover:bg-gray-50 font-medium cursor-pointer"
            >
              Join Waitlist
            </button>
            <Button
              onClick={() => setOpen(!open)}
              variant="secondary"
              className="p-1.5 sm:hidden"
              aria-label={open ? "CloseNavigation Menu" : "Open Navigation Menu"}
            >
              {!open ? (
                <RiMenuFill
                  className="size-6 shrink-0 text-gray-900"
                  aria-hidden
                />
              ) : (
                <RiCloseFill
                  className="size-6 shrink-0 text-gray-900"
                  aria-hidden
                />
              )}
            </Button>
          </div>
          <nav
            className={cx(
              "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
              open ? "" : "hidden",
            )}
          >
            <ul className="space-y-4 font-medium">
              <li onClick={() => setOpen(false)}>
                <Link href="/solutions"></Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/use-cases"></Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/products"></Link>
              </li>
            </ul>
            <button
              data-cal-namespace="30min"
              data-cal-link="buildease/30min"
              data-cal-config='{"layout":"month_view"}'
              className="text-lg"
            >
              Book a Demo
            </button>
          </nav>
        </div>
      </header>

      {isFormOpen && (
        <DemoForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
      )}
    </>
  )
}
