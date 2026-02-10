import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smile, Sparkles, CircleDot, Star, Sun, ArrowUpRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const services = [
  {
    icon: Smile,
    title: "Odontologia Geral",
    description: "Tratamentos completos para a saúde e manutenção dos seus dentes, com conforto e tecnologia de ponta.",
    number: "01",
  },
  {
    icon: Sparkles,
    title: "Estética Facial",
    description: "Procedimentos estéticos para realçar a beleza natural do seu rosto com segurança e resultados naturais.",
    number: "02",
  },
  {
    icon: CircleDot,
    title: "Implantes",
    description: "Reabilitação oral com implantes modernos, devolvendo função e estética ao seu sorriso.",
    number: "03",
  },
  {
    icon: Star,
    title: "Harmonização Facial",
    description: "Equilíbrio e harmonia facial com técnicas avançadas para resultados naturais e duradouros.",
    number: "04",
  },
  {
    icon: Sun,
    title: "Clareamento Dental",
    description: "Dentes mais brancos e saudáveis com técnicas seguras e resultados visíveis desde a primeira sessão.",
    number: "05",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="relative py-24 lg:py-36 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-gold/3 blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-accent/30 blur-[100px]" />

      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block text-primary font-semibold tracking-[0.25em] uppercase text-xs mb-5">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-5">
            Tratamentos{" "}
            <span className="text-gradient-gold italic">especializados</span>
            {" "}para você
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Soluções completas em odontologia e estética facial, com tecnologia moderna e 
            profissionais qualificados para cuidar da sua saúde e beleza.
          </p>
        </motion.div>

        {/* Service cards - alternating layout */}
        <div className="space-y-4 max-w-5xl mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border/60 hover:border-primary/30 bg-card hover:bg-card/80 transition-all duration-500 hover:shadow-gold overflow-hidden"
            >
              <div className="flex items-center gap-6 p-6 lg:p-8">
                {/* Number */}
                <span className="hidden sm:block text-5xl font-display font-bold text-border/80 group-hover:text-primary/20 transition-colors duration-500 leading-none select-none">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent border border-border/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg lg:text-xl font-display font-bold text-card-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 group-hover:bg-primary group-hover:border-primary transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
          <p className="text-muted-foreground mb-6 text-sm">
            Quer saber qual tratamento é ideal para você?
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
