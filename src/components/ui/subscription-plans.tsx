
import { Gem } from "lucide-react";

interface PlanLink {
  name: string;
  price: string;
  url: string;
  bestValue?: boolean;
}

const plans: PlanLink[] = [
  { name: "Mensal", price: "R$ 40,00", url: "https://go.perfectpay.com.br/PPU38CPMOG3" },
  { name: "Trimestral", price: "R$ 99,90", url: "https://go.perfectpay.com.br/PPU38CPMOO1" },
  { name: "Semestral", price: "R$ 200,00", url: "https://go.perfectpay.com.br/PPU38CPMOO2", bestValue: true },
  { name: "Anual", price: "R$ 419,90", url: "https://go.perfectpay.com.br/PPU38CPMOO3" },
  { name: "Vitalícia", price: "R$ 500,00", url: "https://go.perfectpay.com.br/PPU38CPMOO4" }
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
            className="relative flex flex-col bg-codigosujo-gray border border-white/10 p-5 rounded-md card-hover shadow-[0_2px_24px_2px_rgba(255,46,46,0.18)]"
          >
            {plan.bestValue && (
              <div className="absolute -top-3 right-0 bg-gradient-to-r from-codigosujo-red via-pink-600 to-yellow-400 px-4 py-1 rounded-tl rounded-br text-xs font-bold shadow-lg animate-pulse">
                MELHOR VALOR
              </div>
            )}
            <h3 className="font-heading text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-codigosujo-red text-2xl font-bold mb-4">{plan.price}</p>
            <div className="mb-4 space-y-1">
              <div className="text-sm text-white font-medium flex items-center gap-2">
                <Gem size={18} className="text-yellow-300 drop-shadow shadow-yellow-100" />
                Acesso a plataforma 24 horas
              </div>
              <div className="text-sm text-white font-medium flex items-center gap-2">
                <Gem size={18} className="text-pink-300 drop-shadow shadow-pink-100" />
                Bonus Exclusivos
              </div>
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
                    w-full flex items-center justify-center gap-2 rounded-md text-lg font-bold py-3
                    bg-gradient-to-br from-[#ff2e2e] via-[#f97316] to-[#9b87f5]
                    hover:from-[#9b87f5] hover:via-[#ff2e2e] hover:to-[#d946ef]
                    text-white shadow-lg shadow-pink-900/20 transition-all duration-300
                    ring-2 ring-white/10 hover:ring-codigosujo-red/40 border-none outline-none
                    relative overflow-hidden 
                    before:absolute before:inset-0 before:opacity-0 before:bg-white/10 before:transition-opacity before:duration-200 group-hover:before:opacity-60
                    animate-fade-in
                  `}
                >
                  <Gem size={22} className="mr-1 animate-pulse text-yellow-300 drop-shadow" />
                  🔥 Assinar
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
