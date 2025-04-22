
import { Check } from "lucide-react";

export function FeaturesSection() {
  const features = [
    "Clona sites completos",
    "Cria SaaS com login, pagamento Pix e geração de PDF",
    "Faz automações com Playwright, scraping stealth e APIs",
    "Conecta IA, webhooks, e-mail, banco de dados e mais",
    "Cria dashboards completos com filtros, gráficos e tabelas",
    "E muito mais. Basta pedir."
  ];

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
        O que ele <span className="text-codigosujo-red">faz</span>
      </h2>
      <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Capacidades práticas que transformam ideias em sistemas reais, prontos para usar
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-sm transition-all duration-300 ${
              index === features.length - 1 
                ? "bg-codigosujo-red" 
                : "bg-codigosujo-gray border border-white/10 hover:border-codigosujo-red/50"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`mt-1 ${index === features.length - 1 ? "text-white" : "text-codigosujo-red"}`}>
                <Check size={22} />
              </div>
              <div>
                <span className="text-white font-bold">{feature}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
