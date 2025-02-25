"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { getCalApi } from "@calcom/embed-react"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { SolarLogo } from "../../../public/SolarLogo"
import { Button } from "../Button"
import DemoForm from "./DemoForm"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const scrolled = useScroll(15)
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  const handleNavigation = async (sectionId: string) => {
    if (pathname !== '/') {
      // If we're not on the home page, navigate there first
      await router.push('/');
      // Wait for a short moment to ensure the page has loaded
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      scrollToSection(sectionId);
    }
  };

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
          "fixed inset-x-4 top-4 z-[9999] mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
          scrolled || open
            ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
            : "bg-white/0",
        )}
      >
        <div className="w-full md:my-auto">
          <div className="relative flex items-center justify-between">
            {/* Logo - Visible on both mobile and desktop */}
            <Link href={siteConfig.baseLinks.home} aria-label="Home" className="flex items-center gap-2">
              <span className="sr-only">Buildease Logo</span>
              <SolarLogo className="h-8 w-8" />
              <span className="text-xl font-semibold text-gray-900">Buildease</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
              <div className="flex items-center gap-10 font-medium">
                {/* Desktop menu items */}
                <button 
                  onClick={() => handleNavigation('solutions')}
                  className="px-2 py-1 text-gray-900 transition-colors duration-200 hover:text-[#2286b9]"
                >
                  Solutions
                </button>
                <button 
                  onClick={() => handleNavigation('features-title')}
                  className="px-2 py-1 text-gray-900 transition-colors duration-200 hover:text-[#2286b9]"
                >
                  Use Cases
                </button>
                <Link className="px-2 py-1 text-gray-900 transition-colors duration-200 hover:text-[#2286b9]" href="/blog">
                  Blog
                </Link>
              </div>
            </nav>

            {/* Desktop Waitlist Button */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="hidden h-10 px-4 sm:block rounded-md border border-gray-300 bg-white hover:bg-gray-50 font-medium cursor-pointer"
            >
              Join Waitlist
            </button>

            {/* Mobile Menu Toggle Button */}
            <Button
              onClick={() => setOpen(!open)}
              variant="secondary"
              className="p-1.5 sm:hidden"
              aria-label={open ? "CloseNavigation Menu" : "Open Navigation Menu"}
            >
              {!open ? (
                <RiMenuFill className="size-6 shrink-0 text-gray-900" aria-hidden />
              ) : (
                <RiCloseFill className="size-6 shrink-0 text-gray-900" aria-hidden />
              )}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          <nav
            className={cx(
              "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
              open ? "" : "hidden",
            )}
          >
            <ul className="space-y-4 font-medium text-center">
              <li>
                <button 
                  onClick={() => handleNavigation('solutions')}
                  className="text-gray-900 hover:text-[#2286b9] w-full text-center"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('features-title')}
                  className="text-gray-900 hover:text-[#2286b9] w-full text-center"
                >
                  Use Cases
                </button>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/blog" className="text-gray-900 hover:text-[#2286b9]">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {isFormOpen && (
        <DemoForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
      )}
    </>
  )
}
