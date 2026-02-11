import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Sparkles, CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-clinic.jpg";

const highlights = [
  "Odontologia e estética facial integradas",
  "Atendimento humanizado e individualizado",
  "Tecnologia moderna e técnicas atualizadas",
  "Foco na saúde, bem-estar e autoestima",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-24 lg:py-36 bg-background overflow-hidden">
      {/* Subtle background accents */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/60 to-transparent" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-primary/[0.03] blur-[100px]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img
                  src={aboutImage}
                  alt="Profissional da RK Odontologia"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary/40 rounded-br-3xl" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-5 left-6 right-6 sm:left-auto sm:right-auto sm:-right-8 sm:w-auto glass-strong rounded-2xl p-5 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold shrink-0">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-lg font-display font-bold text-foreground">Gama – DF</p>
                    <p className="text-muted-foreground text-xs">Brasília, Distrito Federal</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] text-primary text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
              <Shield className="w-3.5 h-3.5" />
              Sobre a Clínica
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground leading-[1.15] mb-6">
              Cuidado que{" "}
              <span className="text-gradient-gold italic">transforma</span>
              <br />
              sorrisos e vidas
            </h2>

            <div className="w-14 h-[2px] bg-gradient-gold rounded-full mb-8" />

            <p className="text-muted-foreground leading-relaxed mb-10">
              Na <strong className="text-foreground font-semibold">RK Odontologia</strong>, cada 
              sorriso é planejado com atenção aos detalhes. Integramos técnica, estética e funcionalidade 
              para entregar resultados naturais e equilibrados.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-8 border-t border-border/50">
              {[
                { value: "✦", label: "Atendimento completo em saúde e estética bucal" },
                { value: "100%", label: "Dedicação" },
                { value: "∞", label: "Sorrisos" },
              ].map((stat) => (
                <div key={stat.label} className={stat.label.length > 20 ? "max-w-[180px]" : ""}>
                  <p className="text-2xl font-display font-bold text-gradient-gold">{stat.value}</p>
                  <p className="text-muted-foreground text-[11px] mt-1 tracking-wide uppercase leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
