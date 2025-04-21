
import { CTAButton } from "@/components/ui/cta-button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-6 z-50 bg-codigosujo-darker/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/09d558d1-fac1-425c-8925-4d1e2a89d9df.png" 
            alt="Código Sujo Logo" 
            className="h-10 w-10 mr-3"
          />
          <div className="font-mono font-bold text-xl text-codigosujo-red">
            CÓDIGO<span className="text-white">/</span>SUJO
          </div>
        </div>
        <div>
          <CTAButton href="#pricing" variant="outline" className="text-sm px-4 py-2">
            Comece agora
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
