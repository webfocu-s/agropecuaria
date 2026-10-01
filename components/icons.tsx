type IconProps = { className?: string };

const base = "h-7 w-7";

export function IconPlan({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <rect x="7" y="4" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 11h8M12 16h8M12 21h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 4v3h8V4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconAdvice({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path d="M6 26c1-6 4-10 10-10s9 4 10 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="10" r="5.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 6.5v3l2 1.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconVet({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 5c-2.5 0-4 2-4 4.5S9.5 15 12 17c2.5-2 4-4.9 4-7.5S14.5 5 12 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M20 5c-2.5 0-4 2-4 4.5S17.5 15 20 17c2.5-2 4-4.9 4-7.5S22.5 5 20 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M16 15v5.5M12 27c0-3 1.8-4.5 4-4.5s4 1.5 4 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconLeaf({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 24C6 15 12 7 24 6c1 10-6 17-16 18Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 23c4-5 8-9 13-14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconMaterial({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path d="M6 12 16 6l10 6-10 6-10-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 12v8l10 6 10-6v-8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 18v8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconIncubator({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <rect x="5" y="9" width="22" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 15h22" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="12" cy="20.5" rx="2.6" ry="3.2" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="20" cy="20.5" rx="2.6" ry="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M11 9V6.5c0-1 .8-1.8 1.8-1.8M21 9V6.5c0-1-.8-1.8-1.8-1.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconTank({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path d="M4 13c0-3 5.4-5 12-5s12 2 12 5-5.4 5-12 5-12-2-12-5Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 13v9c0 3 5.4 5 12 5s12-2 12-5v-9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 18.5c0 3 5.4 5 12 5s12-2 12-5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconGarden({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path d="M16 27V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 15c0-5-4-7-8-7 0 5 3.5 7.5 8 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 19c0-5 4-8 9-8 0 5.5-4 8.5-9 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 27h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconChicken({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M20 40c-2-8 3-16 12-17 7-.8 13 3 15 9 3 .5 5 2.6 5 5.4 0 3-2.4 5.4-5.6 5.4H24c-2.5 0-4-1.2-4-2.8Z"
        fill="var(--color-clay-400)"
      />
      <path d="M33 22c-1.5-3-1-6 1.5-8" stroke="var(--color-clay-600)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M34.5 14c1.8-.6 3.4 0 4 1.6-1.8.8-3.4.3-4-1.6Z" fill="var(--color-clay-600)" />
      <circle cx="42" cy="30" r="1.6" fill="var(--color-ink-900)" />
      <path d="M48 32l6 2-6 1.6Z" fill="var(--color-clay-600)" />
      <path d="M22 42c0 3-1 5.5-1 5.5M31 43c0 3-.6 5.5-.6 5.5" stroke="var(--color-clay-600)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconGoat({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M14 34c0-3 3-5 6-4 1-4 5-6 9-5 1-3 4-5 7-4-1 3 0 6 3 8 4 3 5 8 2 12-2 2.5-6 3-9 1.5-2 2-5 3-8 2-4-1-7-4.5-8-8.5-1-.3-2-1-2-2Z"
        fill="var(--color-terra-100)"
        stroke="var(--color-clay-600)"
        strokeWidth="1.4"
      />
      <circle cx="27" cy="27" r="6" fill="var(--color-ink-900)" opacity="0.06" />
      <circle cx="30" cy="27" r="1.4" fill="var(--color-ink-900)" />
      <path d="M20 32c0 4-.6 8-.6 8M40 33c0 4 .8 7.5.8 7.5" stroke="var(--color-clay-600)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCattle({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M13 33c3-4 8-6 13-5 2-4 6-6 10-5 3-3 8-3 10 0 3 0 5 2.4 5 5.2 0 4-3.4 7-7.6 7H21c-4.4 0-8-3-8-7.2Z"
        fill="var(--color-pasture-100)"
        stroke="var(--color-pasture-700)"
        strokeWidth="1.4"
      />
      <path d="M20 24c-2-2-2-5 0-7M42 22c2-2 2-5 0-7" stroke="var(--color-pasture-700)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <circle cx="30" cy="30" r="1.5" fill="var(--color-ink-900)" />
      <circle cx="37" cy="30" r="1.5" fill="var(--color-ink-900)" />
      <path d="M25 38c0 4-1 7-1 7M45 37c0 4 .8 7 .8 7" stroke="var(--color-pasture-700)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
