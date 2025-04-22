
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CTAButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "outline";
}

export function CTAButton({ 
  children, 
  className, 
  variant = "primary",
  href,
  ...props 
}: CTAButtonProps) {
  return (
    <a 
      href={href} 
      className={cn(
        "inline-flex items-center justify-center font-bold text-lg px-8 py-3 rounded-sm transition-all duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-codigosujo-red focus:ring-offset-2 focus:ring-offset-codigosujo-dark shadow-inner",
        variant === "primary" && "bg-codigosujo-red text-white hover:bg-red-700 shadow-white/10",
        variant === "outline" && "border-2 border-codigosujo-red text-codigosujo-red hover:bg-codigosujo-red/10",
        className
      )} 
      {...props}
    >
      {children}
    </a>
  );
}
