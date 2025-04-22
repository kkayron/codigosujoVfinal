
import { Star, StarHalf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rafael Silva",
    role: "Desenvolvedor Full Stack",
    company: "Startup de Fintech",
    content: "O Código Sujo mudou completamente minha produtividade. Consegui construir e lançar dois MVPs em 48 horas. Antes eu levaria semanas para fazer a metade. A qualidade do código gerado é impressionante.",
    rating: 5
  },
  {
    name: "Marina Santos",
    role: "Product Manager",
    company: "Agência Digital",
    content: "Uso o Código Sujo para validar ideias rapidamente com clientes. A velocidade com que conseguimos passar de conceito para protótipo funcional é absurda. Economizamos milhares em desenvolvimento.",
    rating: 4.5
  },
  {
    name: "Lucas Oliveira",
    role: "Empreendedor",
    content: "Criei um sistema completo de orçamentos para minha empresa sem saber programar, apenas descrevendo o que eu queria. O Código Sujo entregou tudo funcionando, com exportação de PDF e tudo mais. Foi surreal.",
    rating: 5
  },
  {
    name: "Juliana Costa",
    role: "Analista de Marketing",
    company: "E-commerce",
    content: "Mesmo não sendo programadora, consegui criar automações para Instagram e extração de dados com o Código Sujo. A documentação gerada me ajudou a entender cada parte do processo. Recomendo demais!",
    rating: 4.5
  },
  {
    name: "Pedro Mendes",
    role: "CTO",
    company: "SaaS B2B",
    content: "Reduzimos o tempo de desenvolvimento de features em 70%. O Código Sujo automatiza partes repetitivas e gera código limpo que nossa equipe pode adaptar. Virou ferramenta essencial para o time.",
    rating: 5
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex gap-1 text-codigosujo-red">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={20} fill="currentColor" />
      ))}
      {hasHalfStar && <StarHalf size={20} fill="currentColor" />}
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
        Quem usa o <span className="text-codigosujo-red">Código Sujo</span>
      </h2>
      <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Depoimentos reais de pessoas que já estão criando sistemas com a ferramenta
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <Card key={index} className="bg-codigosujo-gray border-white/10 hover:border-codigosujo-red/50 transition-all duration-300">
            <CardContent className="p-6">
              <RatingStars rating={testimonial.rating} />
              <p className="mt-4 mb-6 text-gray-300">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-white font-heading">{testimonial.name}</p>
                <p className="text-sm text-gray-400">
                  {testimonial.role}
                  {testimonial.company && ` • ${testimonial.company}`}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
