
import { Button } from "@/components/ui/button";

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
          <div key={plan.name} className="relative flex flex-col bg-codigosujo-gray border border-white/10 p-5 rounded-sm hover:border-codigosujo-red/50 transition-all duration-300">
            {plan.bestValue && (
              <div className="absolute -top-3 right-0 bg-codigosujo-red px-3 py-1 text-xs font-bold">
                MELHOR VALOR
              </div>
            )}
            <h3 className="font-heading text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-codigosujo-red text-2xl font-bold mb-4">{plan.price}</p>
            <div className="mt-auto">
              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button 
                  variant="destructive" 
                  size="lg"
                  className="w-full text-lg font-bold hover:scale-105 transition-transform shadow-inner shadow-white/10"
                >
                  🔥 Assinar
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-400">
        Pagamento seguro via PerfectPay
      </p>
    </div>
  );
}
