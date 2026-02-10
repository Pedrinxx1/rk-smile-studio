import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Building2, MessageCircle, ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const benefits = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada paciente é único. Cuidamos de você com atenção, respeito e acolhimento genuíno em todas as etapas.",
  },
  {
    icon: Award,
    title: "Profissionais Qualificados",
    description: "Equipe com formação especializada e experiência comprovada, sempre em atualização constante.",
  },
  {
    icon: Building2,
    title: "Ambiente Moderno",
    description: "Consultório equipado com tecnologia de ponta para garantir seu conforto e os melhores resultados.",
  },
  {
    icon: MessageCircle,
    title: "Fácil Agendamento",
    description: "Agende sua consulta de forma rápida e prática pelo WhatsApp. Sem burocracia, sem complicação.",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" className="relative py-24 lg:py-36 bg-secondary overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold/3 blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.15] mb-6">
              Por que{" "}
              <span className="text-gradient-gold italic">escolher</span>
              {" "}a RK?
            </h2>
            <div className="w-16 h-[2px] bg-gradient-gold rounded-full mb-8" />
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Mais do que tratar, nosso propósito é transformar a relação dos nossos pacientes 
              com sua saúde bucal e autoestima.
            </p>
            <div className="hidden lg:block">
              <WhatsAppButton>
                Falar com a equipe
              </WhatsAppButton>
            </div>
          </motion.div>

          {/* Right: cards */}
          <div className="lg:col-span-3 space-y-5">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="group relative rounded-2xl p-7 lg:p-8 border border-border/60 hover:border-primary/20 bg-card hover:shadow-gold transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-accent border border-border/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/70 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-border group-hover:text-primary/50 transition-all duration-300 shrink-0 mt-1 translate-x-0 group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <div className="lg:hidden pt-4 text-center">
              <WhatsAppButton size="lg">
                Falar com a equipe
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
