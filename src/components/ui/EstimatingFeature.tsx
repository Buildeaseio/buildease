"use client";

import React, { useEffect, useRef } from 'react';

const Badge = React.forwardRef<HTMLSpanElement, { children: React.ReactNode; className?: string }>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={`z-10 block w-fit rounded-lg border border-[#2286B9] bg-gray-200 px-3 py-1.5 font-semibold uppercase leading-4 tracking-tighter dark:border-[#2286B9] dark:bg-gray-200 sm:text-sm ${className || ''}`}
        {...props}
      >
        <span className="bg-gradient-to-t from-[#2286B9] to-blue-600 bg-clip-text text-transparent dark:from-[#2286B9] dark:to-blue-400">
          {children}
        </span>
      </span>
    );
  },
);

Badge.displayName = 'Badge';

const stats = [
  {
    name: 'Accuracy Improvement',
    value: '+75%',
    description: 'Reduces cost estimation errors by up to 75%, leading to more precise budgets and fewer unexpected overruns.'
  },
  {
    name: 'Speed Multiplier',
    value: '5x',
    description: 'Send out estimates 5x faster than traditional methods, allowing contractors to generate bids in minutes instead of days.'
  },
  {
    name: 'Cost Savings',
    value: <span className="whitespace-nowrap">$100k+</span>,
    description: 'Save up to $100k+ per year on miscalculations and inefficiencies in bidding and procurement.'
  },
];

export default function Example() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heading.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heading.style.setProperty('--mouse-x', `${x}px`);
      heading.style.setProperty('--mouse-y', `${y}px`);
    };

    heading.addEventListener('mousemove', handleMouseMove);

    return () => {
      heading.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-24 px-4 xl:px-0">
      <div className="mx-auto w-full max-w-6xl text-center">
        <Badge className="mx-auto">Estimating at Scale</Badge>
        <h2
          ref={headingRef}
          className="relative mx-auto mt-2 inline-block bg-gradient-to-b from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent transition-all duration-200 before:absolute before:left-[var(--mouse-x)] before:top-[var(--mouse-y)] before:z-0 before:h-32 before:w-32 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-b before:from-[#2286B9] before:to-transparent before:opacity-100 before:content-[''] before:mix-blend-color dark:from-black dark:to-gray-300 sm:text-6xl"
        >
          Architected for speed and reliability
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
          Harness the power of AI to revolutionize your project budgeting. Buildease&apos;s AI-driven 
          estimating tool analyzes historical data, current market trends, and material costs to 
          generate precise estimates in seconds. This automated approach minimizes human error, 
          adapts to real-time changes, and ensures that your bids are both competitive and profitable.
        </p>
        <dl className="mt-12 grid grid-cols-1 gap-y-8 dark:border-gray-800 md:grid-cols-3 md:border-y md:border-gray-200 md:py-14">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="text-center md:border-l md:border-gray-200 md:first:border-none md:dark:border-gray-800">
                <dd className="inline-block bg-gradient-to-t from-[#2286B9] to-[#2286B9] bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-[#2286B9] dark:to-blue-400 lg:text-6xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-gray-900 dark:text-gray-900">
                  {stat.name}
                </dt>
                <p className="mx-auto mt-2 max-w-xs text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
}