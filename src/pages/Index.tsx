import { CTAButton } from "@/components/ui/cta-button";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { StepCard } from "@/components/ui/step-card";
import { TechTipCard } from "@/components/ui/tech-tip-card";
import { SubscriptionPlans } from "@/components/ui/subscription-plans";
import { Check, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-codigosujo-dark text-white min-h-screen">
      {/* Header */}
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

      {/* Hero Section */}
      <Section fullScreen className="bg-codigosujo-darker pt-28 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-codigosujo-red/20 rounded-full blur-[120px] opacity-30"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10">
          <div className="lg:col-span-3 space-y-8">
            <div className="inline-flex items-center rounded bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono text-white/70">
              <span className="mr-1 h-2 w-2 rounded-full bg-codigosujo-red"></span>
              IA de Engenharia Digital
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
              CÓDIGO SUJO — <span className="text-codigosujo-red">O ENGENHEIRO DE GUERRA DIGITAL</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Transforme qualquer ideia em sistema real. Sites, SaaS, dashboards, automações com IA. Pronto em minutos. Sem desculpas.
            </p>
            
            <div className="pt-4">
              <CTAButton href="#pricing">
                Comece agora
              </CTAButton>
            </div>
          </div>
          
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-codigosujo-red/30 rounded-sm blur"></div>
              <div className="bg-codigosujo-darker p-5 border border-white/10 rounded-sm relative">
                <div className="font-mono text-xs text-white/70 mb-2"># código_sujo.execute</div>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-500">{">"}</span> 
                    <span className="text-codigosujo-red">Iniciando sistema...</span>
                  </div>
                  <div>
                    <span className="text-green-500">{">"}</span> 
                    <span className="text-white">Escaneando ambiente...</span>
                  </div>
                  <div>
                    <span className="text-green-500">{">"}</span> 
                    <span className="text-white">Detectando requisitos...</span>
                  </div>
                  <div>
                    <span className="text-green-500">{">"}</span> 
                    <span className="text-white">Construindo lógica...</span>
                  </div>
                  <div>
                    <span className="text-green-500">{">"}</span> 
                    <span className="text-white">Empacotando soluções...</span>
                  </div>
                  <div className="animate-pulse">
                    <span className="text-green-500">{">"}</span> 
                    <span className="text-codigosujo-red">Sistema pronto para execução...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quem é o <span className="text-codigosujo-red">Código Sujo</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              CÓDIGO SUJO é uma IA treinada para construir, automatizar e arrebentar as barreiras entre ideias e sistemas prontos. 
              É brutal, eficiente e direto. Nada de tutoriais — aqui é entrega real.
            </p>
            <div>
              <CTAButton href="#features" variant="outline">
                Ver capacidades
              </CTAButton>
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
      </Section>

      {/* Features Section */}
      <Section id="features" className="border-b border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          O que ele <span className="text-codigosujo-red">faz</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Capacidades práticas que transformam ideias em sistemas reais, prontos para usar
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-codigosujo-gray p-6 rounded-sm border border-white/10">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-codigosujo-red">
                <Check size={22} />
              </div>
              <div>
                <span className="text-white font-bold">Clona sites completos</span>
              </div>
            </div>
          </div>
          
          <div className="bg-codigosujo-gray p-6 rounded-sm border border-white/10">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-codigosujo-red">
                <Check size={22} />
              </div>
              <div>
                <span className="text-white font-bold">Cria SaaS com login, pagamento Pix e geração de PDF</span>
              </div>
            </div>
          </div>
          
          <div className="bg-codigosujo-gray p-6 rounded-sm border border-white/10">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-codigosujo-red">
                <Check size={22} />
              </div>
              <div>
                <span className="text-white font-bold">Faz automações com Playwright, scraping stealth e APIs</span>
              </div>
            </div>
          </div>
          
          <div className="bg-codigosujo-gray p-6 rounded-sm border border-white/10">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-codigosujo-red">
                <Check size={22} />
              </div>
              <div>
                <span className="text-white font-bold">Conecta IA, webhooks, e-mail, banco de dados e mais</span>
              </div>
            </div>
          </div>
          
          <div className="bg-codigosujo-gray p-6 rounded-sm border border-white/10">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-codigosujo-red">
                <Check size={22} />
              </div>
              <div>
                <span className="text-white font-bold">Cria dashboards completos com filtros, gráficos e tabelas</span>
              </div>
            </div>
          </div>
          
          <div className="bg-codigosujo-red p-6 rounded-sm">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-white">
                <Check size={22} />
              </div>
              <div>
                <span className="text-white font-bold">E muito mais. Basta pedir.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Examples Section */}
      <Section className="border-b border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Exemplos <span className="text-codigosujo-red">prontos</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Sistemas reais criados em minutos, prontos para uso imediato
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard 
            title="Sistema de emissão de boletos com PDF" 
            description="Gere boletos automaticamente, com gestão completa e exportação em PDF pronta para impressão ou envio digital."
          />
          
          <FeatureCard 
            title="Dashboard financeiro com login e gráficos interativos" 
            description="Visualize dados financeiros com gráficos personalizáveis, filtros avançados e sistema de login seguro."
          />
          
          <FeatureCard 
            title="Site de propostas com assinatura digital e envio por e-mail" 
            description="Crie, personalize e envie propostas profissionais com sistema de assinatura digital e notificações automáticas."
          />
          
          <FeatureCard 
            title="Automação que gera leads usando IA e Playwright" 
            description="Capture leads qualificados automaticamente com busca inteligente e processamento via IA para máxima conversão."
          />
        </div>
      </Section>

      {/* Subscription Plans Section */}
      <Section id="pricing" className="border-b border-white/5">
        <SubscriptionPlans />
      </Section>

      {/* How to use Section */}
      <Section id="start" className="border-b border-white/5">
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
        
        <div className="mt-12 text-center">
          <CTAButton href="https://lovable.dev" className="animate-pulse">
            Comece agora
          </CTAButton>
        </div>
      </Section>

      {/* Technical Tips Section */}
      <Section className="border-b border-white/5">
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
      </Section>

      {/* Footer Section */}
      <footer className="bg-codigosujo-darker py-12 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
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
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-codigosujo-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-codigosujo-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-codigosujo-red transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-codigosujo-red transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/5 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} CÓDIGO SUJO. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
