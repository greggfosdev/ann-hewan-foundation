const impactStats = [
  { label: "Total Raised This Year", value: "$3,500" },
  { label: "Donors This Month", value: "7" },
  { label: "Recurring Donors", value: "12" },
];

export function DonorWall() {
  return (
    <section className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Our Supporters
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join Our Community of Givers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every donation, big or small, makes a difference in the lives of
            children and families in Goodwill and surrounding communities.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-xl">
          <div className="space-y-6">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5"
              >
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="mt-2 text-4xl font-bold text-gold">{stat.value}</p>
              </div>
            ))}

            <div className="rounded-2xl bg-gradient-to-br from-gold to-gold-dark p-6 text-white">
              <p className="font-semibold">Become a Monthly Donor</p>
              <p className="mt-2 text-sm text-gold-light">
                Join 12 recurring donors and make 12x the impact with a monthly
                gift.
              </p>
              <a
                href="/donate"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gold-dark hover:bg-gray-100 transition-colors"
              >
                Give Monthly
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
