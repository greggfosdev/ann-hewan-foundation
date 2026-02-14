import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore the programs offered by the Ann Hewan Foundation.",
};

const programs = [
  {
    name: "The Breakfast Project",
    description:
      "Our flagship program ensures that no child in Goodwill and surrounding communities goes to school hungry. We provide nutritious morning meals to over 150 children daily.",
    href: "/programs/breakfast-project",
    stats: { value: "150+", label: "Children Fed Daily" },
    color: "gold",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
  },
  {
    name: "Back 2 School Initiative",
    description:
      "Every child deserves to start the school year with pride. We assist students with school supplies, uniforms, and educational resources, supporting over 300 students annually.",
    href: "/programs/back-to-school",
    stats: { value: "300+", label: "Students Supported" },
    color: "ocean",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    name: "Playing Fields Project",
    description:
      "Safe recreational spaces transform communities. We're building a playing field that will bring youth together and promote health.",
    href: "/programs/playing-fields",
    stats: { value: "2026", label: "Target Completion" },
    color: "coral",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    name: "Hurricane Melissa Relief",
    description:
      "When Hurricane Melissa struck, we were there. Our relief program provided emergency support to families affected by the storm.",
    href: "/programs/hurricane-relief",
    stats: { value: "100+", label: "Families Assisted" },
    color: "trust-green",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
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
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gold to-coral" />
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
