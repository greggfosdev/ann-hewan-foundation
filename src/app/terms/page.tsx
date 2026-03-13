import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for The Ann Hewan Foundation website. Review the terms governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Last updated: March 13, 2026
        </p>

        <div className="mt-8 space-y-8">
          <p className="text-gray-600">
            Welcome to the website of The Ann Hewan Foundation
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or
            using our website at theannhewanfoundation.org, you agree to be
            bound by these Terms of Service. If you do not agree to these terms,
            please do not use our website.
          </p>

          {/* About the Foundation */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              1. About The Ann Hewan Foundation
            </h2>
            <p className="mt-4 text-gray-600">
              The Ann Hewan Foundation is a 501(c)(3) nonprofit organization
              registered in the United States, dedicated to supporting
              education, nutrition, and community development in Goodwill and
              surrounding communities in St. James, Jamaica. Our website serves
              as a platform to share information about our programs and
              facilitate donations.
            </p>
          </section>

          {/* Use of Website */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              2. Use of Website
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Permitted Use</h3>
                <p className="mt-2 text-gray-600">
                  You may use our website for lawful purposes, including:
                </p>
                <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                  <li>Learning about our foundation and programs</li>
                  <li>Making donations to support our mission</li>
                  <li>Contacting us with questions or inquiries</li>
                  <li>Sharing our content for non-commercial purposes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Prohibited Use</h3>
                <p className="mt-2 text-gray-600">
                  You agree not to:
                </p>
                <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                  <li>
                    Use the website in any way that violates applicable laws or
                    regulations
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    website or its systems
                  </li>
                  <li>
                    Transmit viruses, malware, or other harmful code
                  </li>
                  <li>
                    Use automated systems (bots, scrapers) to access the website
                    without our permission
                  </li>
                  <li>
                    Misrepresent your identity or affiliation with the foundation
                  </li>
                  <li>
                    Use the foundation&apos;s name, logo, or content for
                    unauthorized commercial purposes
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Donations */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              3. Donations
            </h2>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-900">Tax-Deductibility:</strong>{" "}
                The Ann Hewan Foundation is a tax-exempt 501(c)(3) organization.
                Your donations are tax-deductible to the extent allowed by law.
                You will receive a donation receipt for your records.
              </p>
              <p>
                <strong className="text-gray-900">100% to Programs:</strong>{" "}
                All administrative costs are covered by our founders and board
                members. 100% of your donation goes directly to our programs
                serving children and families.
              </p>
              <p>
                <strong className="text-gray-900">Refund Policy:</strong>{" "}
                Donations are generally non-refundable. If you believe a
                donation was made in error, please contact us within 30 days at{" "}
                <a
                  href="mailto:Annhewanfoundation@gmail.com"
                  className="text-gold-dark hover:text-gold"
                >
                  Annhewanfoundation@gmail.com
                </a>{" "}
                and we will review your request on a case-by-case basis.
              </p>
              <p>
                <strong className="text-gray-900">
                  Third-Party Payment Processors:
                </strong>{" "}
                Donations are processed through third-party platforms including
                Zeffy, Zelle, Cash App, and PayPal. These transactions are also
                subject to the terms and conditions of those respective
                platforms. We do not store your credit card or bank account
                information.
              </p>
              <p>
                <strong className="text-gray-900">Use of Funds:</strong> While
                we make every effort to direct donations to the programs
                specified by the donor, we reserve the right to allocate funds
                where they are most needed to fulfill our mission.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              4. Intellectual Property
            </h2>
            <p className="mt-4 text-gray-600">
              All content on this website — including text, images,
              photographs, logos, graphics, and design — is the property of The
              Ann Hewan Foundation or its content providers and is protected by
              copyright and intellectual property laws. You may not reproduce,
              distribute, modify, or create derivative works from any content on
              this website without our prior written consent, except for
              personal, non-commercial use such as sharing our content to
              promote our mission.
            </p>
          </section>

          {/* User Submissions */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              5. User Submissions
            </h2>
            <p className="mt-4 text-gray-600">
              When you submit information through our contact form or other
              means, you grant us permission to use that information to respond
              to your inquiry and for related administrative purposes. We will
              handle all submissions in accordance with our Privacy Policy.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              6. Third-Party Links
            </h2>
            <p className="mt-4 text-gray-600">
              Our website may contain links to third-party websites, including
              social media platforms, partner organizations, and payment
              processors. We are not responsible for the content, privacy
              practices, or terms of service of these external sites. We
              encourage you to review the policies of any third-party website
              you visit.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              7. Disclaimer of Warranties
            </h2>
            <p className="mt-4 text-gray-600">
              This website is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind, either
              express or implied. We do not warrant that the website will be
              uninterrupted, error-free, or free of viruses or other harmful
              components. While we strive to provide accurate and up-to-date
              information, we make no guarantees about the completeness,
              accuracy, or reliability of any content on this website.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              8. Limitation of Liability
            </h2>
            <p className="mt-4 text-gray-600">
              To the fullest extent permitted by law, The Ann Hewan Foundation,
              its officers, directors, board members, volunteers, and agents
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              your use of this website, including but not limited to loss of
              data, revenue, or profits, even if we have been advised of the
              possibility of such damages.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              9. Indemnification
            </h2>
            <p className="mt-4 text-gray-600">
              You agree to indemnify and hold harmless The Ann Hewan Foundation,
              its officers, directors, board members, volunteers, and agents
              from any claims, damages, losses, liabilities, or expenses
              (including reasonable attorney&apos;s fees) arising out of your use
              of the website or violation of these Terms of Service.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              10. Governing Law
            </h2>
            <p className="mt-4 text-gray-600">
              These Terms of Service are governed by and construed in accordance
              with the laws of the State of Florida, United States, without
              regard to its conflict of law provisions. Any disputes arising
              from these terms or your use of the website shall be resolved in
              the courts located in Orange County, Florida.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              11. Changes to These Terms
            </h2>
            <p className="mt-4 text-gray-600">
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to this page. We
              will update the &quot;Last updated&quot; date at the top of this
              page when changes are made. Your continued use of the website
              after any changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              12. Contact Us
            </h2>
            <p className="mt-4 text-gray-600">
              If you have any questions about these Terms of Service, please
              contact us:
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
