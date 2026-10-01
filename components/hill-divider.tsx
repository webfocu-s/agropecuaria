export function HillDivider({
  flip = false,
  className = "",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`h-16 w-full sm:h-24 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,40 C220,110 380,0 620,55 C830,105 1000,10 1200,60 L1200,120 L0,120 Z"
        fill="var(--color-clay-500)"
        opacity="0.9"
      />
      <path
        d="M0,70 C260,10 460,110 700,60 C900,20 1040,90 1200,45 L1200,120 L0,120 Z"
        fill="var(--color-pasture-700)"
      />
    </svg>
  );
}
