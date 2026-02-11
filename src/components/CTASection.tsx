import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[150px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="w-16 h-16 rounded-2xl bg-gradient-gold mx-auto mb-8 flex items-center justify-center shadow-gold-glow rotate-3"
          >
            <Sparkles className="w-7 h-7 text-primary-foreground" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Seu novo sorriso{" "}
            <span className="text-gradient-gold-bright italic">começa hoje.</span>
          </h2>
          <p className="text-primary-foreground/55 text-lg leading-relaxed mb-12 max-w-md mx-auto">
            Agende sua avaliação e descubra o tratamento ideal para você. O cuidado que você merece está a um clique.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <WhatsAppButton size="lg" className="shadow-xl hover:shadow-2xl">
              Falar com a RK no WhatsApp
            </WhatsAppButton>
          </motion.div>

          <p className="text-primary-foreground/25 text-xs mt-8 tracking-wide">
            Atendimento rápido e humanizado pelo WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
