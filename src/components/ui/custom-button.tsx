
import React from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
}

export function CustomButton({ href, className = "", ...props }: CustomButtonProps) {
  const buttonContent = (
    <span className="inline-block transition-transform duration-200 group-hover:scale-105 animate-fade-in">
      Aulas Em Ebooks/Video-aula
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group relative bg-codigosujo-red text-white font-heading font-semibold text-base px-6 py-3 rounded-[0.6rem] shadow-none hover:bg-codigosujo-red/90 focus-visible:ring-2 focus-visible:ring-codigosujo-red/70 transition-all duration-200 btn-hover-effect ${className}`}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={`group relative bg-codigosujo-red text-white font-heading font-semibold text-base px-6 py-3 rounded-[0.6rem] shadow-none hover:bg-codigosujo-red/90 focus-visible:ring-2 focus-visible:ring-codigosujo-red/70 transition-all duration-200 btn-hover-effect ${className}`}
      {...props}
    >
      {buttonContent}
    </button>
  );
}
