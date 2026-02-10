import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dental.jpg";
import WhatsAppButton from "./WhatsAppButton";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Consultório moderno da RK Odontologia e Estética"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/20" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold-glow/5 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-light/30 bg-gold-light/10 text-gold-light text-xs font-semibold tracking-[0.15em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse-soft" />
              RK Odontologia e Estética
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
          >
            <span className="text-primary-foreground">Seu sorriso e</span>
            <br />
            <span className="text-primary-foreground">sua estética </span>
            <span className="text-gradient-gold italic">em</span>
            <br />
            <span className="text-gradient-gold italic">boas mãos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 leading-relaxed max-w-lg font-light"
          >
            Odontologia e estética com atendimento humanizado, tecnologia moderna e resultados reais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <WhatsAppButton size="lg">
              Agendar avaliação gratuita
            </WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-primary-foreground/20 text-primary-foreground/90 text-base font-medium hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Conheça nossos serviços
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Explore</span>
        <ChevronDown className="w-5 h-5 animate-float" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
