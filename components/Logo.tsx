/**
 * Alvora Talent logo system.
 * AT monogram: A's crossbar extends into the T — shared structural element.
 * Use `dark` prop for white version on dark backgrounds.
 */

interface Props {
  className?: string;
  dark?: boolean;
}

export function ATMonogram({ className, dark = false }: Props) {
  const color = dark ? "#F6F6F4" : "#111111";
  return (
    <svg
      className={className}
      viewBox="0 0 44 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AT"
    >
      {/* A — left leg */}
      <line x1="2" y1="28" x2="13" y2="2" stroke={color} strokeWidth="2" strokeLinecap="square" />
      {/* A — right leg */}
      <line x1="13" y1="2" x2="24" y2="28" stroke={color} strokeWidth="2" strokeLinecap="square" />
      {/* Shared crossbar — A's crossbar extends rightward to become T's crossbar */}
      <line x1="6" y1="19" x2="42" y2="19" stroke={color} strokeWidth="2" strokeLinecap="square" />
      {/* T — stem, drops from midpoint of T's crossbar */}
      <line x1="31" y1="19" x2="31" y2="28" stroke={color} strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function Logo({ className, dark = false }: Props) {
  const textColor = dark ? "text-[#F6F6F4]" : "text-[#111111]";
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <ATMonogram className="w-8 h-auto shrink-0" dark={dark} />
      <span className={`text-[15px] font-medium tracking-[0.12em] uppercase ${textColor}`}>
        Alvora Talent
      </span>
    </span>
  );
}
