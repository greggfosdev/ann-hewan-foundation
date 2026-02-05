import Link from "next/link";

const reports = [
  {
    year: "2025",
    title: "Annual Report 2025",
    description: "Our most impactful year yet with expanded programs.",
    available: false,
    comingSoon: true,
  },
  {
    year: "2024",
    title: "Annual Report 2024",
    description: "Celebrating growth and new initiatives.",
    available: true,
    href: "/reports/annual-report-2024.pdf",
  },
  {
    year: "2023",
    title: "Annual Report 2023",
    description: "Building stronger foundations for the future.",
    available: true,
    href: "/reports/annual-report-2023.pdf",
  },
];

export function AnnualReports() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-trust-green">
            Transparency
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Annual Reports
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We believe in complete transparency. Download our annual reports to
            see exactly how your donations make a difference.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {reports.map((report) => (
            <div
              key={report.year}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-trust-green/10 text-trust-green">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                  {report.year}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {report.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{report.description}</p>

              <div className="mt-6">
                {report.comingSoon ? (
                  <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Coming Soon
                  </span>
                ) : report.available ? (
                  <Link
                    href={report.href || "#"}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-trust-green hover:text-trust-green-dark transition-colors"
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
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    Download PDF
                  </Link>
                ) : (
                  <span className="text-sm text-gray-400">Not available</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Questions about our finances?{" "}
            <Link
              href="/contact"
              className="font-medium text-trust-green hover:text-trust-green-dark"
            >
              Contact us
            </Link>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
}
