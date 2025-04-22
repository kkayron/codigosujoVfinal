
import { Code, FileText, LayoutDashboard, Workflow } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";

export function ExamplesSection() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
        Exemplos <span className="text-codigosujo-red">prontos</span>
      </h2>
      <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Sistemas reais criados em minutos, prontos para uso imediato
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard 
          title="Sistema de emissão de boletos com PDF" 
          description="Gere boletos automaticamente, com gestão completa e exportação em PDF pronta para impressão ou envio digital."
          icon={<FileText size={30} />}
        />
        
        <FeatureCard 
          title="Dashboard financeiro com login e gráficos interativos" 
          description="Visualize dados financeiros com gráficos personalizáveis, filtros avançados e sistema de login seguro."
          icon={<LayoutDashboard size={30} />}
        />
        
        <FeatureCard 
          title="Site de propostas com assinatura digital e envio por e-mail" 
          description="Crie, personalize e envie propostas profissionais com sistema de assinatura digital e notificações automáticas."
          icon={<Code size={30} />}
        />
        
        <FeatureCard 
          title="Automação que gera leads usando IA e Playwright" 
          description="Capture leads qualificados automaticamente com busca inteligente e processamento via IA para máxima conversão."
          icon={<Workflow size={30} />}
        />
      </div>
    </>
  );
}
