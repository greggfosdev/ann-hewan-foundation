export function NewsletterSignup() {
  return (
    <section className="bg-gradient-to-br from-ocean to-ocean-dark py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay Connected
          </h2>
          <p className="mt-4 text-lg text-ocean-light">
            Subscribe to receive updates on our programs, impact stories from
            the community, and ways you can help.
          </p>
          <form className="mt-8 sm:mx-auto sm:max-w-md">
            <div className="flex flex-col gap-4 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                name="email"
                autoComplete="email"
                required
                className="flex-1 rounded-full border-0 px-6 py-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs text-ocean-light/80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
