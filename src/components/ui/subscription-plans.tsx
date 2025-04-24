import React from 'react';
import { Check } from "lucide-react";

interface Plan {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

const plans: Plan[] = [
  {
    title: "Básico",
    price: "R$ 99",
    description: "Para quem quer começar a criar sistemas",
    features: [
      "Até 2 sistemas por mês",
      "Suporte via chat",
      "Acesso à comunidade",
    ],
    cta: "Começar",
    highlight: false,
  },
  {
    title: "Pro",
    price: "R$ 299",
    description: "Para empreendedores que precisam de mais",
    features: [
      "Até 5 sistemas por mês",
      "Acesso ao suporte direto com os desenvolvedores",
      "Prioridade na fila",
    ],
    cta: "Assinar Pro",
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Sob consulta",
    description: "Soluções personalizadas para sua empresa",
    features: [
      "Sistemas ilimitados",
      "Acesso ao suporte direto com os desenvolvedores",
      "Consultoria personalizada",
    ],
    cta: "Falar com Vendas",
    highlight: false,
  }
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`relative p-6 rounded-md border border-white/10 hover:border-codigosujo-red/50 transition-all duration-300 ${plan.highlight ? 'bg-codigosujo-red' : 'bg-codigosujo-gray'}`}>
      {plan.highlight && (
        <div className="absolute top-0 left-0 w-full h-full bg-codigosujo-red opacity-20 rounded-md"></div>
      )}
      <h3 className="text-xl font-bold mb-2 text-white">{plan.title}</h3>
      <p className="text-gray-300 mb-4">{plan.description}</p>
      <div className="mb-6">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-400 mb-1">
            <Check className="text-green-500" size={16} />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <button className="w-full py-2 px-4 rounded-md bg-codigosujo-dark text-white font-bold hover:bg-codigosujo-red transition-colors duration-300">
        {plan.cta}
      </button>
    </div>
  );
}

export function SubscriptionPlans() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
        Nossos <span className="text-codigosujo-red">Planos</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}
