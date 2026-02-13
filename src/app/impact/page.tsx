import { Metadata } from "next";
import Link from "next/link";
import { AnnualReports } from "@/components/sections/AnnualReports";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See the measurable impact of The Ann Hewan Foundation on Goodwill and surrounding communities.",
};

const impactStats = [
  { label: "Children Fed Daily", value: "150+", description: "Through our Breakfast Project", color: "gold" },
  { label: "Students Supported", value: "300+", description: "With school supplies and uniforms", color: "ocean" },
  { label: "Years of Service", value: "15", description: "Serving Goodwill & surrounding communities", color: "coral" },
  { label: "Meals Served Annually", value: "25,000+", description: "Nutritious breakfasts", color: "gold" },
  { label: "Families Reached", value: "100+", description: "Direct community support", color: "ocean" },
  { label: "Volunteers Engaged", value: "25+", description: "Dedicated community members", color: "coral" },
];

const colorMap = {
  gold: "text-gold",
  ocean: "text-ocean",
  coral: "text-coral",
};

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Measurable Change
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Impact
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gold to-coral" />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transparent, measurable change in the lives of families in Goodwill and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              By the Numbers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real impact, measured and reported with full transparency.
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="relative rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-900/5"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-2 w-10 rounded-full bg-gradient-to-r from-gold to-coral" />
                </div>
                <dt className="text-sm font-medium text-gray-600 mt-2">
                  {stat.label}
                </dt>
                <dd className={`mt-2 text-4xl font-bold tracking-tight ${colorMap[stat.color as keyof typeof colorMap]}`}>
                  {stat.value}
                </dd>
                <dd className="mt-2 text-sm text-gray-500">
                  {stat.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Stories from the Community */}
      <section className="bg-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Real Stories
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stories from the Community
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The real impact is in the lives changed.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {[
              {
                quote:
                  "The breakfast program means my children can focus on learning instead of hunger. It has changed everything for our family.",
                name: "Mother of 3",
                location: "Goodwill, St. James",
                color: "gold",
              },
              {
                quote:
                  "Getting school supplies and a new uniform made me feel proud to go to school. I want to study hard and make my community proud.",
                name: "Student, Age 12",
                location: "Goodwill Basic School",
                color: "ocean",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5"
              >
                <div className={`h-1 w-12 rounded-full bg-${testimonial.color} mb-6`} />
                <blockquote className="text-lg leading-8 text-gray-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-trust-green">
              Full Transparency
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Financial Transparency
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              As a 501(c)(3) nonprofit organization, we are committed to complete
              transparency in how donations are used.
            </p>

            <div className="mt-12 rounded-2xl bg-cream p-8 ring-1 ring-sand-dark/50">
              <h3 className="text-lg font-semibold text-gray-900">
                How Your Donation is Used
              </h3>
              <p className="mt-2 text-sm text-trust-green font-medium">
                100% of public donations go directly to programs
              </p>
              <p className="mt-4 text-gray-600">
                All administrative and fundraising costs are covered by our founders
                and board members, ensuring every dollar you donate goes directly
                to helping children and families.
              </p>
              <div className="mt-6">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">
                    Programs & Services
                  </span>
                  <span className="font-bold text-trust-green">100%</span>
                </div>
                <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-trust-green"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="bg-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Working Together
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Partners
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Organizations working alongside us to uplift our communities.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              {
                name: "Goodwill School Alumni Foundation",
                logo: "/images/partners/gsaf.jpg",
                href: "https://gsafoundation.com/",
              },
              {
                name: "Jamaica Tours Limited",
                logo: "/images/partners/jtl.webp",
                href: "https://jamaicatoursltd.com/",
              },
              {
                name: "Giving 4 Hope",
                logo: "/images/partners/giving4hope.webp",
                href: "https://www.giving4hope.org/",
              },
              {
                name: "Ray Peeples Ministries",
                logo: "/images/partners/rpm.webp",
                href: "https://www.raypeeples.com/",
              },
            ].map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 transition-shadow group-hover:shadow-md group-hover:ring-gold/30">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-gray-700 group-hover:text-gold-dark transition-colors">
                  {partner.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <AnnualReports />

      {/* Photo Gallery Preview */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              See Our Work
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Photo Gallery
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See our work in action.
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3 lg:max-w-none lg:grid-cols-4">
            {[
              { src: "/images/impact/impact-1.webp", alt: "Community gathering at Goodwill School Alumni Foundation event" },
              { src: "/images/impact/impact-2.webp", alt: "Community member receiving health screening" },
              { src: "/images/impact/impact-3.webp", alt: "Volunteers organizing community event" },
              { src: "/images/impact/impact-4.webp", alt: "Goodwill School Alumni Foundation banner" },
              { src: "/images/impact/impact-5.webp", alt: "Mobile health screening unit in the community" },
              { src: "/images/impact/impact-6.webp", alt: "Speaker addressing community members at event" },
              { src: "/images/impact/impact-7.webp", alt: "Children standing at community gathering" },
              { src: "/images/impact/impact-8.webp", alt: "Volunteer speaking at foundation event" },
            ].map((photo, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray-500">
            Community events, health screenings, and gatherings organized in partnership with the Goodwill School Alumni Foundation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Help Us Do More
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your support makes this impact possible.
            </p>
            <div className="mt-8">
              <Link
                href="/donate"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
