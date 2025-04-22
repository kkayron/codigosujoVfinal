
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ 
  title, 
  description,
  icon,
  className,
  ...props 
}: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "bg-codigosujo-gray border border-white/10 p-6 rounded-sm transition-all duration-300 hover:border-codigosujo-red/50 group",
        className
      )} 
      {...props}
    >
      {icon && (
        <div className="mb-4 text-codigosujo-red group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-codigosujo-red transition-colors duration-300">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
