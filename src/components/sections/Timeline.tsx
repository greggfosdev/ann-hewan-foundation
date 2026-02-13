const milestones = [
  {
    year: "2010",
    title: "Foundation Established",
    description:
      "Edgar 'Pete' Peters founded the Ann Hewan Foundation in memory of his mother, continuing her legacy of community service.",
  },
  {
    year: "2011",
    title: "Breakfast Project Launched",
    description:
      "Started providing daily breakfast to children at Goodwill Primary School, beginning with 50 students.",
  },
  {
    year: "2015",
    title: "Back 2 School Initiative",
    description:
      "Launched our annual back-to-school program, providing uniforms and supplies to hundreds of students.",
  },
  {
    year: "2018",
    title: "150+ Children Fed Daily",
    description:
      "Reached the milestone of feeding over 150 children breakfast every school day across multiple schools.",
  },
  {
    year: "2020",
    title: "Hurricane Relief Response",
    description:
      "Expanded operations to include emergency relief, helping families recover from hurricane damage.",
  },
  {
    year: "2024",
    title: "Playing Fields Project",
    description:
      "Broke ground on community playing fields to provide safe recreational spaces for youth.",
  },
  {
    year: "2026",
    title: "15 Years of Service",
    description:
      "Celebrating 15 years of uplifting Goodwill, Davis Pen, Chatham, Blyston, Edenvale, and Johnson Hill with over 300 students supported annually.",
  },
];

export function Timeline() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Our Journey
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Foundation Timeline
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From humble beginnings to community transformation.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-ocean to-coral sm:left-1/2 sm:-translate-x-1/2" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-6 sm:gap-8 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Year badge */}
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-white text-xs font-bold shadow-lg sm:left-1/2 sm:-translate-x-1/2">
                    <span className="sr-only">{milestone.year}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 flex-1 sm:ml-0 ${
                      index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <div
                      className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 ${
                        index % 2 === 0 ? "sm:ml-auto" : ""
                      } sm:max-w-sm`}
                    >
                      <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-gold-dark">
                        {milestone.year}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-gray-900">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 sm:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
