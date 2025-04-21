
import { Button } from "@/components/ui/button";

interface PlanLink {
  name: string;
  url: string;
}

const plans: PlanLink[] = [
  { name: "Mensal", url: "https://go.perfectpay.com.br/PPU38CPMOG3" },
  { name: "Trimestral", url: "https://go.perfectpay.com.br/PPU38CPMOO1" },
  { name: "Semestral", url: "https://go.perfectpay.com.br/PPU38CPMOO2" },
  { name: "Anual", url: "https://go.perfectpay.com.br/PPU38CPMOO3" },
  { name: "Vitalícia", url: "https://go.perfectpay.com.br/PPU38CPMOO4" }
];

export function SubscriptionPlans() {
  return (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Planos de <span className="text-codigosujo-red">Assinatura</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Acesso ao CÓDIGO SUJO e ao poder da automação infinita. 
          Escolha o plano. Assine. Comece a quebrar o sistema.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto px-4">
        {plans.map((plan) => (
          <a
            key={plan.name}
            href={plan.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button 
              variant="destructive" 
              size="lg"
              className="w-full text-lg font-bold hover:scale-105 transition-transform"
            >
              🔥 {plan.name}
            </Button>
          </a>
        ))}
      </div>

      <p className="text-sm text-gray-400">
        Pagamento seguro via PerfectPay
      </p>
    </div>
  );
}
