import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Sparkles } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Profissionais qualificados" },
  { icon: Clock, label: "Atendimento pontual" },
  { icon: Sparkles, label: "Resultados reais" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-card overflow-hidden">
      {/* Decorative subtle pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual element */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-accent via-secondary to-accent overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-gold mx-auto mb-6 flex items-center justify-center shadow-gold-lg">
                      <span className="text-primary-foreground font-display text-4xl font-bold">RK</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">Excelência</h3>
                    <p className="text-muted-foreground text-sm">em cada detalhe</p>
                  </div>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-10 glass rounded-xl p-5 shadow-xl border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                    <Sparkles className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Gama – DF</p>
                    <p className="text-muted-foreground text-xs">Brasília</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              Sobre a Clínica
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-card-foreground leading-tight mb-6">
              Cuidado que{" "}
              <span className="text-gradient-gold italic">transforma</span>{" "}
              sorrisos
            </h2>
            <div className="w-20 h-1 bg-gradient-gold rounded-full mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A <strong className="text-card-foreground font-semibold">RK Odontologia e Estética</strong> é um 
              consultório localizado no Gama – DF, focado em odontologia e estética facial. Nosso compromisso 
              é oferecer um atendimento profissional e acolhedor, com foco na saúde, bem-estar e autoestima 
              dos nossos pacientes.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Utilizamos tecnologia moderna e técnicas atualizadas para entregar os melhores resultados, 
              sempre com um olhar atencioso e personalizado para cada paciente.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-accent/60 border border-border/50"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
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
