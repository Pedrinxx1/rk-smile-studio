import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-clinic.jpg";

const highlights = [
  "Odontologia e estética facial",
  "Atendimento profissional e acolhedor",
  "Tecnologia moderna e atualizada",
  "Foco na saúde e autoestima",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-24 lg:py-36 bg-card overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-gold/3 blur-[100px]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Profissional da RK Odontologia"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 lg:-right-12 glass-strong rounded-2xl p-6 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                    <Sparkles className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground">Gama</p>
                    <p className="text-muted-foreground text-sm">Brasília – DF</p>
                  </div>
                </div>
              </motion.div>

              {/* Top badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 right-8 glass-strong rounded-xl px-4 py-3 shadow-lg border border-border/50 animate-float"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground">Profissionais qualificados</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-block text-primary font-semibold tracking-[0.25em] uppercase text-xs mb-5">
              Sobre a Clínica
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-card-foreground leading-[1.15] mb-6">
              Cuidado que{" "}
              <span className="text-gradient-gold italic">transforma</span>
              <br />
              sorrisos e vidas
            </h2>
            <div className="w-16 h-[2px] bg-gradient-gold rounded-full mb-8" />

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A <strong className="text-card-foreground font-semibold">RK Odontologia e Estética</strong> é um 
              consultório localizado no Gama – DF, dedicado à odontologia e estética facial com excelência.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Nosso compromisso é oferecer um atendimento profissional e acolhedor, com foco na saúde, 
              bem-estar e autoestima. Utilizamos tecnologia moderna e técnicas atualizadas para 
              entregar os melhores resultados.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-display font-bold text-gradient-gold">5+</p>
                <p className="text-muted-foreground text-xs mt-1">Especialidades</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-display font-bold text-gradient-gold">100%</p>
                <p className="text-muted-foreground text-xs mt-1">Dedicação</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-display font-bold text-gradient-gold">∞</p>
                <p className="text-muted-foreground text-xs mt-1">Sorrisos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
