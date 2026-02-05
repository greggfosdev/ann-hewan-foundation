import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { ProgramCards } from "@/components/sections/ProgramCards";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { DonorWall } from "@/components/sections/DonorWall";

export default function Home() {
  return (
    <>
      {/* Hero Section with Donation CTA */}
      <Hero />

      {/* Impact Statistics */}
      <ImpactStats />

      {/* Video Section */}
      <section id="video" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              See Our Impact
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Watch Our Story
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how your support transforms lives in the Goodwill community.
            </p>
          </div>

          {/* Video Grid - Mixed aspect ratios */}
          <div className="mx-auto mt-12 flex flex-col items-center gap-12 lg:flex-row lg:justify-center lg:items-start lg:gap-12">
            {/* Video 1 - School (Portrait 9:16) */}
            <div className="w-full max-w-xs">
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-gray-900 shadow-xl ring-1 ring-gray-900/10">
                <iframe
                  src="https://player.vimeo.com/video/986786825?h=011b2107fc"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  title="Goodwill Infant and Primary School - Ann Hewan Foundation"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
                Goodwill Primary School
              </h3>
              <p className="mt-1 text-sm text-gray-600 text-center">
                Supporting education in our community
              </p>
            </div>

            {/* Video 2 - Playing Field (Landscape 16:9) */}
            <div className="w-full max-w-xl">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-xl ring-1 ring-gray-900/10">
                <iframe
                  src="https://player.vimeo.com/video/999982778?h=7b584e31e9"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  title="Playing Field Development - Ann Hewan Foundation"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
                Playing Field Project
              </h3>
              <p className="mt-1 text-sm text-gray-600 text-center">
                Building community spaces for youth
              </p>
            </div>
          </div>

          {/* Video CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all"
            >
              Support Our Programs
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section (Brief) */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                Our Legacy
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Honoring Ann Hewan&apos;s Vision
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The Ann Hewan Foundation was established to continue the
                compassionate work that defined Ann&apos;s life. Born from deep
                roots in the Goodwill community of St. James, Jamaica, we are
                committed to uplifting families through education, nutrition,
                and sustainable development.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                What started as a simple breakfast program has grown into a
                comprehensive community support system, touching hundreds of
                lives each year.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
                >
                  Read Our Full Story
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-dark hover:text-ocean transition-colors"
                >
                  View Our Programs
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Ann Hewan with Founder photo */}
              <div className="aspect-[2/1] overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5">
                <img
                  src="/images/about/ann-hewan-with-founder.webp"
                  alt="Ann Hewan with the founder of the foundation"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-gray-500">
                Ann Hewan with the founder
              </p>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-gold/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <ProgramCards />

      {/* Social Proof / Testimonial Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Testimonials
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stories from Our Community
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="flex flex-col rounded-2xl bg-cream p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-gold-dark">K</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Kadijah M.</p>
                  <p className="text-sm text-gray-500">Student, Age 10</p>
                </div>
              </div>
              <blockquote className="flex-1 text-gray-600">
                &ldquo;Before the breakfast program, I couldn&apos;t focus in school because I was so hungry. Now I can learn and dream about becoming a doctor.&rdquo;
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col rounded-2xl bg-cream p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-ocean/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-ocean-dark">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Marcia T.</p>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
              <blockquote className="flex-1 text-gray-600">
                &ldquo;The Back 2 School program lifted such a burden from our family. My children could start the year with pride, not shame.&rdquo;
              </blockquote>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col rounded-2xl bg-cream p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-coral/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-coral">D</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Devon S.</p>
                  <p className="text-sm text-gray-500">Community Leader</p>
                </div>
              </div>
              <blockquote className="flex-1 text-gray-600">
                &ldquo;The foundation doesn&apos;t just help individuals—they&apos;re rebuilding our entire community. The playing fields brought our youth together.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Join supporters CTA */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500">
              Join <span className="font-semibold text-gray-900">500+</span> supporters making a difference
            </p>
          </div>
        </div>
      </section>

      {/* Donor Wall */}
      <DonorWall />

      {/* Get Involved CTA */}
      <section className="bg-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you donate, volunteer, or spread the word, every action
              helps us make a difference in the lives of families in Goodwill.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/donate"
                className="w-full rounded-full bg-gold px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all sm:w-auto"
              >
                Make a Donation
              </Link>
              <Link
                href="/get-involved"
                className="w-full rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm hover:border-ocean hover:text-ocean transition-all sm:w-auto"
              >
                Other Ways to Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
}
