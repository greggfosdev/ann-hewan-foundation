import Link from "next/link";
import Image from "next/image";

const footerNavigation = {
  programs: [
    { name: "The Breakfast Project", href: "/programs/breakfast-project" },
    { name: "Back 2 School", href: "/programs/back-to-school" },
    { name: "Playing Fields", href: "/programs/playing-fields" },
    { name: "Hurricane Relief", href: "/programs/hurricane-relief" },
  ],
  organization: [
    { name: "Our Story", href: "/our-story" },
    { name: "Impact", href: "/impact" },
    { name: "News & Stories", href: "/news" },
    { name: "Contact", href: "/contact" },
  ],
  getInvolved: [
    { name: "Donate", href: "/donate" },
    { name: "Volunteer", href: "/get-involved#volunteer" },
    { name: "Corporate Partners", href: "/get-involved#partners" },
    { name: "Fundraise", href: "/get-involved#fundraise" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/g/16yiGqXFW2/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/theannhewanfoundation/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-sand" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Trust bar */}
      <div className="border-b border-sand-dark">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm font-medium text-trust-green">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                501(c)(3) Verified
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-trust-green">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                100% Secure Donations
              </div>
            </div>
            <div className="flex space-x-4">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gold-dark transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="The Ann Hewan Foundation"
                width={56}
                height={56}
                className="h-14 w-auto"
              />
              <span className="text-lg font-bold text-gray-900">
                Ann Hewan Foundation
              </span>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              A 501(c)(3) nonprofit uplifting Goodwill and surrounding communities in St.
              James, Jamaica through education, nutrition, and sustainable
              development.
            </p>
            <div className="text-sm text-gray-600">
              <p className="font-medium text-gray-900">Contact Us</p>
              <p className="mt-2">11954 Narcoossee Rd</p>
              <p>Suite 2 PBM 246</p>
              <p>Orlando, FL 32832</p>
              <p className="mt-2">
                <a
                  href="tel:+14075803469"
                  className="text-gold-dark hover:text-gold transition-colors"
                >
                  (407) 580-3469
                </a>
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Programs
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.programs.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gold-dark transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Organization
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.organization.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gold-dark transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Get Involved
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.getInvolved.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gold-dark transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Newsletter
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Get updates on our programs and impact.
                </p>
                <form className="mt-4">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <div className="flex flex-col gap-2">
                    <input
                      type="email"
                      name="email"
                      id="footer-email"
                      autoComplete="email"
                      required
                      className="w-full rounded-lg border-0 px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="rounded-lg bg-gold px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gold-dark transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-sand-dark pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs leading-5 text-gray-500 hover:text-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} The Ann Hewan Foundation. All
            rights reserved. 501(c)(3) EIN: XX-XXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}
