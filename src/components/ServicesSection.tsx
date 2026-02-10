import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smile, Sparkles, CircleDot, Star, Sun, ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const services = [
  {
    icon: Smile,
    title: "Odontologia Geral",
    description: "Tratamentos completos para a saúde e manutenção dos seus dentes com conforto e tecnologia.",
  },
  {
    icon: Sparkles,
    title: "Estética Facial",
    description: "Procedimentos para realçar sua beleza natural com segurança e resultados harmoniosos.",
  },
  {
    icon: CircleDot,
    title: "Implantes Dentários",
    description: "Reabilitação oral com implantes modernos, devolvendo função e estética ao seu sorriso.",
  },
  {
    icon: Star,
    title: "Harmonização Facial",
    description: "Equilíbrio e harmonia facial com técnicas avançadas para resultados naturais e duradouros.",
  },
  {
    icon: Sun,
    title: "Clareamento Dental",
    description: "Dentes mais brancos e saudáveis com técnicas seguras e resultados visíveis.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="relative py-28 lg:py-40 bg-secondary overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[150px]" />

      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] text-primary text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground leading-tight mb-5">
            Tratamentos{" "}
            <span className="text-gradient-gold italic">especializados</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Soluções completas em odontologia e estética facial, com tecnologia moderna e 
            profissionais qualificados.
          </p>
        </motion.div>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative rounded-2xl p-7 bg-card border border-border/60 hover:border-primary/25 hover:shadow-gold transition-all duration-500 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/[0.07] flex items-center justify-center mb-5 group-hover:bg-primary/[0.12] group-hover:scale-105 transition-all duration-500">
                <service.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="flex items-center gap-1.5 text-primary/60 group-hover:text-primary text-xs font-medium transition-colors duration-300">
                <span>Saiba mais</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full" />
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
          <p className="text-muted-foreground mb-5 text-sm">
            Qual tratamento é ideal para você?
          </p>
          <WhatsAppButton size="lg">
            Agendar avaliação no WhatsApp
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
