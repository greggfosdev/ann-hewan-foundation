export type RaffleStatus = "active" | "upcoming" | "completed";

export interface RafflePrize {
  name: string;
  description: string;
  value: string;
  image?: string;
}

export interface RaffleTicketTier {
  name: string;
  price: number;
  quantity: number;
  popular?: boolean;
}

export interface Raffle {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: RaffleStatus;
  drawDate: string;
  startDate: string;
  zeffyUrl: string;
  zeffyEmbedUrl: string;
  prizes: RafflePrize[];
  ticketTiers: RaffleTicketTier[];
  rules: string[];
  beneficiary: string;
  heroImage?: string;
  iframeHeight?: number;
  winner?: string;
  amountRaised?: string;
  totalTicketsSold?: number;
}

const raffles: Raffle[] = [
  {
    slug: "petes-10th-annual-back-to-school-raffle",
    title: "Pete's 10th Annual Back to School Raffle",
    subtitle:
      "Win a $500 Visa Gift Card while supporting children heading back to school",
    description:
      "Join our raffle for a chance to win a $500.00 Visa Gift Card while supporting our mission. Each ticket purchase directly contributes to The Ann Hewan Foundation's community impact efforts — providing school supplies and resources for children in Goodwill and surrounding communities in St. James, Jamaica.",
    status: "active",
    drawDate: "2025-08-15T18:00:00Z",
    startDate: "2025-06-01T00:00:00Z",
    zeffyUrl:
      "https://www.zeffy.com/ticketing/petes-10th-annual-back-to-school-raffle",
    zeffyEmbedUrl:
      "https://www.zeffy.com/embed/ticketing/petes-10th-annual-back-to-school-raffle",
    prizes: [
      {
        name: "$500 Visa Gift Card",
        description:
          "A $500.00 Visa Gift Card — use it anywhere Visa is accepted.",
        value: "$500",
      },
    ],
    ticketTiers: [
      { name: "1 Ticket", price: 10, quantity: 1 },
      { name: "3 Tickets", price: 25, quantity: 3, popular: true },
    ],
    rules: [
      "Must be 18 years or older to purchase tickets.",
      "Drawing will be held live on Facebook on the draw date.",
      "Winner will be contacted via email and phone within 48 hours.",
      "Prize is non-transferable and cannot be exchanged for cash.",
      "All proceeds benefit The Ann Hewan Foundation programs.",
    ],
    beneficiary: "Back to School Program",
  },
];

export function getActiveRaffle(): Raffle | undefined {
  return raffles.find((r) => r.status === "active");
}

export function getPastRaffles(): Raffle[] {
  return raffles.filter((r) => r.status === "completed");
}

export function getRaffleBySlug(slug: string): Raffle | undefined {
  return raffles.find((r) => r.slug === slug);
}

export function hasActiveRaffle(): boolean {
  return raffles.some((r) => r.status === "active");
}

export function getAllRaffles(): Raffle[] {
  return raffles;
}
