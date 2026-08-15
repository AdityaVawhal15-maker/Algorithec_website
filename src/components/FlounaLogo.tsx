import Image from "next/image";
import { cn } from "@/lib/utils";

interface FlounaLogoProps {
  theme?: "light" | "dark";
  size?: "xs" | "sm" | "md" | "lg";
  position?: "left" | "right";
  className?: string;
  imageClassName?: string;
  text?: string;
}

export function FlounaLogo({
  theme = "light",
  size = "md",
  position = "left",
  className,
  imageClassName,
  text = "Flouna AI",
}: FlounaLogoProps) {
  const logoSrc = theme === "dark" ? "/flouna-logo-light.png" : "/flouna-logo.png";

  const sizeClasses = {
    xs: "w-3.5 h-3.5",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const iconElement = (
    <Image
      src={logoSrc}
      alt=""
      width={40}
      height={40}
      className={cn(
        "object-contain inline-block flex-shrink-0 align-middle transition-all duration-200",
        sizeClasses[size],
        imageClassName
      )}
      aria-hidden="true"
    />
  );

  return (
    <span className={cn("inline-flex items-center gap-1.5 align-baseline", className)}>
      {position === "left" && iconElement}
      <span>{text}</span>
      {position === "right" && iconElement}
    </span>
  );
}
