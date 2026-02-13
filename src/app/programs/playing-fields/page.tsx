import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Playing Fields Project",
  description:
    "Building safe recreational spaces that bring youth together and strengthen Goodwill and surrounding communities.",
};

const stats = [
  { value: "1", label: "Field In Progress" },
  { value: "200+", label: "Youth To Be Served" },
  { value: "2026", label: "Target Completion" },
  { value: "100%", label: "Community Led" },
];

const features = [
  {
    title: "Community Playing Fields",
    description:
      "We build and maintain safe, quality playing fields where children and youth can exercise, play sports, and build friendships.",
  },
  {
    title: "Sports Equipment",
    description:
      "We provide footballs, netballs, and other sports equipment so children have what they need to play and compete.",
  },
  {
    title: "Youth Sports Leagues",
    description:
      "We organize sports leagues and tournaments that teach teamwork, discipline, and healthy competition.",
  },
  {
    title: "Community Fitness",
    description:
      "Our fields serve the whole community, providing space for fitness activities, community gatherings, and events.",
  },
];

export default function PlayingFieldsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-coral/10 to-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-medium text-coral hover:opacity-80 transition-colors mb-6"
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
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-coral/20 text-coral">
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Playing Fields Project
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Safe recreational spaces transform communities. We build and
              maintain playing fields that bring youth together, promote health,
              and create positive outlets for energy and creativity.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/donate?program=fields"
                className="w-full rounded-full bg-coral px-8 py-4 text-base font-semibold text-white shadow-lg shadow-coral/30 hover:opacity-90 transition-all sm:w-auto"
              >
                Support This Program
              </Link>
              <a
                href="#video"
                className="w-full flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 hover:border-coral hover:text-coral transition-all sm:w-auto"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Video
              </a>
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
                <p className="text-3xl font-bold text-coral sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Moved up */}
      <section id="video" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Watch the Transformation
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See our progress as we transform an empty lot into a vibrant community space.
            </p>
          </div>

          {/* Video Embed */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-2xl ring-1 ring-gray-900/10">
              <iframe
                src="https://player.vimeo.com/video/999982778?h=7b584e31e9"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                title="Playing Field Development - Ann Hewan Foundation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Moved up for better UX */}
      <section id="gallery" className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Construction Progress
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Follow along as we build this community space.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3 lg:max-w-none lg:grid-cols-4">
            {[
              { src: "/images/playing-fields/field-1.webp", alt: "Site clearing and early groundwork for the playing field" },
              { src: "/images/playing-fields/field-2.webp", alt: "Foundation trench dug alongside the school building" },
              { src: "/images/playing-fields/field-3.webp", alt: "Rebar installation and concrete foundation being poured" },
              { src: "/images/playing-fields/field-4.webp", alt: "Concrete blocks and building materials on site" },
              { src: "/images/playing-fields/field-5.webp", alt: "Community volunteers working on the wall construction" },
              { src: "/images/playing-fields/field-6.webp", alt: "Field area being prepared with soil piles" },
              { src: "/images/playing-fields/field-7.webp", alt: "Workers continuing construction on the playing field" },
              { src: "/images/playing-fields/field-8.webp", alt: "Block wall construction progress along the school" },
            ].map((photo, i) => (
              <div
                key={i}
                className="aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5"
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
            Construction is underway with community involvement. The field is being built adjacent to the local school.
          </p>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
              <p className="mt-4 text-lg text-gray-600">
                In many rural Jamaican communities, children lack safe spaces to
                play and exercise. Without proper recreational facilities, youth
                may turn to less constructive activities, and the community
                misses opportunities to come together.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Physical activity is essential for children&apos;s health and
                development. Sports teach valuable life skills like teamwork,
                discipline, and perseverance. But these benefits require safe
                spaces to play.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
              <p className="mt-4 text-lg text-gray-600">
                We partner with the community to identify suitable land and
                transform it into safe, well-maintained playing fields. Our
                fields are designed to support multiple sports and activities.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                But we don&apos;t just build fields - we create programs. Youth
                sports leagues, fitness classes, and community events ensure the
                fields are used to their full potential, bringing people
                together and building a stronger community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Building spaces and programs for community health.
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
      <section className="bg-coral py-24 sm:py-32">
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
              &ldquo;The foundation doesn&apos;t just help individuals—they&apos;re
              rebuilding our entire community. The playing fields brought our
              youth together.&rdquo;
            </blockquote>
            <p className="mt-6 text-lg text-white/80">
              — Devon S., Community Leader
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Help Us Complete the Field
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Your support helps us finish construction and create a safe space
              where youth can play, exercise, and build community together.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/donate?program=fields"
                className="w-full rounded-full bg-coral px-8 py-4 text-base font-semibold text-white shadow-lg shadow-coral/30 hover:opacity-90 transition-all sm:w-auto"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="w-full rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm hover:border-coral hover:text-coral transition-all sm:w-auto"
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
