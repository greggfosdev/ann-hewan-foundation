import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Back 2 School Initiative",
  description:
    "Providing school supplies, uniforms, and educational resources to over 300 students annually.",
};

const stats = [
  { value: "300+", label: "Students Supported" },
  { value: "5", label: "Schools Served" },
  { value: "15", label: "Years Running" },
  { value: "100%", label: "To Programs" },
];

const features = [
  {
    title: "School Uniform Distribution",
    description:
      "Every child receives a complete school uniform, allowing them to attend school with pride and confidence.",
  },
  {
    title: "Backpacks & Supplies",
    description:
      "We provide quality backpacks filled with essential school supplies including notebooks, pens, pencils, and more.",
  },
  {
    title: "Textbooks & Learning Materials",
    description:
      "Students receive the textbooks and educational materials they need to succeed in their studies.",
  },
  {
    title: "Shoes & Essential Items",
    description:
      "We ensure children have proper footwear and other essentials needed for school attendance.",
  },
];

export default function BackToSchoolPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean/10 to-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-medium text-ocean-dark hover:text-ocean transition-colors mb-6"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              All Programs
            </Link>
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ocean/20 text-ocean">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Back 2 School Initiative
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Every child deserves to start the school year with pride. We
              provide school supplies, uniforms, and educational resources to
              over 300 students annually.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/donate?program=school"
                className="w-full rounded-full bg-ocean px-8 py-4 text-base font-semibold text-white shadow-lg shadow-ocean/30 hover:bg-ocean-dark hover:shadow-ocean/40 transition-all sm:w-auto"
              >
                Support This Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-cream p-6 text-center ring-1 ring-sand-dark/50"
              >
                <p className="text-3xl font-bold text-ocean sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery - Moved up for better UX */}
      <section id="gallery" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Distribution Day
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See the joy on children&apos;s faces as they receive their school
              supplies.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: "/images/back-to-school/school-1.webp", alt: "Volunteer holding a backpack ready for distribution" },
              { src: "/images/back-to-school/school-2.webp", alt: "Community members lining up at the distribution event" },
              { src: "/images/back-to-school/school-3.webp", alt: "Goodwill School Alumni Foundation volunteer organizing supplies" },
              { src: "/images/back-to-school/school-4.webp", alt: "Tables filled with notebooks and school supplies ready for students" },
            ].map((photo, i) => (
              <div
                key={i}
                className="aspect-[3/4] overflow-hidden rounded-xl bg-sand shadow-sm ring-1 ring-gray-900/5"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray-500">
            Volunteers from the Goodwill School Alumni Foundation prepare and distribute school supplies to students in the community.
          </p>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
              <p className="mt-4 text-lg text-gray-600">
                For many families in Goodwill and surrounding communities, the cost of school supplies and
                uniforms is a significant burden. Some children miss school or
                attend without proper materials, affecting their education and
                self-esteem.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                In Jamaica, school uniforms are required, and children without
                proper uniforms may face embarrassment or even be turned away.
                The cost of supplies, books, and shoes can force families to
                choose between education and other necessities.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
              <p className="mt-4 text-lg text-gray-600">
                Each year before school starts, we host our Back 2 School
                distribution event where children receive everything they need
                for the school year: uniforms, backpacks, supplies, and shoes.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                By providing these essentials, we remove barriers to education
                and ensure every child can start the school year with confidence
                and pride. The joy on their faces during distribution day is
                unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Provide
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything a student needs to succeed in school.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Campaign */}
      <section className="bg-ocean py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-ocean-light">
              Current Campaign
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Back 2 School 2026
            </h2>
            <p className="mt-4 text-lg text-ocean-light">
              Help us provide school supplies and uniforms for 200+ students
              this academic year.
            </p>

            {/* Progress bar */}
            <div className="mt-8 mx-auto max-w-md">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-white">$3,500 raised</span>
                <span className="text-ocean-light">$10,000 goal</span>
              </div>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-gold transition-all duration-1000"
                  style={{ width: "35%" }}
                />
              </div>
              <p className="mt-2 text-sm text-ocean-light">35% complete</p>
            </div>

            <div className="mt-8">
              <Link
                href="/donate?campaign=back-to-school"
                className="inline-flex rounded-full bg-gold px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all"
              >
                Contribute to This Campaign
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <svg
              className="mx-auto h-12 w-12 text-ocean/40"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">
              &ldquo;The Back 2 School program lifted such a burden from our
              family. My children could start the year with pride, not
              shame.&rdquo;
            </blockquote>
            <p className="mt-6 text-lg text-gray-600">
              — Marcia T., Parent of 3
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Equip a Student for Success
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              <strong className="text-ocean">$50</strong> provides a complete
              uniform and basic supplies.{" "}
              <strong className="text-ocean">$100</strong> provides everything a
              student needs for the year.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/donate?program=school"
                className="w-full rounded-full bg-ocean px-8 py-4 text-base font-semibold text-white shadow-lg shadow-ocean/30 hover:bg-ocean-dark hover:shadow-ocean/40 transition-all sm:w-auto"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="w-full rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm hover:border-ocean hover:text-ocean-dark transition-all sm:w-auto"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
