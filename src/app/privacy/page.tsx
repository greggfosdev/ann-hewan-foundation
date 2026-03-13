import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for The Ann Hewan Foundation. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Last updated: March 13, 2026
        </p>

        <div className="mt-8 space-y-8">
          <p className="text-gray-600">
            The Ann Hewan Foundation (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website at
            theannhewanfoundation.org or interact with us in any way.
          </p>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              1. Information We Collect
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Personal Information You Provide
                </h3>
                <p className="mt-2 text-gray-600">
                  When you make a donation, submit a contact form, volunteer, or
                  otherwise interact with us, we may collect:
                </p>
                <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                  <li>Name (first and last)</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Mailing address</li>
                  <li>
                    Payment information (processed securely by third-party
                    providers — we do not store credit card numbers)
                  </li>
                  <li>Any message or information you include in a form submission</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Information Collected Automatically
                </h3>
                <p className="mt-2 text-gray-600">
                  When you visit our website, we may automatically collect
                  certain information, including:
                </p>
                <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                  <li>
                    Browser type, device type, and operating system
                  </li>
                  <li>IP address and approximate geographic location</li>
                  <li>Pages visited, time spent on pages, and referring URLs</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="mt-4 text-gray-600">
              We use the information we collect for the following purposes:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
              <li>Process and acknowledge your donations</li>
              <li>Provide tax-deductible donation receipts</li>
              <li>Respond to your inquiries and contact form submissions</li>
              <li>
                Send updates about our programs, impact, and campaigns (only
                with your consent)
              </li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations and nonprofit reporting requirements</li>
              <li>Prevent fraud and ensure the security of our website</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              3. Third-Party Services
            </h2>
            <p className="mt-4 text-gray-600">
              We use trusted third-party services to operate our website and
              process donations. These services may collect information as
              described in their own privacy policies:
            </p>
            <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Zeffy</strong> — Processes online donations. Zeffy is a
                100% free fundraising platform for nonprofits with zero
                processing fees. Their privacy policy governs how they handle
                your payment information.
              </li>
              <li>
                <strong>Formspree</strong> — Processes contact form submissions.
                Form data is transmitted securely and stored according to
                Formspree&apos;s privacy policy.
              </li>
              <li>
                <strong>Zelle, Cash App, and PayPal</strong> — Alternative
                donation methods. Transactions through these platforms are
                governed by their respective privacy policies.
              </li>
              <li>
                <strong>Vercel</strong> — Hosts our website. Vercel may collect
                standard server logs and analytics data.
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              We do not sell, trade, or rent your personal information to any
              third party. We only share information with third parties as
              necessary to provide services to you or as required by law.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="mt-4 text-gray-600">
              Our website may use cookies and similar technologies to enhance
              your browsing experience. Cookies are small files stored on your
              device that help us understand how you use our site. You can
              control cookie settings through your browser preferences. Disabling
              cookies may affect certain features of our website.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              5. Data Security
            </h2>
            <p className="mt-4 text-gray-600">
              We implement reasonable administrative, technical, and physical
              security measures to protect your personal information. Our website
              uses HTTPS encryption for all data transmitted between your browser
              and our servers. However, no method of transmission over the
              internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              6. Data Retention
            </h2>
            <p className="mt-4 text-gray-600">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this policy, comply with legal
              obligations (including tax and nonprofit reporting requirements),
              resolve disputes, and enforce our agreements. Donation records are
              retained as required by IRS regulations for 501(c)(3)
              organizations.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              7. Children&apos;s Privacy
            </h2>
            <p className="mt-4 text-gray-600">
              Our website is not directed at children under the age of 13, and
              we do not knowingly collect personal information from children
              under 13. If we learn that we have collected personal information
              from a child under 13, we will take steps to delete that
              information promptly. If you believe a child under 13 has provided
              us with personal information, please contact us immediately.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              8. Your Rights
            </h2>
            <p className="mt-4 text-gray-600">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
              <li>
                <strong>Access</strong> — Request a copy of the personal
                information we hold about you
              </li>
              <li>
                <strong>Correction</strong> — Request that we correct any
                inaccurate or incomplete information
              </li>
              <li>
                <strong>Deletion</strong> — Request that we delete your personal
                information, subject to legal retention requirements
              </li>
              <li>
                <strong>Opt-Out</strong> — Unsubscribe from marketing
                communications at any time
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:Annhewanfoundation@gmail.com"
                className="text-gold-dark hover:text-gold"
              >
                Annhewanfoundation@gmail.com
              </a>
              .
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              9. Changes to This Privacy Policy
            </h2>
            <p className="mt-4 text-gray-600">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal, operational, or regulatory
              reasons. We will update the &quot;Last updated&quot; date at the
              top of this page when changes are made. We encourage you to review
              this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              10. Contact Us
            </h2>
            <p className="mt-4 text-gray-600">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us:
            </p>
            <div className="mt-4 rounded-xl bg-cream p-6 text-sm text-gray-600 space-y-1">
              <p className="font-medium text-gray-900">
                The Ann Hewan Foundation
              </p>
              <p>11954 Narcoossee Rd, Suite 2 PBM 246</p>
              <p>Orlando, FL 32832</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:Annhewanfoundation@gmail.com"
                  className="text-gold-dark hover:text-gold"
                >
                  Annhewanfoundation@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+14075803469"
                  className="text-gold-dark hover:text-gold"
                >
                  (407) 580-3469
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
