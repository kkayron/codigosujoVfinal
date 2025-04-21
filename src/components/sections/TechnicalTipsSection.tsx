
import { TechTipCard } from "@/components/ui/tech-tip-card";

export function TechnicalTipsSection() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        Dicas <span className="text-codigosujo-red">técnicas</span>
      </h2>
      <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Maximize o potencial dos seus sistemas com estas técnicas profissionais
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TechTipCard 
          title="Frontend Rápido" 
          description="Use o Vercel para publicar sites frontend com alta performance e escalabilidade automática."
        />
        
        <TechTipCard 
          title="Backend Fácil" 
          description="Use Replit para testar backends e APIs sem precisar de infraestrutura complexa."
        />
        
        <TechTipCard 
          title="Autenticação e Dados" 
          description="Use Firebase para autenticação e banco de dados com mínimo de configuração e máxima segurança."
        />
        
        <TechTipCard 
          title="Automação Invisível" 
          description="Playwright stealth para automações sem bloqueios, ideal para scraping e interações complexas."
        />
      </div>
    </>
  );
}
