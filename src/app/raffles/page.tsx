import Link from "next/link";
import { Metadata } from "next";
import { getActiveRaffle, getPastRaffles } from "@/data/raffles";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { RaffleStatusBadge } from "@/components/ui/RaffleStatusBadge";

export const metadata: Metadata = {
  title: "Raffles | The Ann Hewan Foundation",
  description:
    "Enter our fundraiser raffles to win prizes while supporting children and families in Goodwill and surrounding communities.",
};

export default function RafflesPage() {
  const activeRaffle = getActiveRaffle();
  const pastRaffles = getPastRaffles();

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Support &amp; Win
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Raffles
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Enter for a chance to win while supporting our programs that feed,
              educate, and uplift communities in St. James, Jamaica.
            </p>
          </div>
        </div>
      </section>

      {/* Active Raffle */}
      {activeRaffle ? (
        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href={`/raffles/${activeRaffle.slug}`}
              className="group block rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5 transition-all hover:shadow-2xl sm:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <RaffleStatusBadge status="active" />
                    <span className="text-sm text-gray-500">
                      Drawing{" "}
                      {new Date(activeRaffle.drawDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-gold-dark transition-colors sm:text-3xl">
                    {activeRaffle.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{activeRaffle.subtitle}</p>

                  {/* Top prize highlight */}
                  {activeRaffle.prizes[0] && (
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-dark">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Grand Prize: {activeRaffle.prizes[0].name} — {activeRaffle.prizes[0].value}
                    </div>
                  )}

                  <p className="mt-4 text-sm text-gray-500">
                    Tickets from ${Math.min(...activeRaffle.ticketTiers.map((t) => t.price))}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <CountdownTimer targetDate={activeRaffle.drawDate} />
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-gold/30 group-hover:bg-gold-dark transition-all">
                    Get Tickets
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ) : (
        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-900/5">
              <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                No Active Raffle Right Now
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Follow us on social media to be the first to know when our next
                raffle launches.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Past Raffles */}
      {pastRaffles.length > 0 && (
        <section className="border-t border-gray-200 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Past Raffles
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {pastRaffles.map((raffle) => (
                <Link
                  key={raffle.slug}
                  href={`/raffles/${raffle.slug}`}
                  className="group rounded-2xl bg-cream p-6 transition-all hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <RaffleStatusBadge status="completed" />
                    <span className="text-sm text-gray-500">
                      {new Date(raffle.drawDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-gold-dark transition-colors">
                    {raffle.title}
                  </h3>
                  {raffle.winner && (
                    <p className="mt-2 text-sm text-gray-600">
                      Winner: <span className="font-medium">{raffle.winner}</span>
                    </p>
                  )}
                  {raffle.amountRaised && (
                    <p className="mt-1 text-sm text-trust-green font-medium">
                      {raffle.amountRaised} raised
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
