import { ProgramIcon } from "@/components/ui/ProgramIcon";
import { Brushstroke } from "@/components/ui/BrandAccents";
import { getPageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata = getPageMetadata("/programs");

const programs = [
  {
    name: "Technology Donations",
    description:
      "In October 2026, we delivered computers and iPads to three organizations in Jamaica, with equipment donated by a partner in Dallas, Texas.",
    href: "/programs/technology-donations",
    stats: { value: "3", label: "Organizations Supported · October 2026" },
    color: "ocean",
    icon: <ProgramIcon kind="technology" />,
  },
  {
    name: "The Breakfast Project",
    description:
      "Our flagship program ensures that no child in Goodwill and surrounding communities goes to school hungry. We provide nutritious morning meals to over 150 children daily.",
    href: "/programs/breakfast-project",
    stats: { value: "150+", label: "Children Fed Daily" },
    color: "gold",
    icon: <ProgramIcon kind="nutrition" />,
  },
  {
    name: "Back 2 School Initiative",
    description:
      "Every child deserves to start the school year with pride. We provide school supplies, assist students transitioning to high school with uniforms, and help with the purchase of textbooks, supporting over 300 students annually.",
    href: "/programs/back-to-school",
    stats: { value: "300+", label: "Students Supported" },
    color: "ocean",
    icon: <ProgramIcon kind="education" />,
  },
  {
    name: "Playing Fields Project",
    description:
      "Safe recreational spaces transform communities. We're building a playing field that will bring youth together and promote health.",
    href: "/programs/playing-fields",
    stats: { value: "2026", label: "Target Completion" },
    color: "coral",
    icon: <ProgramIcon kind="community" />,
  },
  {
    name: "Hurricane Melissa Relief",
    description:
      "When Hurricane Melissa struck, we were there. Our relief program provided emergency support to families affected by the storm.",
    href: "/programs/hurricane-relief",
    stats: { value: "100+", label: "Families Assisted" },
    color: "trust-green",
    icon: <ProgramIcon kind="relief" />,
  },
];

const colorClasses = {
  gold: { bg: "bg-gold/10", text: "text-gold", statText: "text-gold" },
  ocean: { bg: "bg-ocean/10", text: "text-ocean", statText: "text-ocean" },
  coral: { bg: "bg-coral/10", text: "text-coral", statText: "text-coral" },
  "trust-green": { bg: "bg-trust-green/10", text: "text-trust-green", statText: "text-trust-green" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageJsonLd path="/programs" />
      {/* Hero */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              How We Help
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Programs
            </h1>
            <Brushstroke />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Making a lasting difference through targeted initiatives that
              address the real needs of Goodwill and surrounding communities. Click on any
              program to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {programs.map((program) => {
              const colors = colorClasses[program.color as keyof typeof colorClasses];
              return (
                <Link
                  key={program.name}
                  href={program.href}
                  className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 hover:shadow-lg hover:ring-gray-900/10 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}>
                      {program.icon}
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${colors.statText}`}>
                        {program.stats.value}
                      </p>
                      <p className="text-xs text-gray-500">{program.stats.label}</p>
                    </div>
                  </div>
                  <h2 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-gray-700">
                    {program.name}
                  </h2>
                  <p className="mt-4 text-gray-600">{program.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-gray-700">
                    Learn more
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Support Our Programs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your donation directly funds these life-changing programs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/donate"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all"
              >
                Donate Now
              </Link>
              <Link
                href="/impact"
                className="rounded-full border-2 border-gray-200 bg-white px-8 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:border-ocean hover:text-ocean transition-all"
              >
                See Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
