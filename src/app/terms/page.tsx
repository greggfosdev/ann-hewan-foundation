import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the Ann Hewan Foundation.",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Terms of Service
        </h1>
        <div className="mt-8 prose prose-gray max-w-none">
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mt-4 text-gray-600">
            By using the Ann Hewan Foundation website, you agree to these terms
            of service.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            Use of Website
          </h2>
          <p className="mt-4 text-gray-600">
            This website is provided for informational purposes and to
            facilitate donations and engagement with our foundation.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            Donations
          </h2>
          <p className="mt-4 text-gray-600">
            All donations are final and non-refundable unless required by law.
            Donations are tax-deductible to the extent allowed by law.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600">
            If you have questions about these terms, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
