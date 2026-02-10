import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-card overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              Localização e Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-card-foreground leading-tight mb-6">
              Venha nos{" "}
              <span className="text-gradient-gold italic">visitar</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-gold rounded-full mb-10" />

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Endereço</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Setor Sul Qd 01, Conjunto G, Lote 19, Sala 201 – Gama, Brasília – DF
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Horário</p>
                  <p className="text-muted-foreground">
                    Agende pelo WhatsApp e saiba os horários disponíveis
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Contato</p>
                  <p className="text-muted-foreground">
                    Fale conosco pelo WhatsApp para agendar sua avaliação
                  </p>
                </div>
              </div>
            </div>

            <WhatsAppButton size="lg">
              Falar no WhatsApp
            </WhatsAppButton>
          </motion.div>

          {/* Right: Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-accent border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.0!2d-48.06!3d-15.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU3JzAzLjAiUyA0OMKwMDMnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização RK Odontologia e Estética"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 glass rounded-xl p-4 shadow-lg border border-border/50 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#25D366] animate-pulse-soft" />
                <span className="text-xs font-semibold text-foreground">Atendendo agora</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
