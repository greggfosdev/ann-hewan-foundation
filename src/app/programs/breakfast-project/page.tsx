import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Breakfast Project",
  description:
    "Providing nutritious morning meals to over 150 children daily in Goodwill and surrounding communities.",
};

const stats = [
  { value: "150+", label: "Children Fed Daily" },
  { value: "25,000+", label: "Meals Served Annually" },
  { value: "5", label: "Schools Served" },
  { value: "100%", label: "To Programs" },
];

const features = [
  {
    title: "Daily Breakfast Service",
    description:
      "Every school day, we serve nutritious breakfast to children at local schools, ensuring they start the day ready to learn.",
  },
  {
    title: "Nutritionally Balanced Meals",
    description:
      "Our meals are designed with nutrition in mind, providing the energy and nutrients children need for growth and learning.",
  },
  {
    title: "Weekend Food Packages",
    description:
      "For families in greatest need, we provide weekend food packages to ensure children don't go hungry when school is out.",
  },
  {
    title: "Nutrition Education",
    description:
      "We work with parents and caregivers to provide nutrition education, helping families make healthy choices.",
  },
];

export default function BreakfastProjectPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gold/10 to-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold transition-colors mb-6"
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
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/20 text-gold">
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
                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              The Breakfast Project
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              No child should have to learn on an empty stomach. Our flagship
              program ensures that over 150 children in Goodwill and surrounding communities start each
              school day with a nutritious breakfast.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/donate?program=breakfast"
                className="w-full rounded-full bg-gold px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all sm:w-auto"
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
                <p className="text-3xl font-bold text-gold sm:text-4xl">
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
              See Our Work
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Photos from the Breakfast Project in action at Goodwill Primary School.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-900/10">
              <img
                src="/images/breakfast/breakfast-1.webp"
                alt="Children in school uniforms enjoying breakfast together at a table with red tablecloth"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-900/10">
              <img
                src="/images/breakfast/breakfast-2.webp"
                alt="Students drinking from cups during the morning breakfast program"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray-500">
            Children in their school uniforms enjoy nutritious breakfast before classes begin.
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
                In Goodwill and surrounding communities, many families struggle to provide
                consistent meals for their children. Children who come to school
                hungry cannot focus, learn, or reach their potential.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Studies show that hunger affects cognitive development, academic
                performance, and long-term health. Without intervention, these
                children face compounding disadvantages that can last a lifetime.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
              <p className="mt-4 text-lg text-gray-600">
                The Breakfast Project provides a simple but powerful solution: a
                nutritious breakfast for every child, every school day. By
                partnering with local schools and community volunteers, we ensure
                that no child has to learn on an empty stomach.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our meals are prepared with care, using fresh ingredients and
                recipes designed to provide sustained energy throughout the
                morning. The result: children who can focus, learn, and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A comprehensive approach to fighting childhood hunger.
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

      {/* Testimonial */}
      <section className="bg-gold py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <svg
              className="mx-auto h-12 w-12 text-white/60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="mt-8 text-2xl font-medium text-white sm:text-3xl">
              &ldquo;Before the breakfast program, I couldn&apos;t focus in
              school because I was so hungry. Now I can learn and dream about
              becoming a doctor.&rdquo;
            </blockquote>
            <p className="mt-6 text-lg text-gold-light">
              — Kadijah, Age 10, Goodwill Primary School
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Help Us Feed More Children
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              <strong className="text-gold">$25</strong> provides breakfast for
              one child for an entire month.{" "}
              <strong className="text-gold">$300</strong> feeds a child for the
              whole school year.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/donate?program=breakfast"
                className="w-full rounded-full bg-gold px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all sm:w-auto"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="w-full rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm hover:border-gold hover:text-gold-dark transition-all sm:w-auto"
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
