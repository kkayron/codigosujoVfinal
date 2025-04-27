
import React from "react";
import { Check } from "lucide-react";

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
    url: "https://pay.risepay.com.br/Pay/fc5939d898d54a028e42eabfda4dc54c",
    features: [
      "Acesso à plataforma 24 horas",
      "Bônus exclusivos",
      "Acesso ao grupo VIP"
    ],
  },
  {
    name: "Trimestral",
    price: "R$ 99,90",
    url: "https://pay.risepay.com.br/Pay/5a9a4dd99a31494bbc0496a90dc0aef2",
    features: [
      "Acesso à plataforma 24 horas",
      "Bônus exclusivos",
      "Acesso ao grupo VIP",
      "Suporte a novas atualizações",
      "Acesso ao suporte direto com os desenvolvedores"
    ],
  },
  {
    name: "Semestral",
    price: "R$ 200,00",
    url: "https://pay.risepay.com.br/Pay/ad48175363b443dfb93cd243c5393f9f",
    bestValue: true,
    features: [
      "Acesso à plataforma 24 horas",
      "Bônus exclusivos",
      "Acesso ao grupo VIP",
      "Suporte a novas atualizações",
      "Acesso ao suporte direto com os desenvolvedores"
    ],
  },
  {
    name: "Anual",
    price: "R$ 419,90",
    url: "https://pay.risepay.com.br/Pay/970fb428169e414db5fab8837ec986dd",
    features: [
      "Acesso à plataforma 24 horas",
      "Bônus exclusivos",
      "Acesso ao grupo VIP",
      "Suporte a novas atualizações",
      "Acesso ao suporte direto com os desenvolvedores"
    ],
  },
  {
    name: "Vitalícia",
    price: "R$ 500,00",
    url: "https://pay.risepay.com.br/Pay/443d85f86f3b4fd2a2b0aed14ccc4b35",
    features: [
      "Acesso à plataforma 24 horas",
      "Bônus exclusivos", 
      "Acesso ao grupo VIP",
      "Suporte a novas atualizações",
      "Acesso ao suporte direto com os desenvolvedores"
    ],
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
          Tenha acesso ao CÓDIGO SUJO e ao poder da automação. 
          Escolha o plano, assine e comece a quebrar o sistema.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`
              relative flex flex-col bg-codigosujo-gray border border-white/10 p-6 rounded-xl
              card-hover shadow-xl shadow-codigosujo-darker/40
              transition-all duration-300
              ${plan.bestValue ? "ring-2 ring-[#9b87f5]" : "hover:ring-2 hover:ring-codigosujo-red/40"}
            `}
          >
            {plan.bestValue && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white/90 text-codigosujo-red font-bold px-4 py-1 rounded-full shadow-md border border-white text-xs uppercase tracking-widest">
                Melhor valor
              </div>
            )}
            <h3 className="font-heading text-xl text-center font-bold mb-2">{plan.name}</h3>
            <p className="text-codigosujo-red text-2xl text-center font-bold mb-4">{plan.price}</p>
            <div className="mb-7 space-y-2">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="text-sm text-white font-medium flex items-center text-left pl-2">
                  <Check className="text-green-500 mr-2 flex-shrink-0" size={16} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block bg-codigosujo-red hover:bg-red-700 text-white text-base font-bold rounded-md
                  py-3 px-4 transition-all duration-200
                  text-center
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-codigosujo-red focus-visible:ring-offset-2"
                style={{ letterSpacing: ".01em" }}
              >
                Assinar Agora
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-400">Pagamento seguro via PerfectPay</p>
    </div>
  );
}
