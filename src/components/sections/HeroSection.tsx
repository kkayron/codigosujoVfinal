
import { CTAButton } from "@/components/ui/cta-button";

export function HeroSection() {
  return (
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
  );
}
