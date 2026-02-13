import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News & Stories",
  description: "Latest news, updates, and stories from the Ann Hewan Foundation.",
};

const newsItems = [
  {
    id: 1,
    title: "Back 2 School 2026 Campaign Launches",
    excerpt:
      "We're excited to announce the launch of our annual Back 2 School campaign, aiming to provide school supplies and uniforms to over 100 students in Goodwill and surrounding communities.",
    date: "January 15, 2026",
    category: "Campaign",
    image: null,
  },
  {
    id: 2,
    title: "Breakfast Project Reaches 150 Children Daily",
    excerpt:
      "A milestone achievement for our flagship program - we're now serving nutritious breakfasts to over 150 children every school day in Goodwill and surrounding communities.",
    date: "December 10, 2025",
    category: "Impact",
    image: null,
  },
  {
    id: 3,
    title: "New Playing Field Opens in Goodwill",
    excerpt:
      "Thanks to generous donors, we've completed construction on a new community playing field, providing a safe space for youth sports and recreation.",
    date: "November 22, 2025",
    category: "Programs",
    image: null,
  },
  {
    id: 4,
    title: "Annual Report 2025 Now Available",
    excerpt:
      "Our 2025 Annual Report is now available, showcasing the impact of your donations and the growth of our programs throughout the year.",
    date: "October 1, 2025",
    category: "Updates",
    image: null,
  },
  {
    id: 5,
    title: "Volunteer Spotlight: Meet Our Dedicated Team",
    excerpt:
      "Get to know the amazing volunteers who make our programs possible. From meal preparation to school supply distribution, they're the heart of our foundation.",
    date: "September 15, 2025",
    category: "Community",
    image: null,
  },
  {
    id: 6,
    title: "Hurricane Relief Efforts Update",
    excerpt:
      "Following the recent hurricane season, our team has been on the ground providing emergency supplies and support to affected families in the region.",
    date: "August 28, 2025",
    category: "Programs",
    image: null,
  },
];

const categories = ["All", "Campaign", "Impact", "Programs", "Updates", "Community"];

const categoryColors: Record<string, string> = {
  Campaign: "bg-gold/10 text-gold-dark",
  Impact: "bg-trust-green/10 text-trust-green",
  Programs: "bg-ocean/10 text-ocean-dark",
  Updates: "bg-coral/10 text-coral",
  Community: "bg-purple-100 text-purple-700",
};

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Stay Informed
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              News & Stories
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gold to-coral" />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The latest updates, impact stories, and news from the Ann Hewan
              Foundation and the Goodwill and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 py-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-gold text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-sand to-sand-dark">
                  <div className="flex h-full items-center justify-center">
                    <svg
                      className="h-12 w-12 text-sand-dark/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        categoryColors[item.category] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.category}
                    </span>
                    <time className="text-xs text-gray-500">{item.date}</time>
                  </div>

                  <h2 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-gold-dark transition-colors">
                    {item.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm text-gray-600 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <div className="mt-4">
                    <span className="inline-flex items-center text-sm font-semibold text-gold-dark group-hover:text-gold transition-colors">
                      Read more
                      <svg
                        className="ml-1 h-4 w-4"
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
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="rounded-full border-2 border-gray-200 bg-white px-8 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:border-gold hover:text-gold-dark transition-all">
              Load More Stories
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-ocean to-ocean-dark py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Never Miss an Update
            </h2>
            <p className="mt-4 text-lg text-ocean-light">
              Subscribe to our newsletter to receive the latest news and stories
              directly in your inbox.
            </p>
            <form className="mt-8 sm:mx-auto sm:max-w-md">
              <div className="flex flex-col gap-4 sm:flex-row">
                <label htmlFor="news-email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="news-email"
                  name="email"
                  autoComplete="email"
                  required
                  className="flex-1 rounded-full border-0 px-6 py-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
