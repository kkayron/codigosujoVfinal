
import { CustomButton } from "@/components/ui/custom-button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const terminalLines = [
    "Iniciando sistema...",
    "Escaneando ambiente...",
    "Detectando requisitos...",
    "Construindo lógica...",
    "Empacotando soluções...",
    "Sistema pronto para execução..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex(prevIndex => {
        if (prevIndex >= terminalLines.length - 1) return prevIndex;
        return prevIndex + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10">
      <div className="lg:col-span-3 space-y-8">
        <div className="inline-flex items-center rounded bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono text-white/70">
          <span className="mr-1 h-2 w-2 rounded-full bg-codigosujo-red animate-pulse"></span>
          IA de Engenharia Digital
        </div>
        
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
          CÓDIGO SUJO — <span className="text-codigosujo-red">O ENGENHEIRO DE GUERRA DIGITAL</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Transforme qualquer ideia em sistema real. Sites, SaaS, dashboards, automações com IA. Pronto em minutos. Sem desculpas.
        </p>
        
        <div className="pt-4">
          <CustomButton href="#pricing" />
        </div>
      </div>
      
      <div className="lg:col-span-2 block">
        <div className="relative terminal-container">
          {/* Animated border glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-codigosujo-red via-[#9b87f5]/70 to-codigosujo-red rounded-lg blur-sm opacity-75 animate-pulse-red"></div>
          
          <div className="bg-codigosujo-darker p-5 border border-white/10 rounded-lg relative terminal-bg">
            <div className="font-mono text-xs text-white/70 mb-2"># código_sujo.execute</div>
            <div className="space-y-2">
              {terminalLines.map((line, index) => (
                <div key={index} className={`transition-all duration-500 ${index <= activeLineIndex ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="text-green-500">{">"}</span> 
                  <span className={`
                    ${index === terminalLines.length - 1 ? 'text-codigosujo-red' : 'text-white'} 
                    ${index === activeLineIndex ? 'after:content-["_"] after:animate-blink' : ''}
                    terminal-text
                  `}>
                    {line}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
