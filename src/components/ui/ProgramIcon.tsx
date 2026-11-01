type ProgramIconKind = "nutrition" | "education" | "community" | "technology" | "relief";

const paths: Record<ProgramIconKind, string> = {
  nutrition: "M3 11h18c0 5-3.5 8-9 8s-9-3-9-8ZM8 21h8M7 8c-3-2 3-3 0-5m5 5c-3-2 3-3 0-5m5 5c-3-2 3-3 0-5",
  education: "M12 6v15M3 4c3-1 6-.5 9 2 3-2.5 6-3 9-2v15c-3-1-6-.5-9 2-3-2.5-6-3-9-2V4ZM6 8l3 1m-3 3 3 1m6-4 3-1m-3 5 3-1",
  community: "M15 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM3 21v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2H3ZM3 7a2.5 2.5 0 0 1 2.5 5M21 7a2.5 2.5 0 0 0-2.5 5",
  technology: "M4 4h16v12H4V4ZM2 20h20l-2-4H4l-2 4Z",
  relief: "M2 11 12 3l10 8M5 9v12h5v-7h4v7h5V9",
};

/** Decorative, consistent program symbols inspired by the banner's three pillars. */
export function ProgramIcon({ kind, className = "h-8 w-8" }: { kind: ProgramIconKind; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
      <path d={paths[kind]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
