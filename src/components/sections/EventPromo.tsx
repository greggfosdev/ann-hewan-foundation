import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvent } from "@/data/events";
import { CountdownTimer } from "@/components/ui/CountdownTimer";

export function EventPromo() {
  const event = getUpcomingEvent();
  if (!event) return null;

  return (
    <section
      id="upcoming-event"
      className="bg-gradient-to-br from-ocean/5 to-gold/10 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Flyer */}
          <div className="flex justify-center lg:order-last">
            <a
              href={event.flyerImage}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full max-w-sm"
              aria-label="View the full event flyer"
            >
              <div className="relative aspect-[893/1599] overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/10 transition-transform group-hover:scale-[1.02]">
                <Image
                  src={event.flyerImage}
                  alt={event.flyerAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 24rem"
                />
              </div>
              <p className="mt-3 text-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                Tap to view the full flyer
              </p>
            </a>
          </div>

          {/* Details */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Upcoming Event
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {event.title}
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Presented by{" "}
              {event.presentedByUrl ? (
                <a
                  href={event.presentedByUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ocean-dark hover:text-ocean transition-colors"
                >
                  {event.presentedBy}
                </a>
              ) : (
                <span className="font-medium">{event.presentedBy}</span>
              )}
            </p>
            <p className="mt-4 text-lg text-gray-600">{event.description}</p>

            {/* Date / location / admission */}
            <dl className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-6 w-6 flex-none text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                <div>
                  <dt className="sr-only">Date and time</dt>
                  <dd className="font-semibold text-gray-900">
                    {event.displayDate}
                  </dd>
                  <dd className="text-sm text-gray-600">
                    Starting at {event.displayTime}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-6 w-6 flex-none text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div>
                  <dt className="sr-only">Location</dt>
                  <dd className="font-semibold text-gray-900">
                    {event.location}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-6 w-6 flex-none text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
                <div>
                  <dt className="sr-only">Admission</dt>
                  <dd className="font-semibold text-gray-900">
                    {event.admission}
                  </dd>
                </div>
              </div>
            </dl>

            {/* Highlights */}
            <ul className="mt-8 space-y-3">
              {event.highlights.map((highlight) => (
                <li key={highlight.title} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-ocean"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">
                      {highlight.title}
                    </span>{" "}
                    — {highlight.description}
                  </p>
                </li>
              ))}
            </ul>

            {/* Countdown */}
            <div className="mt-8">
              <CountdownTimer targetDate={event.date} />
            </div>

            {/* CTA */}
            {event.programSlug && (
              <div className="mt-8">
                <Link
                  href={`/programs/${event.programSlug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-ocean px-8 py-4 text-base font-semibold text-white shadow-lg shadow-ocean/30 hover:bg-ocean-dark hover:shadow-ocean/40 transition-all"
                >
                  Learn About the Program
                  <svg
                    className="h-5 w-5"
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
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
