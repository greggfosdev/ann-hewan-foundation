import { ProgramIcon } from "@/components/ui/ProgramIcon";
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
    icon: <ProgramIcon kind="nutrition" />,
  },
  {
    name: "Back 2 School Initiative",
    description:
      "Equipping students with school supplies, assisting with uniforms for those transitioning to high school, and helping with the purchase of textbooks.",
    href: "/programs/back-to-school",
    color: "ocean",
    icon: <ProgramIcon kind="education" />,
  },
  {
    name: "Playing Fields Project",
    description:
      "Creating safe recreational spaces for children and youth, promoting health, teamwork, and community bonding.",
    href: "/programs/playing-fields",
    color: "coral",
    icon: <ProgramIcon kind="community" />,
  },
  {
    name: "Technology Donations",
    description:
      "Computers and iPads delivered to three organizations in Jamaica in October 2026, with equipment donated by a partner in Dallas, Texas.",
    href: "/programs/technology-donations",
    color: "ocean",
    icon: <ProgramIcon kind="technology" />,
  },
];

export function ProgramCards() {
  return (
    <section id="our-programs" className="bg-white py-24 sm:py-32">
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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none xl:grid-cols-4">
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
