import { Smile, Sparkles, CircleDot, Star, Sun } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Odontologia Geral",
    description: "Tratamentos completos para a saúde e manutenção dos seus dentes, com conforto e tecnologia.",
  },
  {
    icon: Sparkles,
    title: "Estética Facial",
    description: "Procedimentos estéticos para realçar a beleza natural do seu rosto com segurança.",
  },
  {
    icon: CircleDot,
    title: "Implantes",
    description: "Reabilitação oral com implantes modernos, devolvendo função e estética ao seu sorriso.",
  },
  {
    icon: Star,
    title: "Harmonização Facial",
    description: "Equilíbrio e harmonia facial com técnicas avançadas para resultados naturais.",
  },
  {
    icon: Sun,
    title: "Clareamento Dental",
    description: "Dentes mais brancos e saudáveis com técnicas seguras e resultados visíveis.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Tratamentos especializados
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
