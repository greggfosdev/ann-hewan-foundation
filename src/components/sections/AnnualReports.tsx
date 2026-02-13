import Link from "next/link";

const reports = [
  {
    year: "2025",
    title: "Annual Report 2025",
    description: "Our most impactful year yet with expanded programs.",
  },
  {
    year: "2024",
    title: "Annual Report 2024",
    description: "Celebrating growth and new initiatives.",
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
            We believe in complete transparency. Detailed financial reports are
            available upon request — we&apos;re committed to full accountability.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
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
                <Link
                  href="/contact"
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Request a Copy
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Detailed financial reports are available upon request. We&apos;re committed to full transparency —{" "}
            <Link
              href="/contact"
              className="font-medium text-trust-green hover:text-trust-green-dark"
            >
              reach out anytime
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
