
import { Star, StarHalf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rafael Silva",
    role: "Desenvolvedor Full Stack",
    content: "O Código Sujo mudou completamente minha produtividade. Consigo criar MVPs em questão de horas ao invés de semanas. Recomendo muito!",
    rating: 5
  },
  {
    name: "Marina Santos",
    role: "Product Owner",
    content: "Impressionante como consigo validar ideias rapidamente. A qualidade do código gerado é excelente e a documentação é muito clara.",
    rating: 4.5
  },
  {
    name: "Lucas Oliveira",
    role: "Empreendedor",
    content: "Economizei milhares de reais em desenvolvimento usando o Código Sujo. Consegui lançar meu produto muito mais rápido do que esperava.",
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
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        O que nossos <span className="text-codigosujo-red">usuários</span> dizem
      </h2>
      <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Depoimentos de pessoas que já estão usando o Código Sujo
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-codigosujo-gray border-white/10">
            <CardContent className="p-6">
              <RatingStars rating={testimonial.rating} />
              <p className="mt-4 mb-6 text-gray-300">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
