import Link from "next/link";
import { getActiveRaffle, hasActiveRaffle } from "@/data/raffles";
import { CountdownTimer } from "@/components/ui/CountdownTimer";

export function RafflePromo() {
  if (!hasActiveRaffle()) return null;

  const raffle = getActiveRaffle()!;
  const topPrize = raffle.prizes[0];

  return (
    <section className="bg-gradient-to-br from-gold/5 to-coral/5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Raffle Fundraiser
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {raffle.title}
          </h2>
          {topPrize && (
            <p className="mt-4 text-lg text-gray-600">
              Grand Prize: <span className="font-semibold text-gold-dark">{topPrize.name}</span>{" "}
              — {topPrize.value}
            </p>
          )}

          <div className="mt-8 flex justify-center">
            <CountdownTimer targetDate={raffle.drawDate} />
          </div>

          <div className="mt-8">
            <Link
              href={`/raffles/${raffle.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all"
            >
              Get Raffle Tickets
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
        </div>
      </div>
    </section>
  );
}
