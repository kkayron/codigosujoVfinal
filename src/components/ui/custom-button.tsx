
import React from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: "default" | "outline";
}

export function CustomButton({ href, className = "", variant = "default", ...props }: CustomButtonProps) {
  const buttonContent = (
    <span className="inline-block transition-transform duration-200 group-hover:scale-105 animate-fade-in">
      Aulas Em Ebooks/Video-aula
    </span>
  );

  const baseClasses = "group relative text-white font-heading font-semibold text-base px-6 py-3 rounded-[0.6rem] focus-visible:ring-2 focus-visible:ring-codigosujo-red/70 transition-all duration-200 btn-hover-effect";
  
  // Determine style based on variant
  const variantClasses = variant === "outline" 
    ? "bg-transparent border border-codigosujo-red text-codigosujo-red hover:bg-codigosujo-red/10" 
    : "bg-codigosujo-red hover:bg-codigosujo-red/90 shadow-none";
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button
      type="button"
      className={combinedClasses}
      {...props}
    >
      {buttonContent}
    </button>
  );
}
