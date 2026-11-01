/** Small, decorative echoes of the banner, drawn as lightweight native SVGs. */
export function Brushstroke() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 180 18"
      className="pointer-events-none mx-auto mt-6 h-3 w-32 text-gold"
      fill="currentColor"
    >
      <path opacity="0.7" d="m3 8 24-3 46-1 61 1 38 3-15 2-49 2-57-1-40 1 8-2Z" />
      <path d="m10 9 38-2 58 1 57 1-11 2-52 1-44-1-36 1 7-2Z" />
      <path opacity="0.45" d="m22 14 39-1 55 1 37-1-16 2-64 1-43-1ZM0 9l9-1-3 2Zm167 1 11-1-7 2Z" />
    </svg>
  );
}
