import { Heart, Award, Building2, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cuidamos de cada paciente de forma individual e acolhedora.",
  },
  {
    icon: Award,
    title: "Profissionais Qualificados",
    description: "Equipe com formação especializada e experiência comprovada.",
  },
  {
    icon: Building2,
    title: "Ambiente Moderno",
    description: "Consultório equipado com tecnologia de ponta para seu conforto.",
  },
  {
    icon: MessageCircle,
    title: "Fácil Agendamento",
    description: "Agende sua consulta de forma rápida e prática pelo WhatsApp.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">
            Por que escolher a RK?
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-secondary-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
