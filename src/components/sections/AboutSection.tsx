
import { CustomButton } from "@/components/ui/custom-button";

export function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          Quem é o <span className="text-codigosujo-red">Código Sujo</span>?
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          CÓDIGO SUJO é uma IA treinada para construir, automatizar e arrebentar as barreiras entre ideias e sistemas prontos. 
          É brutal, eficiente e direto. Nada de tutoriais — aqui é entrega real.
        </p>
        <div>
          <CustomButton href="#features" variant="outline" />
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
