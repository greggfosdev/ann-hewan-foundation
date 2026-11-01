interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: 150,
    suffix: "+",
    label: "Children Fed Daily",
  },
  {
    value: 300,
    suffix: "+",
    label: "Students Supported",
  },
  {
    value: 15,
    label: "Years of Service",
  },
  {
    value: 100,
    suffix: "%",
    label: "To Programs",
  },
];

export function ImpactStats() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">
            Our Impact
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Making a Real Difference
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Every number represents a life touched, a meal served, and hope restored.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-center rounded-2xl bg-cream p-6 text-center ring-1 ring-sand-dark/50"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-3 w-12 rounded-full bg-gradient-to-r from-gold to-coral" />
              </div>

              <dt className="order-2 mt-3 text-sm font-medium text-gray-900">
                {stat.label}
              </dt>
              <dd className="order-1 mt-4 text-4xl font-bold tracking-tight text-gold sm:text-5xl">
                {stat.value}{stat.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
