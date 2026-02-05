import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showStats?: boolean;
}

const stats = [
  { value: "500+", label: "Children Fed Daily" },
  { value: "1,000+", label: "Students Supported" },
  { value: "15", label: "Years of Service" },
  { value: "100%", label: "To Programs" },
];

export function Hero({
  title = "Uplifting the Goodwill Community",
  subtitle = "The Ann Hewan Foundation is dedicated to improving lives in Goodwill, St. James, Jamaica through education, nutrition, and sustainable community development.",
  ctaText = "Donate Now",
  ctaHref = "/donate",
  secondaryCtaText = "Watch Our Story",
  secondaryCtaHref = "#video",
  showStats = true,
}: HeroProps) {
  return (
    <section className="relative bg-cream overflow-hidden">
      {/* Subtle decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5A623' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top content area */}
        <div className="pt-16 pb-8 sm:pt-20 sm:pb-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-dark mb-6">
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            501(c)(3) Nonprofit • Jamaica, West Indies
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Decorative line */}
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gold to-coral" />

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href={ctaHref}
              className="w-full rounded-full bg-gold px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all sm:w-auto"
            >
              {ctaText}
            </Link>
            <Link
              href={secondaryCtaHref}
              className="group w-full flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 hover:border-ocean hover:text-ocean transition-all sm:w-auto"
            >
              <svg
                className="h-5 w-5 text-ocean"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              {secondaryCtaText}
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto max-w-5xl pb-8">
          <div className="aspect-[2/1] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/5">
            <img
              src="/images/hero/children-hero.webp"
              alt="Smiling children in school uniforms from the Goodwill community in Jamaica"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Stats overlay */}
          {showStats && (
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl px-4 py-4 text-center shadow-lg ring-1 ring-gray-900/5"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-gold">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Spacer for stats overlay */}
        {showStats && <div className="h-12 sm:h-16" />}
      </div>
    </section>
  );
}
