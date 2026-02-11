import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "St. Sul – Gama, Brasília – DF, Brasil",
    subtitle: "CEP 72410-107",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    content: "(61) 99837-8600",
    subtitle: "rkodontologiadf@gmail.com",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg a Sex: 09:00–12:00 / 14:00–17:00",
    subtitle: "Sáb: 09:00–12:00 · Dom: Fechado",
  },
];

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" className="relative py-24 lg:py-36 bg-secondary overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] text-primary text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
            <Navigation className="w-3.5 h-3.5" />
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground leading-tight mb-4">
            Venha nos{" "}
            <span className="text-gradient-gold italic">visitar</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Estamos prontos para receber você com todo o cuidado que merece.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="card-premium flex items-start gap-4 p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/[0.07] border border-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                  <p className="text-foreground/80 text-sm font-medium">{item.content}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-3">
              <WhatsAppButton size="lg" className="w-full justify-center">
                Agendar no WhatsApp agora
              </WhatsAppButton>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.0!2d-48.06!3d-15.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU3JzAzLjAiUyA0OMKwMDMnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização RK Odontologia e Estética"
                className="grayscale-[0.4] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
