import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Ann Hewan Foundation.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Privacy Policy
        </h1>
        <div className="mt-8 prose prose-gray max-w-none">
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mt-4 text-gray-600">
            The Ann Hewan Foundation is committed to protecting your privacy.
            This policy outlines how we collect, use, and safeguard your
            information.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            Information We Collect
          </h2>
          <p className="mt-4 text-gray-600">
            We collect information you provide directly to us, such as when you
            make a donation, sign up for our newsletter, or contact us.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            How We Use Your Information
          </h2>
          <p className="mt-4 text-gray-600">
            We use the information we collect to process donations, communicate
            with you about our programs, and improve our services.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600">
            If you have questions about this privacy policy, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
