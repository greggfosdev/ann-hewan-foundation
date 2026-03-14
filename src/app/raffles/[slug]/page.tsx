import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllRaffles, getRaffleBySlug } from "@/data/raffles";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { RaffleStatusBadge } from "@/components/ui/RaffleStatusBadge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllRaffles().map((raffle) => ({ slug: raffle.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const raffle = getRaffleBySlug(slug);
  if (!raffle) return {};
  return {
    title: `${raffle.title} | Raffles | The Ann Hewan Foundation`,
    description: raffle.subtitle,
  };
}

export default async function RaffleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const raffle = getRaffleBySlug(slug);
  if (!raffle) notFound();

  const isActive = raffle.status === "active";
  const isCompleted = raffle.status === "completed";
  const iframeHeight = raffle.iframeHeight ?? 1400;

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/raffles" className="hover:text-gold-dark transition-colors">
            All Raffles
          </Link>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <span className="text-gray-900 font-medium">{raffle.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <RaffleStatusBadge status={raffle.status} />
              <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600">
                Drawing{" "}
                {new Date(raffle.drawDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {raffle.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{raffle.subtitle}</p>
            {isActive && (
              <div className="mt-8 flex justify-center">
                <CountdownTimer targetDate={raffle.drawDate} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Prize Showcase */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900">Prizes</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {raffle.prizes.map((prize, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5"
              >
                {prize.image && (
                  <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={prize.image}
                      alt={prize.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-gray-900">{prize.name}</h3>
                  {i === 0 && (
                    <span className="shrink-0 rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold-dark">
                      Grand Prize
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-600">{prize.description}</p>
                <p className="mt-3 text-sm font-semibold text-gold-dark">{prize.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket Tiers */}
      {isActive && (
        <section className="border-y border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-3">
              {raffle.ticketTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-xl p-5 text-center ${
                    tier.popular
                      ? "bg-gold/5 ring-2 ring-gold"
                      : "bg-cream"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-0.5 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <p className="text-2xl font-bold text-gold-dark">${tier.price}</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">{tier.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {tier.quantity} {tier.quantity === 1 ? "entry" : "entries"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Zeffy Embed (active) or Winner Section (completed) */}
      {isActive && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
              Get Your Tickets
            </h2>
            <div className="rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 overflow-hidden">
              <iframe
                title={`Purchase tickets for ${raffle.title}`}
                src={raffle.zeffyEmbedUrl}
                className="w-full border-0"
                style={{ minHeight: `${iframeHeight}px` }}
                allow="payment"
              />
            </div>
            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-trust-green" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure payment via Zeffy — 100% free, zero fees
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-trust-green" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                All proceeds support foundation programs
              </span>
            </div>
          </div>
        </section>
      )}

      {isCompleted && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-gray-900/5">
              <div className="mx-auto h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="h-8 w-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-900">Raffle Complete</h2>
              {raffle.winner && (
                <p className="mt-3 text-lg text-gray-700">
                  Winner: <span className="font-semibold text-gold-dark">{raffle.winner}</span>
                </p>
              )}
              <div className="mt-6 flex items-center justify-center gap-8">
                {raffle.amountRaised && (
                  <div>
                    <p className="text-2xl font-bold text-trust-green">{raffle.amountRaised}</p>
                    <p className="text-sm text-gray-500">Raised</p>
                  </div>
                )}
                {raffle.totalTicketsSold != null && (
                  <div>
                    <p className="text-2xl font-bold text-ocean">{raffle.totalTicketsSold}</p>
                    <p className="text-sm text-gray-500">Tickets Sold</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Rules */}
      <section className="border-t border-gray-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-gray-900">Rules &amp; Terms</h2>
            <ul className="mt-4 space-y-3">
              {raffle.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Share This Raffle */}
      {isActive && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-sm text-center">
              <h2 className="text-xl font-bold text-gray-900">
                Share This Raffle
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Know someone who&apos;d want to enter? Share the QR code below
                — screenshot it, print it, or send it to a friend.
              </p>
              <div className="mt-6 inline-block rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5">
                <Image
                  src="/images/raffles/petes-raffle-qr-code.png"
                  alt="QR code to purchase raffle tickets"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <p className="mt-3 text-xs text-gray-400">
                Scan to purchase tickets on your phone
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Beneficiary CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Where the proceeds go
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Proceeds support {raffle.beneficiary}
            </h2>
            <p className="mt-4 text-gray-600">{raffle.description}</p>
            <Link
              href="/programs"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
            >
              Learn about our programs
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
