import { RaffleStatus } from "@/data/raffles";

const statusConfig: Record<
  RaffleStatus,
  { label: string; classes: string; pulse?: boolean }
> = {
  active: {
    label: "Active",
    classes: "bg-green-50 text-green-700 ring-green-600/20",
    pulse: true,
  },
  upcoming: {
    label: "Coming Soon",
    classes: "bg-ocean/10 text-ocean-dark ring-ocean/20",
  },
  completed: {
    label: "Completed",
    classes: "bg-gray-50 text-gray-600 ring-gray-500/20",
  },
};

export function RaffleStatusBadge({ status }: { status: RaffleStatus }) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ring-1 ring-inset ${config.classes}`}
    >
      {config.pulse && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
      )}
      {config.label}
    </span>
  );
}
