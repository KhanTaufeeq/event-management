import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "light" }: LogoProps) {
  const mainColor =
    variant === "light" ? "text-brand-cream" : "text-brand-gold";
  const subColor = "text-brand-gold";

  return (
    <Link
      href="/"
      className={`group flex flex-col items-center leading-none select-none ${className}`}
      aria-label="Utsava Gatherings Home"
    >
      {/* TOP LINE: The "Soul" (Cormorant Garamond) */}
      <span
        className={`
          font-(family-name:--font-lora) font-bold uppercase tracking-widest 
          text-3xl md:text-4xl lg:text-5xl
          transition-colors duration-500
          ${mainColor} group-hover:text-brand-cream
        `}
      >
        Utsava
      </span>

      {/* BOTTOM LINE: The "Brain" (Montserrat) */}
      <span
        className={`
          font-(family-name:--font-plus-jakarta-sans) font-medium uppercase tracking-[0.35em]
          text-[0.6rem] md:text-[0.7rem] lg:text-[0.8rem]
          mt-1 md:mt-1.5
          transition-all duration-500
          ${subColor} group-hover:tracking-[0.45em]
        `}
      >
        Gatherings
      </span>
    </Link>
  );
}
