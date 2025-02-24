"use client"
import {
  RiBuilding2Line,
  RiCheckLine,
  RiCircleLine,
  RiHammerLine,
  RiLineChartLine,
  RiLoaderFill,
  RiMoneyDollarCircleLine,
  RiTeamLine
} from "@remixicon/react";
import { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import { Orbit } from "../Orbit";
import { AnimatedTooltip } from "./animated-tooltip";
import ChipViz from "./ChipViz";

export default function Features() {
  const [orbitRadius, setOrbitRadius] = useState(180)

  // Handle responsive orbit size
  useEffect(() => {
    const handleResize = () => {
      setOrbitRadius(window.innerWidth < 640 ? 140 : 180)
    }
    
    handleResize() // Set initial size
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: "Pre Construction",
      designation: "Planning Phase",
      image: <i className="ri-road-map-line text-2xl text-[#B95422]"></i>
    },
    {
      id: 2,
      name: "Project Management",
      designation: "Operations",
      image: <i className="ri-home-gear-line text-2xl text-[#B95422]"></i>
    },
    {
      id: 3,
      name: "Resource Management",
      designation: "Operations",
      image: <i className="ri-stack-line text-2xl text-[#B95422]"></i>
    },
    {
      id: 4,
      name: "Financial Management",
      designation: "Finance",
      image: <i className="ri-bank-line text-2xl text-[#B95422]"></i>
    },
    {
      id: 5,
      name: "Automation",
      designation: "AI Systems",
      image: <i className="ri-cpu-line text-2xl text-[#B95422]"></i>
    }
  ];

  return (
    <section
      aria-label="Buildease Features"
      id="solutions"
      className="relative mx-auto max-w-6xl scroll-my-24"
    >
      {/* Background Vertical Lines */}
      <div className="pointer-events-none inset-0 select-none">
        {/* Left Line */}
        <div
          className="absolute inset-y-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* Right Line */}
        <div
          className="absolute inset-y-0 right-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* Middle Line */}
        <div
          className="absolute inset-y-0 left-1/2 -z-10 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* 25% Line */}
        <div
          className="absolute inset-y-0 left-1/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* 75% Line */}
        <div
          className="absolute inset-y-0 left-3/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
        {/* First Feature: Smart Autonomous Systems */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight" style={{ color: '#2286b9' }}>
            Smart Autonomous Systems
            <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm" style={{ backgroundColor: '#2286b9' }} />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            A Network of Autonomous Systems for Perfect Construction Management
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Deploy intelligent AI agents and automated systems across your team, sales pipeline, and business operations with our integrated platform.
          </p>
        </div>
        
        {/* Orbit Visualization */}
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <svg
            className="absolute size-full [mask-image:linear-gradient(transparent,white_10rem)]"
          // style={{
          //   maskImage:
          //     "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
          // }}
          >
            <defs>
              <pattern
                id="diagonal-feature-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-gray-200/70"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          
          {/* Orbit Component */}
          <div className="pointer-events-none p-10 select-none">
            <div className="relative flex flex-col items-center justify-center">
              <Orbit
                durationSeconds={40}
                radiusPx={orbitRadius}
                keepUpright
                orbitingObjects={[
                  <div
                    key="obj1"
                    className="relative flex items-center justify-center"
                  >
                    <RiBuilding2Line className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -bottom-12 sm:-top-5 sm:left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-[#2287B9] p-1 text-xs ring-1 ring-gray-200">
                          <RiCircleLine className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
                          Resource Management
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "1s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-[#2286b9]/50"
                    ></div>
                  </div>,

                  <div
                    key="obj2"
                    className="relative flex items-center justify-center"
                  >
                    <RiMoneyDollarCircleLine className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -bottom-12 sm:-top-5 sm:left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-[#2287B9] p-1 text-xs ring-1 ring-gray-200">
                          <RiLoaderFill className="size-3 shrink-0 animate-spin text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
                          Sales & Marketing
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "4s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-[#2286b9]/50"
                    ></div>
                  </div>,

                  <div
                    key="obj3"
                    className="relative flex items-center justify-center"
                  >
                    <RiHammerLine className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -bottom-12 sm:-top-5 sm:left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-[#2287B9] p-1 text-xs ring-1 ring-gray-200">
                          <RiLoaderFill className="size-3 shrink-0 animate-spin text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200 min-w-[60px]">
                          Build & Design
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "2s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-[#2286b9]/50"
                    ></div>
                  </div>,
                  <div
                    key="obj4"
                    className="relative flex items-center justify-center"
                  >
                    <RiTeamLine className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -bottom-12 sm:-top-5 sm:left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-[#2287B9] p-1 text-xs ring-1 ring-gray-200">
                          <RiCheckLine className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
                          Project Management
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        animationDelay: "6s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-[#2286b9]/50"
                    ></div>
                  </div>,
                  <div
                    key="obj5"
                    className="relative flex items-center justify-center"
                  >
                    <RiLineChartLine className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -bottom-12 sm:-top-5 sm:left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-[#2287B9] p-1 text-xs ring-1 ring-gray-200">
                          <RiLoaderFill className="size-3 shrink-0 animate-spin text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
                          Data & Analytics
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "3s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-[#2286b9]/50"
                    ></div>
                  </div>,
                ]}
              >
                <div className="relative flex h-32 w-32 sm:h-48 sm:w-48 items-center justify-center">
                  <div className="rounded-full p-1 ring-1 ring-black/10">
                    <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white ring-1 shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-black/20">
                      <svg
                        viewBox="0 0 3000 3000"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="#2286b9"
                      >
                        <g transform="translate(0.000000,3000.000000) scale(0.100000,-0.100000)">
                          <path d="M6530 23928 l0 -4513 1310 1310 1310 1310 0 1887 0 1888 4138 0 4137 0 3493 -3493 3492 -3492 -4618 -4618 -4617 -4617 -920 920 -920 920 3700 3700 3700 3700 -1850 1850 -1850 1850 -1860 0 -1860 0 -3393 -3393 -3392 -3392 0 -615 0 -615 3858 -3858 3857 -3857 930 0 930 0 3235 3235 3235 3235 920 -920 920 -920 -3620 -3620 -3620 -3620 -4012 0 -4013 0 0 1888 0 1887 -1310 1310 -1310 1310 0 -4513 0 -4512 5868 0 5867 0 4071 4073 c2644 2645 4095 4104 4141 4162 472 607 657 1335 528 2088 -78 462 -286 899 -599 1262 -38 44 -497 509 -1020 1033 l-951 952 991 993 c607 608 1016 1025 1056 1077 238 312 386 613 478 975 63 247 75 353 75 650 0 297 -12 402 -75 651 -48 187 -92 309 -179 489 -81 169 -155 290 -275 450 -79 106 -535 567 -4040 4073 l-3951 3952 -5992 0 -5993 0 0 -4512z m9945 -4568 l540 -540 -2768 -2768 -2767 -2767 -922 923 -923 922 2385 2385 2385 2385 765 0 765 0 540 -540z" />
                        </g>
                      </svg>
                    </div>
                    <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-linear-to-t from-transparent via-blue-400 to-transparent blur-lg" />
                  </div>
                </div>
              </Orbit>
            </div>
          </div>
        </div>

        {/* Second Feature: Precision Sales Management */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight" style={{ color: '#2286b9' }}>
            Precision Sales Management
            <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm" style={{ backgroundColor: '#2286b9' }} />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            Turn every dollar into a data-driven powerhouse
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Revolutionize your sales process with AI that converts raw data into actionable insights in real-time. Make faster, smarter decisions, reduce inefficiencies, and maximize profits across your pipeline.
          </p>
        </div>
        
        {/* Sales Grid Visualization */}
        <div className="relative col-span-2 flex items-center justify-center overflow-visible 
          /* Mobile styles */
          -mx-10 px-4
          /* Desktop styles */
          sm:mx-0 sm:px-0"
        >
          <svg className="absolute size-full">
            <defs>
              <pattern
                id="diagonal-feature-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-gray-200/70"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="relative h-[432px] w-[432px] 
            /* Mobile styles */
            scale-75
            /* Desktop styles */
            sm:scale-100"
          >
            <svg
              id="grid"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="mask absolute size-[432px]"
            >
              <path
                className="stroke-gray-300"
                d="M48 0v432M96 0v432M144 0v432M192 0v432M240 0v432M288 0v432M336 0v432M384 0v432M0 48h432M0 96h432M0 144h432M0 192h432M0 240h432M0 288h432M0 336h432M0 384h432"
              />
            </svg>

            <div className="pointer-events-none relative h-full select-none">
              <div className="absolute top-[192px] left-[191.8px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse blur-lg" style={{ backgroundColor: '#2286b9', opacity: '0.8' }}></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                    <svg
                      viewBox="0 0 3000 3000"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="#2286b9"
                    >
                      <g transform="translate(0.000000,3000.000000) scale(0.100000,-0.100000)">
                        <path d="M6530 23928 l0 -4513 1310 1310 1310 1310 0 1887 0 1888 4138 0 4137 0 3493 -3493 3492 -3492 -4618 -4618 -4617 -4617 -920 920 -920 920 3700 3700 3700 3700 -1850 1850 -1850 1850 -1860 0 -1860 0 -3393 -3393 -3392 -3392 0 -615 0 -615 3858 -3858 3857 -3857 930 0 930 0 3235 3235 3235 3235 920 -920 920 -920 -3620 -3620 -3620 -3620 -4012 0 -4013 0 0 1888 0 1887 -1310 1310 -1310 1310 0 -4513 0 -4512 5868 0 5867 0 4071 4073 c2644 2645 4095 4104 4141 4162 472 607 657 1335 528 2088 -78 462 -286 899 -599 1262 -38 44 -497 509 -1020 1033 l-951 952 991 993 c607 608 1016 1025 1056 1077 238 312 386 613 478 975 63 247 75 353 75 650 0 297 -12 402 -75 651 -48 187 -92 309 -179 489 -81 169 -155 290 -275 450 -79 106 -535 567 -4040 4073 l-3951 3952 -5992 0 -5993 0 0 -4512z m9945 -4568 l540 -540 -2768 -2768 -2767 -2767 -922 923 -923 922 2385 2385 2385 2385 765 0 765 0 540 -540z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute top-[144px] left-[48px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse blur-lg [animation-delay:0ms]" style={{ backgroundColor: '#87B922', opacity: '0.8' }}></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                    <RiMoneyDollarCircleLine className="size-5 text-[#87B922]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[48px] left-[144px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse blur-lg [animation-delay:2000ms]" style={{ backgroundColor: '#87B922', opacity: '0.8' }}></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                  <RiMoneyDollarCircleLine className="size-5 text-[#87B922]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[96px] left-[240px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse blur-lg [animation-delay:6000ms]" style={{ backgroundColor: '#87B922', opacity: '0.8' }}></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                  <RiMoneyDollarCircleLine className="size-5 text-[#87B922]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[240px] left-[385px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse blur-lg [animation-delay:9000ms]" style={{ backgroundColor: '#87B922', opacity: '0.8' }}></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                  <RiMoneyDollarCircleLine className="size-5 text-[#87B922]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[337px] left-[336px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse blur-lg [animation-delay:13000ms]" style={{ backgroundColor: '#87B922', opacity: '0.8' }}></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                  <RiMoneyDollarCircleLine className="size-5 text-[#87B922]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[288px] left-[144px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse blur-lg [animation-delay:10000ms]" style={{ backgroundColor: '#87B922', opacity: '0.8' }}></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                  <RiMoneyDollarCircleLine className="size-5 text-[#87B922]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Feature: Automated Quality Control */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight" style={{ color: '#2286b9' }}>
            Automated Quality Control
            <div className="absolute top-1 -left-[7px] h-5 w-[3px] rounded-r-sm" style={{ backgroundColor: '#2286b9' }} />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            Build Smarter, Not Harder. Seamless Quality at Scale
          </p>
          <p className="mt-4 text-balance text-gray-700">
          Utilize AI to continuously monitor construction quality at every stage through real-time data analysis. 
          Our platform detects deviations from project specifications early, allowing for immediate 
          corrections and ensuring that all work meets the highest standards.
          </p>
        </div>
        
        {/* Quality Control Visualization */}
        <div className="relative col-span-2 flex items-center justify-center overflow-visible">
          <svg
            className="absolute size-full [mask-image:linear-gradient(white_10rem,transparent)] -z-10"
          // style={{
          //   maskImage:
          //     "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
          // }}
          >
            <defs>
              <pattern
                id="diagonal-feature-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-gray-200/70"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="relative flex size-full h-[26rem] items-center justify-center p-10">
            <div className="relative">
              {/* ID 1 - Top Left */}
              <div className="absolute top-[6rem] left-[6rem] z-50 pointer-events-auto">
                <div className="relative">
                  <div className="absolute top-1/2 left-[68%] -translate-x-[60%] -translate-y-1/2 size-12 animate-pulse blur-lg" style={{ backgroundColor: '#B95422', opacity: '1' }}></div>
                  <AnimatedTooltip items={[teamMembers[3]]} />
                </div>
              </div>

              {/* ID 2 - Top Right */}
              <div className="absolute top-[6rem] right-[7rem] z-50 pointer-events-auto">
                <div className="relative">
                  <div className="absolute top-1/2 left-[68%] -translate-x-1/2 -translate-y-1/2 size-12 animate-pulse blur-lg -z-10" style={{ backgroundColor: '#B95422', opacity: '1' }}></div>
                  <AnimatedTooltip items={[teamMembers[2]]} />
                </div>
              </div>

              {/* ID 3 - Bottom Right */}
              <div className="absolute bottom-[6rem] right-[7rem] z-50 pointer-events-auto">
                <div className="relative">
                  <div className="absolute top-1/2 left-[68%] -translate-x-1/2 -translate-y-1/2 size-12 animate-pulse blur-lg -z-10" style={{ backgroundColor: '#B95422', opacity: '1' }}></div>
                  <AnimatedTooltip items={[teamMembers[0]]} />
                </div>
              </div>

              {/* ID 4 - Bottom Left */}
              <div className="absolute bottom-[6rem] left-[6rem] z-50 pointer-events-auto">
                <div className="relative">
                  <div className="absolute top-1/2 left-[68%] -translate-x-1/2 -translate-y-1/2 size-12 animate-pulse blur-lg -z-10" style={{ backgroundColor: '#B95422', opacity: '1' }}></div>
                  <AnimatedTooltip items={[teamMembers[1]]} />
                </div>
              </div>
            </div>
            <div className="relative">
              {[0, 45, 135, 180, 225, 315, 360].map((rotation, index) => (
                <div
                  key={rotation}
                  className="absolute origin-left overflow-hidden"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="relative">
                    <div className="h-0.5 w-60 bg-linear-to-r from-gray-300 to-transparent" />
                    <div
                      className="absolute top-0 left-0 h-0.5 w-28 blur-[2px]"
                      style={{
                        animation: `gridMovingLine 5s linear infinite ${index * 1.2}s`,
                        animationFillMode: "backwards",
                        background: 'linear-gradient(to right, transparent, #2286B9, #B95422, transparent)',
                        boxShadow: '0 0 8px rgba(34,134,185,0.6), 0 0 12px rgba(185,34,135,0.4)'
                      }}
                    />
                  </div>
                </div>
              ))}
              
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <ChipViz />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
