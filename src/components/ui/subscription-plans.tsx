
import { Gem } from "lucide-react";

interface PlanLink {
  name: string;
  price: string;
  url: string;
  bestValue?: boolean;
  features: string[];
}

const plans: PlanLink[] = [
  { 
    name: "Mensal", 
    price: "R$ 40,00", 
    url: "https://go.perfectpay.com.br/PPU38CPMOG3",
    features: ["Acesso à plataforma 24 horas", "Bônus Exclusivos", "Acesso ao Grupo VIP"]
  },
  { 
    name: "Trimestral", 
    price: "R$ 99,90", 
    url: "https://go.perfectpay.com.br/PPU38CPMOO1",
    features: [
      "Acesso à plataforma 24 horas", 
      "Bônus Exclusivos", 
      "Acesso ao Grupo VIP", 
      "Suporte às novas Atualizações", 
      "Acesso ao Suporte Direto com os Desenvolvedores"
    ]
  },
  { 
    name: "Semestral", 
    price: "R$ 200,00", 
    url: "https://go.perfectpay.com.br/PPU38CPMOO2", 
    bestValue: true,
    features: [
      "Acesso à plataforma 24 horas", 
      "Bônus Exclusivos", 
      "Acesso ao Grupo VIP", 
      "Suporte às novas Atualizações", 
      "Acesso ao Suporte Direto com os Desenvolvedores"
    ]
  },
  { 
    name: "Anual", 
    price: "R$ 419,90", 
    url: "https://go.perfectpay.com.br/PPU38CPMOO3",
    features: [
      "Acesso à plataforma 24 horas", 
      "Bônus Exclusivos", 
      "Acesso ao Grupo VIP", 
      "Suporte às novas Atualizações", 
      "Acesso ao Suporte Direto com os Desenvolvedores",
      "Vamos hospedar o site para você",
      "Criar domínios",
      "Mentoria com os desenvolvedores"
    ]
  },
  { 
    name: "Vitalícia", 
    price: "R$ 500,00", 
    url: "https://go.perfectpay.com.br/PPU38CPMOO4",
    features: [
      "Acesso à plataforma 24 horas", 
      "Bônus Exclusivos", 
      "Acesso ao Grupo VIP", 
      "Suporte às novas Atualizações", 
      "Acesso ao Suporte Direto com os Desenvolvedores",
      "Vamos hospedar o site para você",
      "Criar domínios",
      "Mentoria com os desenvolvedores"
    ]
  }
];

export function SubscriptionPlans() {
  return (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
          Planos de <span className="text-codigosujo-red">Assinatura</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Acesso ao CÓDIGO SUJO e ao poder da automação infinita. 
          Escolha o plano. Assine. Comece a quebrar o sistema.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto px-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`
              relative flex flex-col bg-codigosujo-gray border border-white/10 p-5 rounded-xl
              card-hover shadow-xl shadow-codigosujo-darker/40
              transition-all duration-300
              ${plan.bestValue ? "ring-2 ring-[#9b87f5]" : "hover:ring-2 hover:ring-codigosujo-red/40"}
            `}
          >
            {plan.bestValue && (
              <div className="absolute -top-3 left-4 bg-white/90 text-codigosujo-red font-bold px-4 py-1 rounded-full shadow-md border border-white text-xs uppercase tracking-widest animate-fade-in">
                Melhor valor
              </div>
            )}
            <h3 className="font-heading text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-codigosujo-red text-2xl font-bold mb-4">{plan.price}</p>
            <div className="mb-7 space-y-2">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="text-sm text-white font-medium flex items-center gap-2">
                  <Gem size={16} className={`
                    ${idx < 3 ? "text-yellow-300" : idx < 5 ? "text-pink-300" : "text-blue-300"}
                  `} />
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-auto z-10">
              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full group"
              >
                <button
                  className={`
                    w-full flex items-center justify-center gap-2 rounded-lg text-sm font-bold py-2.5 px-4
                    bg-gradient-to-br from-white/10 via-[#22223b]/60 to-[#9b87f5]/30
                    border border-white/20
                    text-white hover:text-codigosujo-red
                    shadow-[0_2px_12px_0_rgba(155,135,245,0.14)] focus:outline-none
                    transition-all duration-300
                    hover:bg-gradient-to-br hover:from-[#fff]/50 hover:via-[#f3f3f3]/40 hover:to-[#9b87f5]/60
                    hover:shadow-[0_4px_24px_0_rgba(155,135,245,0.22)]
                    hover:ring-2 hover:ring-codigosujo-red/30
                    relative overflow-hidden
                    before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:transition-opacity before:duration-200 group-hover:before:opacity-20
                    animate-fade-in
                  `}
                >
                  <Gem size={16} className="mr-1.5 text-yellow-300" />
                  Assinar
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-400">Pagamento seguro via PerfectPay</p>
    </div>
  );
}
