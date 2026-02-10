import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WhatsAppButton from "./WhatsAppButton";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-accent/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/3 blur-[200px]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-gradient-gold mx-auto mb-8 flex items-center justify-center shadow-gold-lg"
          >
            <span className="text-primary-foreground font-display text-3xl font-bold">RK</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
            Pronto para{" "}
            <span className="text-gradient-gold italic">transformar</span>
            <br />
            seu sorriso?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Agende sua avaliação e descubra como podemos cuidar da sua saúde bucal 
            e estética com o carinho que você merece.
          </p>
          <WhatsAppButton size="lg">
            Agendar minha avaliação gratuita
          </WhatsAppButton>

          <p className="text-muted-foreground/60 text-xs mt-6">
            Atendimento rápido e humanizado pelo WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
