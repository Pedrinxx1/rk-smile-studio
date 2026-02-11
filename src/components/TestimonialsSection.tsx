import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, Users } from "lucide-react";

const testimonials = [
  {
    name: "Maria Fernanda S.",
    treatment: "Lente de Contato Dental",
    text: "Sempre tive vergonha de sorrir. Depois das lentes na RK, minha autoestima mudou completamente. Atendimento impecável!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo M.",
    treatment: "Implante Dentário",
    text: "Profissionalismo do início ao fim. Me senti seguro durante todo o procedimento. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Ana Beatriz L.",
    treatment: "Harmonização Facial",
    text: "Resultado super natural, exatamente o que eu queria. A Dra. entendeu perfeitamente o que eu precisava.",
    rating: 5,
  },
  {
    name: "Roberto A.",
    treatment: "Clareamento Dental",
    text: "Rápido, indolor e resultado incrível. Melhor investimento que fiz na minha aparência. Nota 10!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-36 lg:py-48 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(35 30% 93%) 0%, hsl(35 25% 90%) 50%, hsl(35 30% 93%) 100%)' }}>
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] text-primary text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
            <Quote className="w-3.5 h-3.5" />
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground leading-tight mb-5">
            O que nossos{" "}
            <span className="text-gradient-gold italic">pacientes</span> dizem
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/[0.08] border border-primary/10">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-foreground font-bold text-sm">5,0 ⭐ no Google</span>
              <span className="text-muted-foreground text-sm">| Avaliações reais de pacientes</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`card-premium p-8 relative transition-all duration-300 ease-in-out ${i === active ? 'border-primary/25 shadow-gold' : ''}`}
              >
                <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" />
                
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'bg-primary w-6' : 'bg-primary/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/60">
            <div className="w-9 h-9 rounded-full bg-primary/[0.08] flex items-center justify-center">
              <Users className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-foreground font-bold text-sm">Excelência reconhecida</p>
              <p className="text-muted-foreground text-xs">por nossos pacientes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
