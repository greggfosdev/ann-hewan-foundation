import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  formatRaffleDate,
  getAllRaffles,
  getRaffleBySlug,
} from "@/data/raffles";
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

  const isCompleted = raffle.status === "completed";

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
                Drawing {formatRaffleDate(raffle.drawDate)}
              </span>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {raffle.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{raffle.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Prize Showcase */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900">Prizes</h2>
          <div className={`mt-8 grid gap-6 ${raffle.prizes.length === 1 ? "mx-auto max-w-sm" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
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

      {isCompleted && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-gray-900/5">
              <div className="mx-auto h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="h-8 w-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-900">Drawing Complete</h2>
              {raffle.resultSummary && (
                <p className="mt-3 text-gray-600">{raffle.resultSummary}</p>
              )}
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

      {isCompleted && raffle.recapImages && raffle.recapImages.length > 0 && (
        <section id="gathering-gallery" className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Moments from the August 2026 Gathering
              </h2>
              <p className="mt-3 text-gray-600">
                A look at the community event connected with the fundraiser.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2">
              {raffle.recapImages.map((photo) => (
                <figure key={photo.src} className="text-center">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={750}
                    height={1000}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-auto w-full rounded-xl shadow-sm"
                  />
                  <figcaption className="mt-3 text-sm text-gray-500">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {isCompleted && raffle.recapVideos && raffle.recapVideos.length > 0 && (
        <section className="border-t border-gray-200 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Drawing &amp; Prize Handoff
              </h2>
              <p className="mt-3 text-gray-600">
                Moments from the raffle and delivery of the prize.
              </p>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {raffle.recapVideos.map((video) => (
                <figure key={video.src} className="rounded-2xl bg-cream p-4 sm:p-6">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    className="mx-auto aspect-[9/16] max-h-[32rem] w-full rounded-xl bg-black object-contain"
                    aria-label={video.title}
                  >
                    <source src={video.src} type="video/mp4" />
                    <track kind="captions" src={video.captionsSrc} srcLang="en" label="English" default />
                    Your browser does not support the video tag.
                  </video>
                  <figcaption className="mt-4">
                    <h3 className="font-semibold text-gray-900">{video.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{video.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rules */}
      <section className="border-t border-gray-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-bold text-gray-900">
              {isCompleted ? "Original Raffle Rules & Terms" : "Rules & Terms"}
            </h2>
            {isCompleted && (
              <p className="mt-2 text-sm text-gray-500">
                These terms applied while the raffle was open for entries.
              </p>
            )}
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
