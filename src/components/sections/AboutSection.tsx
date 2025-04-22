
import { CustomButton } from "@/components/ui/custom-button";

export function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
          O que é o <span className="text-codigosujo-red">CÓDIGO SUJO?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl">
          CÓDIGO SUJO é uma inteligência artificial que transforma suas ideias em projetos digitais completos. Automatize, crie, lance, sem perder tempo com burocracia. O foco é na entrega, direto ao resultado — sem enrolação.
        </p>
        <div>
          <CustomButton href="#features" variant="outline">
            Saiba Mais
          </CustomButton>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-0.5 bg-codigosujo-red/20 rounded-lg blur opacity-70"></div>
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop" 
          alt="Código Sujo Digital Engineering" 
          className="w-full h-auto rounded-lg border border-white/10 relative z-10"
        />
        <div className="absolute -bottom-3 -right-3 bg-codigosujo-dark border border-codigosujo-red px-4 py-2 font-mono text-sm z-20">
          sistema: operacional
        </div>
      </div>
    </div>
  );
}
