"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  emotionalLabel: string;
}

const stats: Stat[] = [
  {
    value: 150,
    suffix: "+",
    label: "Children Fed Daily",
    emotionalLabel: "Children who won't go hungry today",
  },
  {
    value: 300,
    suffix: "+",
    label: "Students Supported",
    emotionalLabel: "Dreams we're helping achieve",
  },
  {
    value: 15,
    label: "Years of Service",
    emotionalLabel: "Years of love and commitment",
  },
  {
    value: 100,
    suffix: "%",
    label: "To Programs",
    emotionalLabel: "Of donations fund programs",
  },
];

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function ImpactStats() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">
            Our Impact
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Making a Real Difference
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Every number represents a life touched, a meal served, and hope restored.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-center rounded-2xl bg-cream p-6 text-center ring-1 ring-sand-dark/50"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-3 w-12 rounded-full bg-gradient-to-r from-gold to-coral" />
              </div>

              <dd className="mt-4 text-4xl font-bold tracking-tight text-gold sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-3 text-sm font-medium text-gray-900">
                {stat.emotionalLabel}
              </dt>
            </div>
          ))}
        </dl>

        {/* Progress towards current goal */}
        <div className="mt-16 mx-auto max-w-2xl">
          <div className="rounded-2xl bg-gradient-to-r from-ocean to-ocean-dark p-8 text-center text-white">
            <p className="text-sm font-medium text-ocean-light uppercase tracking-wider">
              Current Goal
            </p>
            <p className="mt-2 text-2xl font-bold">
              Back 2 School 2026
            </p>
            <p className="mt-2 text-ocean-light">
              Help us provide school supplies and assist 200+ students with uniforms
            </p>

            <div className="mt-6">
              <div className="flex justify-between text-sm">
                <span className="font-medium">$875 raised</span>
                <span className="text-ocean-light">$10,000 goal</span>
              </div>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-gold transition-all duration-1000"
                  style={{ width: "9%" }}
                />
              </div>
              <p className="mt-2 text-sm text-ocean-light">
                9% complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
