import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Building2, MessageCircle } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const benefits = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada paciente é único. Cuidamos de você com atenção, respeito e acolhimento genuíno.",
    accent: "from-rose-500/10 to-primary/10",
  },
  {
    icon: Award,
    title: "Profissionais Qualificados",
    description: "Equipe com formação especializada e atualização constante para os melhores resultados.",
    accent: "from-amber-500/10 to-primary/10",
  },
  {
    icon: Building2,
    title: "Ambiente Moderno",
    description: "Consultório equipado com tecnologia de ponta para garantir conforto e excelência.",
    accent: "from-blue-500/10 to-primary/10",
  },
  {
    icon: MessageCircle,
    title: "Fácil Agendamento",
    description: "Agende pelo WhatsApp de forma rápida e prática. Sem burocracia, sem complicação.",
    accent: "from-emerald-500/10 to-primary/10",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" className="relative py-28 lg:py-40 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary/[0.02] blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] text-primary text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground leading-tight mb-5">
            Por que{" "}
            <span className="text-gradient-gold italic">escolher</span> a RK?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Mais do que tratar, nosso propósito é transformar a relação dos nossos pacientes 
            com sua saúde e autoestima.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative rounded-2xl p-8 border border-border/60 hover:border-primary/20 bg-card hover:shadow-gold transition-all duration-500"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/[0.07] flex items-center justify-center mb-5 group-hover:bg-primary/[0.12] group-hover:scale-105 transition-all duration-500">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/70 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <WhatsAppButton size="lg">
            Falar com a equipe
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
