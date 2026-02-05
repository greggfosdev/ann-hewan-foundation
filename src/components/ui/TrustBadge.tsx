export function TrustBadge() {
  return (
    <div className="bg-trust-green text-white py-2.5 px-4">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm font-medium">
        <span className="flex items-center gap-2">
          <svg
            className="h-4 w-4 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
          501(c)(3) Verified Nonprofit
        </span>
        <span className="hidden sm:inline text-emerald-200">|</span>
        <span className="flex items-center gap-2">
          <svg
            className="h-4 w-4 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
              clipRule="evenodd"
            />
          </svg>
          100% of donations fund programs
        </span>
      </div>
    </div>
  );
}
