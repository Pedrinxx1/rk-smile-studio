import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dental.jpg";
import WhatsAppButton from "./WhatsAppButton";
import { ChevronDown, Star, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image with sophisticated overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Consultório moderno da RK Odontologia e Estética"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-foreground/30" />
        {/* Gold tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-primary-foreground/[0.04]" />
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-primary-foreground/[0.04]" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-primary-foreground/[0.04]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-md">
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </span>
                <span className="text-primary-foreground/70 text-[11px] font-medium tracking-wider uppercase">
                  5,0 no Google · 41 avaliações
                </span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-8"
            >
              <span className="text-primary-foreground block">Seu sorriso</span>
              <span className="text-primary-foreground/80 block">merece o</span>
              <span className="block mt-1">
                <span className="relative inline-block">
                  <span className="text-gradient-gold italic">melhor cuidado.</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-gold origin-left rounded-full"
                  />
                </span>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-base sm:text-lg text-primary-foreground/50 mb-10 leading-relaxed max-w-md font-light"
            >
              Na RK Odontologia & Estética, devolvemos o que há de melhor em você: 
              saúde, estética e confiança ao sorrir.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <WhatsAppButton size="lg">
                Agendar no WhatsApp agora
              </WhatsAppButton>
              <a
                href="tel:+5561998378600"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-primary-foreground/15 text-primary-foreground/70 text-sm font-medium hover:bg-primary-foreground/5 hover:border-primary-foreground/25 hover:text-primary-foreground transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Ligar agora
              </a>
            </motion.div>
          </div>

          {/* Right side - floating info cards */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 flex-col items-end gap-6 pt-12">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-2xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                <span className="text-primary-foreground/60 text-xs font-medium uppercase tracking-wider">Atendendo agora</span>
              </div>
              <p className="text-primary-foreground/90 text-sm font-medium">Gama, Brasília – DF</p>
              <p className="text-primary-foreground/40 text-xs mt-1">Setor Sul, Qd 01 · Sala 201</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-2xl p-6 max-w-xs"
            >
              <p className="text-3xl font-display font-bold text-gradient-gold mb-1">5+</p>
              <p className="text-primary-foreground/50 text-xs font-medium">Especialidades em odontologia e estética facial</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-primary-foreground/25 hover:text-primary-foreground/50 transition-colors cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Explore</span>
        <ChevronDown className="w-4 h-4 animate-float" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
