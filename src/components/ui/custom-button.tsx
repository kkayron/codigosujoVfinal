
import React from "react";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: "default" | "outline";
  target?: string;
  rel?: string;
}

export function CustomButton({
  href,
  className = "",
  variant = "default",
  children,
  target,
  rel,
  ...props
}: CustomButtonProps) {
  const baseClasses = 
    "inline-flex items-center justify-center font-heading font-semibold text-base px-6 py-3 rounded-md focus-visible:ring-2 focus-visible:ring-codigosujo-red/70 transition-all duration-200";
  
  // Determine style based on variant
  const variantClasses =
    variant === "outline"
      ? "bg-transparent border border-codigosujo-red text-codigosujo-red hover:bg-codigosujo-red/10"
      : "bg-codigosujo-red hover:bg-codigosujo-red/90 text-white";

  const combinedClasses = cn(baseClasses, variantClasses, className);

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        tabIndex={0}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
