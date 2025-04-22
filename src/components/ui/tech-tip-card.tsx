
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TechTipCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export function TechTipCard({ 
  title, 
  description,
  className,
  ...props 
}: TechTipCardProps) {
  return (
    <div 
      className={cn(
        "bg-codigosujo-dark border border-codigosujo-red/20 p-4 rounded-sm hover:border-codigosujo-red/50 transition-all duration-300",
        className
      )} 
      {...props}
    >
      <div className="font-mono text-xs text-codigosujo-red mb-2">$ sudo hack</div>
      <h3 className="text-lg font-heading font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
