import heroImage from "@/assets/hero-dental.jpg";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Consultório moderno da RK Odontologia e Estética"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block text-gold-light font-medium tracking-widest uppercase text-sm mb-4">
            RK Odontologia e Estética
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Seu sorriso e sua estética em boas mãos
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
            Odontologia e estética com atendimento humanizado, tecnologia moderna e resultados reais.
          </p>
          <WhatsAppButton size="lg">
            Agendar avaliação no WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
