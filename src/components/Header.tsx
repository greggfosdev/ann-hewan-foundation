"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/our-story" },
  { name: "Programs", href: "/programs" },
  { name: "Impact", href: "/impact" },
  { name: "Get Involved", href: "/get-involved" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              src="/images/logo.webp"
              alt="The Ann Hewan Foundation"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <span className="hidden sm:inline text-lg font-bold text-gray-900">
              Ann Hewan Foundation
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors relative ${
                isActive(item.href)
                  ? "text-gold-dark"
                  : "text-gray-700 hover:text-gold-dark"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/donate"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all"
          >
            Donate
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 text-base font-semibold ${
                  isActive(item.href)
                    ? "text-gold-dark"
                    : "text-gray-900 hover:text-gold-dark"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {isActive(item.href) && (
                  <span className="inline-block w-2 h-2 bg-gold rounded-full mr-2" />
                )}
                {item.name}
              </Link>
            ))}
            <Link
              href="/donate"
              className="mt-4 block rounded-full bg-gold px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gold-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
