import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smile, Sparkles, CircleDot, Star, Sun, ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const services = [
  {
    icon: Smile,
    title: "Odontologia Geral",
    description: "Tratamentos completos para a saúde e manutenção dos seus dentes, com conforto e tecnologia.",
    accent: "from-primary/10 to-accent/30",
  },
  {
    icon: Sparkles,
    title: "Estética Facial",
    description: "Procedimentos estéticos para realçar a beleza natural do seu rosto com segurança.",
    accent: "from-gold-glow/10 to-accent/30",
  },
  {
    icon: CircleDot,
    title: "Implantes",
    description: "Reabilitação oral com implantes modernos, devolvendo função e estética ao seu sorriso.",
    accent: "from-primary/10 to-secondary/50",
  },
  {
    icon: Star,
    title: "Harmonização Facial",
    description: "Equilíbrio e harmonia facial com técnicas avançadas para resultados naturais.",
    accent: "from-gold-glow/10 to-accent/40",
  },
  {
    icon: Sun,
    title: "Clareamento Dental",
    description: "Dentes mais brancos e saudáveis com técnicas seguras e resultados visíveis.",
    accent: "from-primary/10 to-accent/30",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Tratamentos{" "}
            <span className="text-gradient-gold italic">especializados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Soluções completas em odontologia e estética para cuidar de você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 border border-border/60 hover:border-primary/30 transition-all duration-500 hover:shadow-gold cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-gold transition-all duration-500 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <WhatsAppButton size="lg">
            Agendar avaliação no WhatsApp
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
