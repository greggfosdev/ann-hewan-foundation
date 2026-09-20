export type RaffleStatus = "active" | "upcoming" | "completed";

export interface RafflePrize {
  name: string;
  description: string;
  value: string;
  image?: string;
}

export interface RaffleRecapVideo {
  src: string;
  title: string;
  description: string;
  captionsSrc: string;
  poster?: string;
}

export interface RaffleRecapImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Raffle {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: RaffleStatus;
  /** Last moment tickets can be bought, ISO 8601 with offset */
  endDate: string;
  /** When the winner is drawn, ISO 8601 with offset */
  drawDate: string;
  startDate: string;
  prizes: RafflePrize[];
  rules: string[];
  beneficiary: string;
  heroImage?: string;
  winner?: string;
  amountRaised?: string;
  totalTicketsSold?: number;
  resultSummary?: string;
  recapImages?: RaffleRecapImage[];
  recapVideos?: RaffleRecapVideo[];
}

const raffles: Raffle[] = [
  {
    slug: "petes-10th-annual-back-to-school-raffle",
    title: "Pete's 10th Annual Back to School Raffle",
    subtitle:
      "The August 2026 drawing supported children heading back to school",
    description:
      "This raffle supported The Ann Hewan Foundation's Back 2 School initiative, which provides school supplies and resources for children in Goodwill and surrounding communities in St. James, Jamaica.",
    status: "completed",
    endDate: "2026-08-06T23:59:00-04:00",
    drawDate: "2026-08-07T12:00:00-04:00",
    startDate: "2026-06-01T00:00:00Z",
    prizes: [
      {
        name: "$500 Visa Gift Card",
        description:
          "A $500.00 Visa Gift Card — use it anywhere Visa is accepted.",
        value: "$500",
      },
    ],
    rules: [
      "Must be 18 years or older to purchase tickets.",
      "Drawing will be held live on Facebook on the draw date.",
      "Winner will be contacted via email and phone within 48 hours.",
      "Prize is non-transferable and cannot be exchanged for cash.",
      "All proceeds benefit The Ann Hewan Foundation programs.",
    ],
    beneficiary: "Back to School Program",
    resultSummary:
      "The drawing is complete, and the $500 Visa gift card has been delivered to the winner.",
    recapImages: [
      {
        src: "/images/raffles/august-2026-venue.webp",
        alt: "Church and surrounding grounds at the August 2026 community gathering",
        caption: "The community gathering venue.",
      },
      {
        src: "/images/raffles/august-2026-community-banner.webp",
        alt: "Goodwill School Alumni Foundation banner with The Ann Hewan Foundation listed as a sponsor",
        caption: "The Goodwill School Alumni Foundation banner, recognizing The Ann Hewan Foundation as a sponsor.",
      },
      {
        src: "/images/raffles/august-2026-families.webp",
        alt: "Families and children seated beneath a tent at the community gathering",
        caption: "Families and children at the gathering.",
      },
      {
        src: "/images/raffles/august-2026-volunteers.webp",
        alt: "Foundation representatives and attendees talking beneath the event tent",
        caption: "Foundation representatives and attendees at the event.",
      },
    ],
  },
];

export function getActiveRaffle(): Raffle | undefined {
  return raffles.find((r) => r.status === "active");
}

export function getPastRaffles(): Raffle[] {
  return raffles
    .filter((r) => r.status === "completed")
    .sort((a, b) => b.drawDate.localeCompare(a.drawDate));
}

export function getRaffleBySlug(slug: string): Raffle | undefined {
  return raffles.find((r) => r.slug === slug);
}

export function getAllRaffles(): Raffle[] {
  return raffles;
}

/**
 * Raffle dates are set in Eastern Time, so format them in it. The entry
 * deadline sits one minute before midnight and would otherwise render as the
 * following day for anyone viewing from a timezone east of ET.
 */
const RAFFLE_TIME_ZONE = "America/New_York";

export function formatRaffleDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    timeZone: RAFFLE_TIME_ZONE,
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
