
import React from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: "default" | "outline";
  target?: string; // para links externos nos planos
  rel?: string;
  style?: React.CSSProperties;
}

export function CustomButton({
  href,
  className = "",
  variant = "default",
  children,
  target,
  rel,
  style,
  ...props
}: CustomButtonProps) {
  const baseClasses =
    "group relative text-white font-heading font-semibold text-base px-6 py-3 rounded-[0.6rem] focus-visible:ring-2 focus-visible:ring-codigosujo-red/70 transition-all duration-200 btn-hover-effect";
  // Determine style based on variant
  const variantClasses =
    variant === "outline"
      ? "bg-transparent border border-codigosujo-red text-codigosujo-red hover:bg-codigosujo-red/10"
      : "bg-codigosujo-red hover:bg-codigosujo-red/90 shadow-none";
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    // Only pass anchor-related props to 'a' tag, avoid passing button events
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        style={style}
        tabIndex={0}
      >
        <span className="block w-full text-center truncate">{children}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      style={style}
      {...props}
    >
      <span className="block w-full text-center truncate">{children}</span>
    </button>
  );
}
