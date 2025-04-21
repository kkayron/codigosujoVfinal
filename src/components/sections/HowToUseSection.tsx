
import { StepCard } from "@/components/ui/step-card";

export function HowToUseSection() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        Como <span className="text-codigosujo-red">usar</span>
      </h2>
      <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Processo simples, sem complicação. Da ideia ao sistema pronto em minutos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StepCard 
          number="1" 
          title="Diga o que você quer" 
          description="Quero um sistema de orçamentos com PDF"
        />
        
        <StepCard 
          number="2" 
          title="Receba o prompt técnico" 
          description="Pronto pra usar no lovable.dev"
        />
        
        <StepCard 
          number="3" 
          title="Cole no Lovable" 
          description="E veja o sistema nascer"
        />
      </div>
    </>
  );
}
