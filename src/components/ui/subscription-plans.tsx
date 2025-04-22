
import { CustomButton } from "@/components/ui/custom-button";

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
    features: [
      "Acesso à plataforma 24 horas",
      "Bônus exclusivos",
      "Acesso ao grupo VIP"
    ],
  },
  {
    name: "Trimestral",
    price: "R$ 99,90",
    url: "https://go.perfectpay.com.br/PPU38CPMOO1",
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
    url: "https://go.perfectpay.com.br/PPU38CPMOO2",
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
    url: "https://go.perfectpay.com.br/PPU38CPMOO3",
    features: [
      "Acesso à plataforma 24 horas",
      "Bônus exclusivos",
      "Acesso ao grupo VIP",
      "Suporte a novas atualizações",
      "Acesso ao suporte direto com os desenvolvedores",
      "Entregamos o site pronto pra você",
      "Mentoria com os desenvolvedores"
    ],
  },
  {
    name: "Vitalícia",
    price: "R$ 500,00",
    url: "https://go.perfectpay.com.br/PPU38CPMOO4",
    features: [
      "Acesso à plataforma 24 horas",
      "Bônus exclusivos",
      "Acesso ao grupo VIP",
      "Suporte a novas atualizações",
      "Acesso ao suporte direto com os desenvolvedores",
      "Entregamos o site pronto pra você",
      "Mentoria com os desenvolvedores"
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
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <CustomButton
                href={plan.url}
                className="w-full rounded-md font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Assinar Agora
              </CustomButton>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-400">Pagamento seguro via PerfectPay</p>
    </div>
  );
}
