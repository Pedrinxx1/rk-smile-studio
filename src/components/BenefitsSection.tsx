import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Building2, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cuidamos de cada paciente de forma individual e acolhedora, com atenção aos detalhes.",
    number: "01",
  },
  {
    icon: Award,
    title: "Profissionais Qualificados",
    description: "Equipe com formação especializada e experiência comprovada em odontologia e estética.",
    number: "02",
  },
  {
    icon: Building2,
    title: "Ambiente Moderno",
    description: "Consultório equipado com tecnologia de ponta para seu conforto e segurança.",
    number: "03",
  },
  {
    icon: MessageCircle,
    title: "Fácil Agendamento",
    description: "Agende sua consulta de forma rápida e prática pelo WhatsApp, sem complicações.",
    number: "04",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" className="relative py-24 lg:py-32 bg-foreground overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/3 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 text-gold-light text-xs font-semibold tracking-[0.15em] uppercase mb-6">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-background leading-tight mb-4">
            Por que escolher a{" "}
            <span className="text-gradient-gold italic">RK?</span>
          </h2>
          <p className="text-background/50 text-lg max-w-lg mx-auto">
            Excelência e cuidado em cada etapa do seu tratamento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl p-8 border border-background/10 hover:border-gold/30 bg-background/5 hover:bg-background/10 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <span className="text-gold/20 font-display text-5xl font-bold leading-none group-hover:text-gold/40 transition-colors duration-500">
                    {benefit.number}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-500">
                      <benefit.icon className="w-5 h-5 text-gold-light" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-background">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-background/50 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
