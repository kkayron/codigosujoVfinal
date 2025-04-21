
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
        "bg-codigosujo-dark border border-codigosujo-red/20 p-4 rounded-sm",
        className
      )} 
      {...props}
    >
      <div className="font-mono text-xs text-codigosujo-red mb-2">$ sudo hack</div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
