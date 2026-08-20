import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "mark" | "wordmark";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export function Logo({
  variant = "full",
  theme = "light",
  size = "md",
  className,
  href = "/",
}: LogoProps) {
  const sizes = {
    sm: { height: 38, width: 128 },
    md: { height: 48, width: 162 },
    lg: { height: 60, width: 202 },
  };

  const markSizes = {
    sm: 32,
    md: 44,
    lg: 56,
  };

  const content =
    variant === "full" ? (
      <Image
        src="/logo-algorithec.png"
        alt="ALGORITHEC — AI Decision Engine"
        width={sizes[size].width}
        height={sizes[size].height}
        className={cn(
          "h-auto object-contain transition-all duration-200",
          theme === "dark" && "brightness-0 invert",
          size === "sm" && "max-h-9 sm:max-h-10",
          size === "md" && "max-h-10 sm:max-h-11 md:max-h-12",
          size === "lg" && "max-h-13 lg:max-h-16"
        )}
        priority
      />
    ) : variant === "mark" ? (
      <LogoMark size={markSizes[size]} theme={theme} />
    ) : (
      <span
        className={cn(
          "font-display font-medium tracking-[0.15em] uppercase",
          theme === "dark" ? "text-white" : "text-black",
          size === "sm" && "text-xs",
          size === "md" && "text-sm",
          size === "lg" && "text-base"
        )}
      >
        ALGORITHEC
      </span>
    );

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-sm", className)}
      aria-label="ALGORITHEC Home"
    >
      {content}
    </Link>
  );
}

function LogoMark({ size, theme }: { size: number; theme: "light" | "dark" }) {
  return (
    <Image
      src="/logo-mark.png"
      alt="ALGORITHEC Mark"
      width={size}
      height={size}
      className={cn(
        "object-contain",
        theme === "dark" && "brightness-0 invert"
      )}
    />
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt="ALGORITHEC"
      width={32}
      height={32}
      className={cn("object-contain", className)}
    />
  );
}
