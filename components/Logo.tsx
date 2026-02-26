/**
 * Alvora Talent logo mark — a clean geometric "A" / mountain peak.
 * Use `dark` prop for white version on dark backgrounds.
 */

interface LogoMarkProps {
  className?: string;
  dark?: boolean;
}

interface LogoProps {
  className?: string;
  dark?: boolean;
  showWordmark?: boolean;
}

export function LogoMark({ className, dark = false }: LogoMarkProps) {
  const color = dark ? "#ffffff" : "#0a0a0a";
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Alvora Talent mark"
    >
      {/* Two legs of the A — meeting at a sharp apex */}
      <path
        d="M4 28 L16 4 L28 28"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Crossbar — extends 1px past each leg for a distinctive detail */}
      <line
        x1="7"
        y1="20"
        x2="25"
        y2="20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Logo({ className, dark = false, showWordmark = true }: LogoProps) {
  const textColor = dark ? "text-white" : "text-gray-900";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="w-7 h-7 shrink-0" dark={dark} />
      {showWordmark && (
        <span className={`font-semibold text-[15px] tracking-tight ${textColor}`}>
          Alvora{" "}
          <span className={`font-light ${dark ? "text-white/70" : "text-gray-500"}`}>
            Talent
          </span>
        </span>
      )}
    </span>
  );
}
