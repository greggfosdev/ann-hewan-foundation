import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Learn how you can support the Ann Hewan Foundation.",
};

const ways = [
  {
    title: "Donate",
    description:
      "Your financial support helps us continue our programs and reach more families in need. 100% of public donations go directly to programs.",
    cta: "Make a Donation",
    href: "/donate",
    color: "gold",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Volunteer",
    description:
      "Join our team of dedicated volunteers and make a direct impact in Jamaica. We have opportunities for all skill levels and can coordinate remote help.",
    cta: "Apply to Volunteer",
    href: "/contact",
    color: "ocean",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Corporate Partnership",
    description:
      "We welcome partnerships with businesses and organizations who share our vision. Options include matching gifts, sponsorships, and employee giving programs.",
    cta: "Become a Partner",
    href: "/contact",
    color: "coral",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Fundraise",
    description:
      "Start your own fundraiser to support our mission. Whether it's a birthday fundraiser, event, or crowdfunding campaign, we provide resources and support.",
    cta: "Start Fundraising",
    href: "/contact",
    color: "trust-green",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
];

const colorClasses = {
  gold: { bg: "bg-gold/10", text: "text-gold", link: "text-gold-dark hover:text-gold" },
  ocean: { bg: "bg-ocean/10", text: "text-ocean", link: "text-ocean-dark hover:text-ocean" },
  coral: { bg: "bg-coral/10", text: "text-coral", link: "text-coral hover:text-coral" },
  "trust-green": { bg: "bg-trust-green/10", text: "text-trust-green", link: "text-trust-green-dark hover:text-trust-green" },
};

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Join Our Mission
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get Involved
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gold to-coral" />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              There are many ways to support the Ann Hewan Foundation and make a
              difference in the lives of families in Goodwill.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {ways.map((way) => {
              const colors = colorClasses[way.color as keyof typeof colorClasses];
              return (
                <div
                  key={way.title}
                  className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}>
                    {way.icon}
                  </div>
                  <h2 className="mt-6 text-xl font-bold text-gray-900">{way.title}</h2>
                  <p className="mt-4 flex-grow text-gray-600">{way.description}</p>
                  <Link
                    href={way.href}
                    className={`mt-6 inline-flex items-center text-sm font-semibold ${colors.link} transition-colors`}
                  >
                    {way.cta} <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="bg-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-ocean">
              Volunteer Opportunities
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Make a Direct Impact
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Whether you can travel to Jamaica or want to help from home, we have
              opportunities for volunteers with all skill sets:
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Program support during Back 2 School distribution events",
                "Fundraising and event planning",
                "Social media and marketing",
                "Grant writing and research",
                "Photography and videography",
                "Translation services (Spanish, Patois)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-ocean"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-ocean-dark transition-colors"
              >
                Apply to Volunteer
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Partners Section */}
      <section id="partners" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-coral">
              Corporate Partnerships
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Partner With Us
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Corporate partnerships help us scale our impact while providing
              meaningful engagement opportunities for your organization:
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Matching Gifts",
                  description: "Double the impact of employee donations",
                },
                {
                  title: "Event Sponsorship",
                  description: "Support our annual fundraisers and events",
                },
                {
                  title: "In-Kind Donations",
                  description: "Donate supplies, services, or expertise",
                },
                {
                  title: "Employee Giving",
                  description: "Set up workplace giving programs",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-cream p-6 ring-1 ring-sand-dark/50"
                >
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
              >
                Discuss Partnership
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraise Section */}
      <section id="fundraise" className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-trust-green">
              Start a Fundraiser
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fundraise for Good
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Turn your birthday, special occasion, or event into an opportunity
              to help children in Jamaica. We provide all the resources you need
              to run a successful fundraiser.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-trust-green px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-trust-green-dark transition-colors"
              >
                Start Your Fundraiser
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Ready to Make a Difference?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The easiest way to help is with a donation. Every dollar goes
              directly to programs.
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
