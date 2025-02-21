'use client';

//To get started, run "npm i cobe"
import { RiArrowRightSLine } from '@remixicon/react';
import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(function () {
    let phi = 4;
    let globe: ReturnType<typeof createGlobe>;

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 800 * 2,
        height: 800 * 2,
        phi: 0,
        theta: -0.3,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 30000,
        mapBrightness: 13,
        mapBaseBrightness: 0.01,
        baseColor: [1, 1, 1],
        glowColor: [1, 1, 1],
        markerColor: [100, 100, 100],
        markers: [],
        onRender: function (state) {
          state.phi = phi;
          phi += 0.0005;
        },
      });
    }

    return function () {
      if (globe) {
        globe.destroy();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 700, height: 700 }}
      className="absolute -right-72 top-40 z-10 aspect-square size-full max-w-fit transition-transform group-hover:scale-[1.01] sm:top-12 lg:-right-60 lg:top-0"
    />
  );
}

export default function Example() {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-3 py-8 sm:py-20">
        <span className="block text-lg font-semibold tracking-tighter text-[#2286B9] animate-pulse drop-shadow-[0_0_8px_rgba(34,134,185,0.5)]">
          Autonomous Growth Systems
        </span>
        <h2
          id="features-title"
          className="mt-2 inline-block bg-gradient-to-b from-black to-zinc-700 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent dark:from-gray-0 dark:to-zinc-500 sm:text-5xl"
        >
          Revolutionize the way your business grows
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
        Harness AI to streamline planning, cut costs, and deliver projects faster, giving your business a competitive edge.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <a
            href="#"
            className="group relative col-span-1 overflow-hidden rounded-b rounded-t-2xl bg-[rgb(255,255,255)] p-8 shadow-2xl shadow-black/10 ring-1 ring-[rgb(242,242,242)] dark:bg-[rgb(248,248,248)] dark:ring-[rgb(238,238,238)] lg:col-span-2 lg:rounded-l-2xl lg:rounded-r"
          >
            <div className="relative z-20">
              <h3 className="text-2xl font-semibold text-[rgb(0,0,0)] dark:text-black-900">
              Intelligent Project Planning and Design
              </h3>
              <p className="mt-4 max-w-sm text-gray-700 dark:text-gray-400">
              Leverage AI to analyze historical data and optimize project planning, ensuring efficient resource allocation and accurate scheduling. 
              Our system enhances design processes by quickly generating multiple scenarios, allowing for informed decision-making and reduced project timelines.
              </p>
              <div className="mt-12 flex w-fit items-center gap-0.5 rounded bg-white/10 px-2 py-1 text-blue-500 backdrop-blur-[3px]">
                <span>Explore features</span>
                <RiArrowRightSLine className="mt-0.5 size-5 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:opacity-20" />
              </div>
            </div>
            <GlobeCanvas />
          </a>
          <div className="rounded-b-2xl rounded-t bg-gradient-to-br from-[#2286B9] to-[#1a6991] p-8 shadow-lg shadow-[#2286B9]/20 lg:rounded-l lg:rounded-r-2xl">
            <figure className="flex h-full flex-col justify-between">
              <blockquote className="text-base font-medium text-gray-50 sm:text-lg/8">
                <p className="relative bg-gradient-to-br from-blue-100 to-white bg-clip-text font-medium leading-7 tracking-tighter text-transparent before:absolute before:right-full before:top-0">
                  &quot;Buildease has given us a clear edge over the competition at Visionary Enterprise. 
                  Its AI-driven tools, like predictive scheduling and automated quality control, streamline our processes, 
                  cut costs, and ensure top-tier results. This game-changing platform is the reason we stay ahead in the industry.&quot;
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center space-x-4 sm:mt-0">
                <div className="flex-auto">
                  <div className="mt-7 text-sm font-semibold text-gray-50">
                    <div>
                      <span className="absolute inset-0" />
                      Gabriel Gratton
                    </div>
                  </div>
                  <span className="text-sm text-blue-200">
                    CEO, Visionary Enterprise
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}