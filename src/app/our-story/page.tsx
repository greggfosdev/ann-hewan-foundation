import { Metadata } from "next";
import Link from "next/link";
import { Timeline } from "@/components/sections/Timeline";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about Ann Hewan, the Goodwill community, and the foundation's mission to uplift families in Jamaica.",
};

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Our Foundation
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Story
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gold to-coral" />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A legacy of love, community, and unwavering commitment to the
              children of Goodwill.
            </p>
          </div>
        </div>
      </section>

      {/* About Ann Hewan */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                Our Inspiration
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Remembering Ann Hewan
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-gray-600">
                <p>
                  Ann Hewan was more than a name—she was a beacon of hope in the
                  Goodwill community of St. James, Jamaica. Her life was defined
                  by an extraordinary compassion for children and families in
                  need.
                </p>
                <p>
                  Born and raised in Jamaica, Ann understood the challenges
                  facing her community. She believed that every child deserved a
                  chance to succeed, regardless of their circumstances. This
                  belief drove her to action, and her kitchen became a gathering
                  place where no child went hungry.
                </p>
                <p>
                  Though Ann has passed, her spirit lives on through this
                  foundation. We carry forward her mission with the same love
                  and dedication that defined her life.
                </p>
              </div>
            </div>
            <div className="relative lg:sticky lg:top-24">
              {/* Ann Hewan with Founder photo */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5">
                <img
                  src="/images/about/ann-hewan-with-founder.webp"
                  alt="Ann Hewan with the founder of the foundation"
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-gray-500">
                Ann Hewan (right) with the founder
              </p>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-48 w-48 rounded-full bg-gold/10" />
            </div>
          </div>
        </div>
      </section>

      {/* The Goodwill Community */}
      <section className="bg-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-ocean">
              Where We Serve
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Goodwill Community
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Goodwill is a vibrant community nestled in the parish of St.
                James, Jamaica. Like many rural Jamaican communities, Goodwill
                faces economic challenges that can make daily life difficult for
                families.
              </p>
              <p>
                Despite these challenges, the people of Goodwill are resilient,
                hardworking, and deeply committed to their children&apos;s
                futures. The community is rich in culture, spirit, and the
                determination to build a better tomorrow.
              </p>
              <p>
                Our foundation works alongside community members—not as
                outsiders, but as partners. We believe that sustainable change
                comes from within, and our role is to provide resources and
                support while the community leads the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Founders & Leadership */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Our Team
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Leadership
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Dedicated individuals committed to honoring Ann&apos;s legacy.
            </p>
          </div>

          {/* Founder - Featured */}
          <div className="mx-auto mt-16 max-w-sm text-center">
            <div className="mx-auto h-72 w-56 overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-900/5">
              <img
                src="/images/about/founder.webp"
                alt="Edgar Pete Peters - Founder & President"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Edgar &ldquo;Pete&rdquo; Peters
            </h3>
            <p className="text-gold-dark font-medium">Founder & President</p>
          </div>

          {/* Board Members */}
          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
              Board Members
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { name: "Jaida Williams", role: "Chief Operations Officer & Director of Philanthropy" },
                { name: "Jhamyr Peters", role: "Executive Director" },
                { name: "Lark Wallace", role: "Accountant" },
                { name: "Stacy Ann Earl Peters", role: "Treasury" },
                { name: "Gisela Alvarez", role: "Board Member" },
                { name: "Egda Avila", role: "Board Member" },
                { name: "Wendy Williams-Brown", role: "Board Member" },
                { name: "Joseph Hamilton", role: "Board Member" },
                { name: "Wendy Shakespear", role: "Board Member" },
                { name: "Romeo Mitchell", role: "Board Member" },
                { name: "Newton Wholas", role: "Board Member" },
              ].map((person) => (
                <div key={person.name} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-900/5">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gold">
                      {person.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{person.name}</p>
                    <p className="text-sm text-gray-500">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              What Guides Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {[
              {
                name: "Community First",
                description:
                  "Every decision centers on what's best for the families we serve.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
              {
                name: "Transparency",
                description:
                  "We maintain complete openness about our finances and operations.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                name: "Sustainability",
                description:
                  "Building lasting solutions, not temporary fixes.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                  </svg>
                ),
              },
              {
                name: "Dignity",
                description:
                  "Serving others with respect and preserving their self-worth.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.name}
                className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {value.name}
                </h3>
                <p className="mt-4 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-ocean to-ocean-dark py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Be Part of Our Story
            </h2>
            <p className="mt-4 text-lg text-ocean-light">
              Join us in continuing Ann&apos;s legacy of compassion and service.
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
