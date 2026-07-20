export interface EventHighlight {
  title: string;
  description: string;
}

export interface CommunityEvent {
  slug: string;
  title: string;
  presentedBy: string;
  presentedByUrl?: string;
  description: string;
  /** Event start, ISO 8601 with timezone (Jamaica is UTC-5 year-round) */
  date: string;
  /** The event stops appearing on the site after this moment */
  hideAfter: string;
  displayDate: string;
  displayTime: string;
  location: string;
  admission: string;
  highlights: EventHighlight[];
  flyerImage: string;
  flyerAlt: string;
  /** Slug of the related program page under /programs, if any */
  programSlug?: string;
}

const events: CommunityEvent[] = [
  {
    slug: "back-to-school-treat-health-fair-2026",
    title: "Annual Back to School Treat & Health Fair",
    presentedBy:
      "Goodwill School Alumni Foundation in association with The Ann Hewan Foundation",
    presentedByUrl: "https://www.goodwillschoolalumni.org",
    description:
      "Join us for a day of community, health, and learning. Students receive back-to-school support alongside free medical screenings, and adults can get health checks and wellness information — all in one place.",
    date: "2026-08-07T10:00:00-05:00",
    hideAfter: "2026-08-08T00:00:00-05:00",
    displayDate: "Friday, August 7, 2026",
    displayTime: "10:00 AM",
    location: "Goodwill United Church, Goodwill, St. James",
    admission: "Free admission — everyone is welcome",
    highlights: [
      {
        title: "Medical Screenings for Students",
        description: "Weight & height, vision, and dental checks",
      },
      {
        title: "Health Screenings for Adults",
        description: "Blood pressure, blood sugar, and BMI",
      },
      {
        title: "Health Education & Wellness",
        description: "Nutrition tips, disease prevention, and local resources",
      },
    ],
    flyerImage: "/images/events/back-to-school-health-fair-2026.jpg",
    flyerAlt:
      "Event flyer for the Annual Back to School Treat and Health Fair on August 7, 2026 at 10:00 AM at Goodwill United Church, presented by the Goodwill School Alumni Foundation in association with The Ann Hewan Foundation. Free admission, with medical screenings for students, health screenings for adults, and health education.",
    programSlug: "back-to-school",
  },
];

export function getUpcomingEvent(): CommunityEvent | undefined {
  const now = Date.now();
  return events.find((e) => new Date(e.hideAfter).getTime() > now);
}

export function hasUpcomingEvent(): boolean {
  return getUpcomingEvent() !== undefined;
}
