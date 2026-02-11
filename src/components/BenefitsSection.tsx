import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Building2, MessageCircle } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const benefits = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Escuta ativa e planejamento individual para cada paciente, do primeiro contato ao resultado final.",
  },
  {
    icon: Award,
    title: "Profissionais Qualificados",
    description: "Atualização constante e foco técnico para oferecer os tratamentos mais adequados a cada caso.",
  },
  {
    icon: Building2,
    title: "Ambiente Moderno",
    description: "Estrutura confortável e equipamentos atuais, pensados para sua segurança e bem-estar.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento Próximo",
    description: "Comunicação transparente e acessível. Agende pelo WhatsApp de forma rápida e sem burocracia.",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" className="relative py-20 lg:py-28 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
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
            Pacientes satisfeitos com atendimento de excelência, desde a recepção até o resultado final.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group card-premium p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/[0.12] group-hover:scale-105 group-hover:border-primary/20 transition-all duration-500">
                <benefit.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-display font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 ease-in-out">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {benefit.description}
              </p>
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
            Agendar no WhatsApp agora
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
