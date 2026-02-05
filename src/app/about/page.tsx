import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the Ann Hewan Foundation and our mission.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Who We Are
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Us
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gold to-coral" />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Ann Hewan Foundation was established with a simple yet powerful
              vision: to create lasting positive change in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                  Our Beginning
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">Our Story</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Founded in dedication to Ann Hewan&apos;s legacy of compassion and
                  service, our foundation continues her commitment to helping
                  those in need. We believe that everyone deserves the opportunity
                  to thrive, and we work tirelessly to make that vision a reality.
                </p>
                <div className="mt-6">
                  <Link
                    href="/our-story"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
                  >
                    Read our full story <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-ocean">
                  Our Purpose
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-600">
                  To empower individuals and strengthen communities through
                  education, support services, and sustainable development
                  initiatives in Goodwill, St. James, Jamaica.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-coral">
                  What Guides Us
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">Our Values</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      name: "Compassion",
                      description: "We lead with empathy and understanding in all we do.",
                      color: "gold",
                    },
                    {
                      name: "Integrity",
                      description: "We maintain the highest standards of transparency and accountability.",
                      color: "ocean",
                    },
                    {
                      name: "Impact",
                      description: "We focus on creating meaningful, measurable change.",
                      color: "coral",
                    },
                    {
                      name: "Community",
                      description: "We believe in the power of people coming together.",
                      color: "trust-green",
                    },
                  ].map((value) => (
                    <div
                      key={value.name}
                      className="rounded-xl bg-cream p-6 ring-1 ring-sand-dark/50"
                    >
                      <h3 className="font-semibold text-gray-900">{value.name}</h3>
                      <p className="mt-2 text-sm text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-ocean to-ocean-dark py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Join Us in Making a Difference
            </h2>
            <p className="mt-4 text-lg text-ocean-light">
              Your support helps us continue Ann&apos;s legacy of compassion and service.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/donate"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
