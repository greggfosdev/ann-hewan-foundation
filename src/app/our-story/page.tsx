import { Metadata } from "next";
import Link from "next/link";
import { Timeline } from "@/components/sections/Timeline";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about Ann Hewan, Goodwill and the surrounding communities, and the foundation's mission to uplift families in Jamaica.",
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
              children of Goodwill and surrounding communities.
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
                  Ann Hewan was a sister, an aunt, an impromptu grandmother, a
                  neighbor, a friend, and a pillar of the Goodwill Community.
                </p>
                <p>
                  Aunt Ann was born and raised in Goodwill, St. James, Jamaica,
                  W.I. She was an active member of the Goodwill United Church.
                  Furthermore, she was known as the woman of many hats and the
                  kindest neighbor in the community. If you were hungry she would
                  feed you, if you were tired she would give you a place to stay.
                  Aunt Ann wanted to make sure everyone was taken care of. Her
                  selflessness radiates through the streets of Goodwill even years
                  after her passing. People talk about her compassion and love
                  every day.
                </p>
                <p>
                  Aunt Ann had no children of her own, but devoted herself to her
                  community, taking care of the many children within her area.
                  Family members like her niece would allow Aunt Ann to take care
                  of their children while they were in the process of migrating to
                  the United States of America.
                </p>
                <p>
                  You would never know that Aunt Ann did not have any children of
                  her own—she was always accompanied by someone&apos;s child in the
                  community. When her niece left her son, Eddie Peters
                  &ldquo;Pete,&rdquo; he would accompany her everywhere she went,
                  and his friends followed. Her title quickly expanded from just
                  Ann Hewan, to Aunt Ann, to &ldquo;Pete&apos;s&rdquo;
                  Grandmother.
                </p>
                <p>
                  Her aura of positivity was something people gravitated towards.
                  When you were with her, you might have came with nothing, or
                  might not have needed anything, but you always left with
                  something. Whether that was a full belly from a great meal,
                  fruits and vegetables from her garden, dessert she had baked, or
                  even just a new story to share with your loved ones—you always
                  left with something.
                </p>
                <p>
                  Aunt Ann was one of the most soft spoken, kindest souls you
                  could come across. Her belief was that love, compassion,
                  education, and a good meal could change someone&apos;s life for
                  the better. Her beliefs trickle down in the mission of this
                  organization.
                </p>
                <p>
                  The Ann Hewan Foundation strives to uphold her pillars of
                  community and share her love and compassion through charity. Her
                  energy is the very glue to this foundation.
                </p>
                <p>
                  In her honor we will be compassionate, loving, selfless,
                  passionate, gracious, charitable, and educated. Moreover, we
                  will uplift the Goodwill Community and the neighboring areas to
                  uphold these same pillars—so that they too can experience Ann
                  Hewan&apos;s grace through kind work.
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

      {/* Our Mission */}
      <section className="bg-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white p-10 shadow-lg ring-1 ring-gray-900/5 text-center sm:p-14">
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-gold to-coral" />
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">
                Our Purpose
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our mission is to uplift the people of our community, by providing
                schools, churches, and those in need with adequate resources to
                help promote prosperity. By doing so we are committed to inspire
                and empower the youth to uphold Ann Hewan&apos;s 7 Pillars of
                Community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Pillars of Community */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              What Guides Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Her 7 Pillars of Community
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The values Ann Hewan lived by, and the foundation we build upon.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {[
              {
                name: "Compassionate",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
              {
                name: "Selfless",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
              },
              {
                name: "Educated",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                ),
              },
              {
                name: "Passionate",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
                  </svg>
                ),
              },
              {
                name: "Loving",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
              {
                name: "Gracious",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
              },
              {
                name: "Charitable",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.name}
                className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-900/5"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {value.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Communities We Serve */}
      <section className="bg-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-ocean">
              Where We Serve
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Communities
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Goodwill, Davis Pen, Chatham, Blyston, Edenvale, and Johnson
                Hill are vibrant communities nestled in the parish of St. James,
                Jamaica. Like many rural Jamaican communities, they face economic
                challenges that can make daily life difficult for families.
              </p>
              <p>
                Despite these challenges, the people of these communities are
                resilient, hardworking, and deeply committed to their
                children&apos;s futures. They are rich in culture, spirit, and
                the determination to build a better tomorrow.
              </p>
              <p>
                Our foundation works alongside community members—not as
                outsiders, but as partners. We believe that sustainable change
                comes from within, and our role is to provide resources and
                support while the communities lead the way.
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
                { name: "Jaida Williams", role: "Director of Philanthropy" },
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
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Honors
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Achievements & Recognition
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Recognition that reflects our foundation&apos;s unwavering commitment to
              empowering communities and promoting cultural heritage.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            {/* Congressional Recognition */}
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5 sm:p-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                {/* Text Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-dark mb-4">
                    Congressional Record &middot; June 2025
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Distinguished Leader in Central Florida
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Founder and President Edgar &ldquo;Pete&rdquo; Peters was honored
                    as a Distinguished Leader in Central Florida for Caribbean Heritage
                    Month by Congressman Darren Soto.
                  </p>
                  <p className="mt-4 text-gray-600">
                    Pete was officially recognized and awarded in the Congressional
                    Record, honoring his remarkable impact in Central Florida and
                    beyond. His dedication to empowering Caribbean communities and
                    promoting cultural heritage through the Ann Hewan Foundation earned
                    him this distinguished recognition from the United States House of
                    Representatives.
                  </p>
                </div>

                {/* Photo - Pete with Congressman Soto */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-900/5">
                    <img
                      src="/images/recognition/pete-congressman-soto.webp"
                      alt="Edgar Pete Peters receiving recognition from Congressman Darren Soto at the Caribbean Heritage Month event"
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm text-gray-500">
                    Edgar &ldquo;Pete&rdquo; Peters with Congressman Darren Soto
                  </p>
                </div>
              </div>

              {/* Documents */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl shadow-md ring-1 ring-gray-900/5">
                  <img
                    src="/images/recognition/congressional-record.webp"
                    alt="Congressional Record honoring Edgar Pete Peters as a Distinguished Leader in Central Florida for Caribbean Heritage Month"
                    className="w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-md ring-1 ring-gray-900/5">
                  <img
                    src="/images/recognition/congressional-invitation.webp"
                    alt="Official invitation letter from Congressman Darren Soto for the Caribbean Heritage Month event"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
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
