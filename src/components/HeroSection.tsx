import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dental.jpg";
import WhatsAppButton from "./WhatsAppButton";
import { ChevronDown, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Consultório moderno da RK Odontologia e Estética"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/30" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-32 right-20 w-80 h-80 rounded-full bg-gold-glow/5 blur-[100px] animate-pulse-soft" />
      <div className="absolute bottom-32 left-10 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[120px] animate-pulse-soft" style={{ animationDelay: "2s" }} />

      {/* Decorative line */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-32">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gold-light/20 bg-gold-light/5 backdrop-blur-sm">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold-light text-gold-light" />
                ))}
              </span>
              <span className="text-gold-light text-xs font-medium tracking-wide">
                Excelência em odontologia e estética
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-[5.5rem] font-display font-bold leading-[1.05] mb-8 tracking-tight"
          >
            <span className="text-primary-foreground block">Seu sorriso</span>
            <span className="text-primary-foreground block">e sua estética</span>
            <span className="text-gradient-gold italic block mt-1">em boas mãos.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-20 h-[2px] bg-gradient-gold rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-primary-foreground/60 mb-12 leading-relaxed max-w-lg font-light"
          >
            Odontologia e estética com atendimento humanizado, tecnologia moderna e resultados que transformam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <WhatsAppButton size="lg">
              Agendar avaliação gratuita
            </WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-primary-foreground/15 text-primary-foreground/80 text-base font-medium hover:bg-primary-foreground/5 hover:border-primary-foreground/25 transition-all duration-300"
            >
              Nossos serviços
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Explore</span>
        <ChevronDown className="w-4 h-4 animate-float" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
