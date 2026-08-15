"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-colors duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2";

  const variants = {
    primary: "bg-black text-white hover:bg-black/90",
    secondary:
      "bg-transparent text-black border border-black/10 hover:border-black/20 hover:bg-black/[0.02]",
    ghost: "bg-transparent text-graphite hover:text-black hover:bg-black/[0.03]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: disabled ? {} : { scale: 1.02 },
        whileTap: disabled ? {} : { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 25 },
      };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button type={type} disabled={disabled} className={classes} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}

interface MagneticButtonProps extends ButtonProps {
  magnetic?: boolean;
}

export function MagneticButton(props: MagneticButtonProps) {
  return <Button {...props} />;
}
