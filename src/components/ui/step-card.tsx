
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface StepCardProps extends HTMLAttributes<HTMLDivElement> {
  number: string | number;
  title: string;
  description: string;
}

export function StepCard({ 
  number, 
  title, 
  description,
  className,
  ...props 
}: StepCardProps) {
  return (
    <div 
      className={cn(
        "bg-codigosujo-gray border border-white/10 p-6 rounded-sm relative",
        className
      )} 
      {...props}
    >
      <div className="absolute -top-5 -left-2 bg-codigosujo-red text-white font-mono text-2xl font-bold w-10 h-10 flex items-center justify-center">
        {number}
      </div>
      <h3 className="text-xl font-bold mt-4 mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
