import Link from "next/link";

interface Program {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: "gold" | "ocean" | "coral";
}

const colorClasses = {
  gold: {
    bg: "bg-gold/10",
    text: "text-gold",
    hoverBg: "group-hover:bg-gold",
    hoverText: "group-hover:text-gold-dark",
    linkText: "text-gold-dark",
  },
  ocean: {
    bg: "bg-ocean/10",
    text: "text-ocean",
    hoverBg: "group-hover:bg-ocean",
    hoverText: "group-hover:text-ocean-dark",
    linkText: "text-ocean-dark",
  },
  coral: {
    bg: "bg-coral/10",
    text: "text-coral",
    hoverBg: "group-hover:bg-coral",
    hoverText: "group-hover:text-coral",
    linkText: "text-coral",
  },
};

const programs: Program[] = [
  {
    name: "The Breakfast Project",
    description:
      "Providing nutritious morning meals to children in Goodwill and surrounding communities, ensuring they start each day ready to learn.",
    href: "/programs/breakfast-project",
    color: "gold",
    icon: (
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
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
        />
      </svg>
    ),
  },
  {
    name: "Back 2 School Initiative",
    description:
      "Equipping students with school supplies, uniforms, and educational resources to support their academic success.",
    href: "/programs/back-to-school",
    color: "ocean",
    icon: (
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
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    name: "Playing Fields Project",
    description:
      "Creating safe recreational spaces for children and youth, promoting health, teamwork, and community bonding.",
    href: "/programs/playing-fields",
    color: "coral",
    icon: (
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
    ),
  },
];

export function ProgramCards() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Programs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Making a lasting difference through targeted initiatives that
            address the real needs of Goodwill and surrounding communities.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {programs.map((program) => {
            const colors = colorClasses[program.color];
            return (
              <Link
                key={program.name}
                href={program.href}
                className="group rounded-2xl bg-cream p-8 ring-1 ring-sand-dark/50 transition-all hover:shadow-lg hover:ring-gold/30"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg} ${colors.text} ${colors.hoverBg} group-hover:text-white transition-colors`}
                >
                  {program.icon}
                </div>
                <h3
                  className={`mt-6 text-lg font-semibold text-gray-900 ${colors.hoverText}`}
                >
                  {program.name}
                </h3>
                <p className="mt-4 text-gray-600">{program.description}</p>
                <span
                  className={`mt-4 inline-flex items-center text-sm font-semibold ${colors.linkText}`}
                >
                  Learn more <span aria-hidden="true" className="ml-1">→</span>
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:border-gold hover:text-gold-dark transition-all"
          >
            View All Programs
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
