export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M50 6c2.6 0 5.1.2 7.6.6l1 6.9a37 37 0 0 1 10 4.1l6-3.9a44 44 0 0 1 10.7 10.7l-3.9 6a37 37 0 0 1 4.1 10l6.9 1a44 44 0 0 1 0 15.2l-6.9 1a37 37 0 0 1-4.1 10l3.9 6a44 44 0 0 1-10.7 10.7l-6-3.9a37 37 0 0 1-10 4.1l-1 6.9a44 44 0 0 1-15.2 0l-1-6.9a37 37 0 0 1-10-4.1l-6 3.9A44 44 0 0 1 13.7 82.7l3.9-6a37 37 0 0 1-4.1-10l-6.9-1a44 44 0 0 1 0-15.2l6.9-1a37 37 0 0 1 4.1-10l-3.9-6A44 44 0 0 1 24.4 13.6l6 3.9a37 37 0 0 1 10-4.1l1-6.9C43.9 6.2 46.4 6 50 6Z"
        stroke="var(--color-clay-500)"
        strokeWidth="5.5"
        strokeLinejoin="round"
      />
      <path
        d="M67 24c3.8 2 6.4 1.6 9-2"
        stroke="var(--color-pasture-500)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M69 27c1 3.4 3 5 7 5"
        stroke="var(--color-pasture-500)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="34" y="34" width="10" height="34" fill="var(--color-pasture-500)" />
      <path d="M50 34 66 34 54 51 66 68 50 68 38 51Z" fill="var(--color-clay-500)" />
      <circle cx="41" cy="63" r="10.5" fill="var(--color-ink-900)" />
      <path
        d="M35.5 59.5c.6-2 2-3 3.5-3M46.5 59.5c-.6-2-2-3-3.5-3"
        stroke="var(--color-terra-50)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M35 65.5c1.8 2.6 4 3.8 6 3.8s4.2-1.2 6-3.8"
        stroke="var(--color-terra-50)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
