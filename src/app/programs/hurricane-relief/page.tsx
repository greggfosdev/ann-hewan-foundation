import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hurricane Relief",
  description:
    "Emergency support for families affected by hurricanes, including food, shelter supplies, and rebuilding assistance.",
};

const stats = [
  { value: "100+", label: "Families Assisted" },
  { value: "24hr", label: "Response Time" },
  { value: "100%", label: "To Relief Efforts" },
  { value: "Ongoing", label: "Recovery Support" },
];

const features = [
  {
    title: "Emergency Food & Water",
    description:
      "Immediately after a storm, we distribute clean water, non-perishable food, and hot meals to affected families.",
  },
  {
    title: "Shelter Supplies",
    description:
      "We provide tarps, roofing materials, and emergency shelter supplies to protect families whose homes were damaged.",
  },
  {
    title: "Rebuilding Assistance",
    description:
      "We help families repair and rebuild their homes, providing materials and connecting them with skilled volunteers.",
  },
  {
    title: "Long-term Recovery",
    description:
      "Our support doesn't end when the immediate crisis passes. We stay with families through their full recovery journey.",
  },
];

export default function HurricaneReliefPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-green/10 to-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-medium text-trust-green hover:opacity-80 transition-colors mb-6"
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
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-trust-green/20 text-trust-green">
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
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Hurricane Relief
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              When disaster strikes, we&apos;re there. Our hurricane relief
              program provides emergency support to families affected by storms,
              helping them survive and rebuild.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/donate?program=relief"
                className="w-full rounded-full bg-trust-green px-8 py-4 text-base font-semibold text-white shadow-lg shadow-trust-green/30 hover:bg-trust-green-dark hover:shadow-trust-green/40 transition-all sm:w-auto"
              >
                Support Relief Efforts
              </Link>
              <a
                href="#timeline"
                className="w-full flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 hover:border-trust-green hover:text-trust-green transition-all sm:w-auto"
              >
                See How We Respond
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
                <p className="text-3xl font-bold text-trust-green sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Moved up as visual proof */}
      <section id="timeline" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Response Timeline
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From the moment a storm hits to full recovery.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="space-y-8">
              {[
                {
                  time: "0-24 Hours",
                  title: "Emergency Response",
                  description:
                    "Assess damage, identify most vulnerable families, begin distributing emergency water and food supplies.",
                },
                {
                  time: "1-7 Days",
                  title: "Stabilization",
                  description:
                    "Distribute tarps and emergency shelter materials, provide hot meals, ensure families have basic necessities.",
                },
                {
                  time: "1-4 Weeks",
                  title: "Recovery Begins",
                  description:
                    "Begin repairs on damaged homes, provide building materials, coordinate volunteer work crews.",
                },
                {
                  time: "Ongoing",
                  title: "Long-term Support",
                  description:
                    "Continue rebuilding efforts, provide emotional support, help families return to normalcy.",
                },
              ].map((phase, index) => (
                <div key={phase.time} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-trust-green text-white font-bold">
                      {index + 1}
                    </div>
                    {index < 3 && (
                      <div className="w-0.5 flex-1 bg-trust-green/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-semibold text-trust-green">
                      {phase.time}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-gray-900">
                      {phase.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">The Reality</h2>
              <p className="mt-4 text-lg text-gray-600">
                Jamaica lies in the hurricane belt, and communities like
                Goodwill are particularly vulnerable. When hurricanes strike,
                they can destroy homes, crops, and livelihoods in hours.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Families who were already struggling find themselves without
                shelter, food, or clean water. Recovery can take months or even
                years, and many never fully rebuild.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Response</h2>
              <p className="mt-4 text-lg text-gray-600">
                Because we&apos;re rooted in the community, we can respond
                immediately when disaster strikes. We know who is most
                vulnerable and can reach them quickly with the help they need.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our relief efforts are comprehensive: from immediate emergency
                supplies to long-term rebuilding support. We don&apos;t leave
                until families are back on their feet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section id="how-we-help" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Help
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive support from emergency response to full recovery.
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

      {/* Emergency Fund */}
      <section className="bg-trust-green py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Emergency Relief Fund
            </h2>
            <p className="mt-6 text-lg text-emerald-100">
              Your donation to our emergency relief fund allows us to respond
              immediately when disaster strikes. We maintain supplies and
              resources ready to deploy at a moment&apos;s notice.
            </p>
            <div className="mt-10">
              <Link
                href="/donate?program=relief"
                className="inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-trust-green shadow-lg hover:bg-gray-100 transition-all"
              >
                Contribute to Emergency Fund
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Be Ready to Help
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Hurricane season runs from June to November. Your support now
              ensures we&apos;re ready to respond when families need us most.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/donate?program=relief"
                className="w-full rounded-full bg-trust-green px-8 py-4 text-base font-semibold text-white shadow-lg shadow-trust-green/30 hover:bg-trust-green-dark hover:shadow-trust-green/40 transition-all sm:w-auto"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="w-full rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm hover:border-trust-green hover:text-trust-green transition-all sm:w-auto"
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
