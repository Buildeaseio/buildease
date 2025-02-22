"use client"

import { motion } from "motion/react"


const ChipViz = () => {
  const createVariants = ({
    scale,
    delay,
  }: {
    scale: number
    delay: number
  }) => ({
    initial: { scale: 1 },
    animate: {
      scale: [1, scale, 1],
      transition: {
        duration: 2,
        times: [0, 0.2, 1],
        ease: [0.23, 1, 0.32, 1],
        repeat: Infinity,
        repeatDelay: 2,
        delay,
      },
    },
  })

  return (
    <div className="relative flex items-center">
      <div className="relative">
        <motion.div
          variants={createVariants({ scale: 1.1, delay: 0 })}
          initial="initial"
          animate="animate"
          className="absolute -inset-px z-0 rounded-full bg-linear-to-r from-[#85c1e0] via-[#2286b9] to-[#165c80] opacity-30 blur-xl"
        />
        <motion.div
          variants={createVariants({ scale: 1.08, delay: 0.1 })}
          initial="initial"
          animate="animate"
          className="relative z-0 min-h-[80px] min-w-[80px] rounded-full border bg-linear-to-b from-white to-[#e8f4fa] shadow-xl shadow-[#2286b9]/20"
        >
          <motion.div
            variants={createVariants({ scale: 1.06, delay: 0.2 })}
            initial="initial"
            animate="animate"
            className="absolute inset-1 rounded-full bg-linear-to-t from-[#85c1e0] via-[#2286b9] to-[#165c80] p-0.5 shadow-xl"
          >
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-black/40 shadow-xs shadow-white/40 will-change-transform">
              <div className="size-full bg-black/30" />
              <motion.div
                variants={createVariants({ scale: 1.04, delay: 0.3 })}
                initial="initial"
                animate="animate"
                className="absolute inset-0 rounded-full bg-linear-to-t from-[#85c1e0] via-[#2286b9] to-[#165c80] opacity-50 shadow-[inset_0_0_16px_4px_rgba(0,0,0,1)]"
              />
              <motion.div
                variants={createVariants({ scale: 1.02, delay: 0.4 })}
                initial="initial"
                animate="animate"
                className="absolute inset-[6px] rounded-full bg-white/10 p-1 backdrop-blur-[1px]"
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-white to-gray-300 shadow-lg shadow-black/40">
                  <svg 
                    viewBox="0 0 3000 3000" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-6"
                    fill="#2286b9"
                  >
                    <g transform="translate(0.000000,3000.000000) scale(0.100000,-0.100000)">
                      <path d="M6530 23928 l0 -4513 1310 1310 1310 1310 0 1887 0 1888 4138 0 4137 0 3493 -3493 3492 -3492 -4618 -4618 -4617 -4617 -920 920 -920 920 3700 3700 3700 3700 -1850 1850 -1850 1850 -1860 0 -1860 0 -3393 -3393 -3392 -3392 0 -615 0 -615 3858 -3858 3857 -3857 930 0 930 0 3235 3235 3235 3235 920 -920 920 -920 -3620 -3620 -3620 -3620 -4012 0 -4013 0 0 1888 0 1887 -1310 1310 -1310 1310 0 -4513 0 -4512 5868 0 5867 0 4071 4073 c2644 2645 4095 4104 4141 4162 472 607 657 1335 528 2088 -78 462 -286 899 -599 1262 -38 44 -497 509 -1020 1033 l-951 952 991 993 c607 608 1016 1025 1056 1077 238 312 386 613 478 975 63 247 75 353 75 650 0 297 -12 402 -75 651 -48 187 -92 309 -179 489 -81 169 -155 290 -275 450 -79 106 -535 567 -4040 4073 l-3951 3952 -5992 0 -5993 0 0 -4512z m9945 -4568 l540 -540 -2768 -2768 -2767 -2767 -922 923 -923 922 2385 2385 2385 2385 765 0 765 0 540 -540z" />
                    </g>
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ChipViz
