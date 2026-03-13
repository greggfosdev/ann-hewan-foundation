import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support The Ann Hewan Foundation. 100% of your donation goes directly to programs serving children and families in Goodwill and surrounding communities.",
};

export default function DonatePage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Header */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-trust-green/10 px-4 py-1.5 text-sm font-medium text-trust-green mb-6">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clipRule="evenodd"
                />
              </svg>
              100% of your donation goes directly to programs
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Make a Difference Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every dollar helps us feed children, support education, and strengthen
              Goodwill and surrounding communities. Your gift is tax-deductible.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Impact Strip */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gold">$25</p>
              <p className="mt-1 text-xs text-gray-600">Feeds a child breakfast for a week</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gold">$55</p>
              <p className="mt-1 text-xs text-gray-600">Provides school supplies for a student</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gold">$85</p>
              <p className="mt-1 text-xs text-gray-600">Assists with a uniform and textbooks</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gold">$165</p>
              <p className="mt-1 text-xs text-gray-600">Covers everything for the year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zeffy Donation Form — Full Width */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 overflow-hidden">
            <iframe
              title="Donate to The Ann Hewan Foundation"
              src="https://www.zeffy.com/en-US/fundraising/donate-to-make-a-difference-in-our-kids-lives"
              className="w-full border-0"
              style={{ minHeight: "1400px" }}
              allow="payment"
            />
          </div>

          {/* Trust badges right below the form */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-trust-green"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clipRule="evenodd"
                />
              </svg>
              Secure payment via Zeffy — 100% free, zero fees
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-trust-green"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Tax-deductible receipt
            </span>
          </div>
        </div>
      </section>

      {/* Where Your Money Goes + Stats */}
      <section className="border-t border-gray-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Transparency */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-gray-900">
                Where Your Money Goes
              </h2>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900">Direct to Programs</span>
                  <span className="font-bold text-trust-green">100%</span>
                </div>
                <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-trust-green" style={{ width: "100%" }} />
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                All administrative costs are covered by our founders and board members,
                ensuring every dollar you donate goes directly to helping children
                and families in Goodwill and surrounding communities.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <div className="rounded-xl bg-cream p-5 text-center">
                <p className="text-3xl font-bold text-gold">150+</p>
                <p className="mt-1 text-sm text-gray-600">Children fed daily</p>
              </div>
              <div className="rounded-xl bg-cream p-5 text-center">
                <p className="text-3xl font-bold text-ocean">15</p>
                <p className="mt-1 text-sm text-gray-600">Years of service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Other Ways to Give
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-900/5">
              <div className="mx-auto h-12 w-12 rounded-full bg-[#6D1ED4]/10 flex items-center justify-center">
                <span className="text-xl font-bold text-[#6D1ED4]">Z</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Zelle</h3>
              <p className="mt-2 text-sm text-gray-600">
                Send directly via Zelle to
              </p>
              <p className="mt-1 text-sm font-semibold text-[#6D1ED4]">
                Annhewanfoundation@gmail.com
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-900/5">
              <div className="mx-auto h-12 w-12 rounded-full bg-[#00D632]/10 flex items-center justify-center">
                <span className="text-xl font-bold text-[#00D632]">$</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Cash App</h3>
              <p className="mt-2 text-sm text-gray-600">
                Send via Cash App to
              </p>
              <p className="mt-1 text-sm font-semibold text-[#00D632]">
                $AHFKIDS
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-900/5">
              <div className="mx-auto h-12 w-12 rounded-full bg-[#0070BA]/10 flex items-center justify-center">
                <span className="text-xl font-bold text-[#0070BA]">P</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">PayPal</h3>
              <p className="mt-2 text-sm text-gray-600">
                Send via PayPal to
              </p>
              <p className="mt-1 text-sm font-semibold text-[#0070BA]">
                Annhewanfoundation@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax-Deductible Footer */}
      <section className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs text-gray-400 text-center">
            The Ann Hewan Foundation is a 501(c)(3) nonprofit organization.
            <br />
            Your donation is tax-deductible to the extent allowed by law.
          </p>
        </div>
      </section>
    </div>
  );
}
