
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  containerClassName?: string;
  fullScreen?: boolean;
  wrapperClassName?: string;
}

export function Section({ 
  children, 
  className, 
  containerClassName,
  fullScreen = false,
  wrapperClassName,
  ...props 
}: SectionProps) {
  return (
    <section 
      className={cn("relative py-16 md:py-24", 
        fullScreen && "min-h-screen flex flex-col justify-center", 
        className
      )} 
      {...props}
    >
      <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
        <div className={cn("relative", wrapperClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}
