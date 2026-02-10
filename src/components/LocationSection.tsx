import { MapPin } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const LocationSection = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Localização e Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
            Venha nos visitar
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />

          <div className="flex items-start justify-center gap-3 mb-8">
            <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
            <p className="text-muted-foreground text-lg">
              Setor Sul Qd 01, Conjunto G, Lote 19, Sala 201 – Gama, Brasília – DF
            </p>
          </div>

          <WhatsAppButton size="lg">
            Falar no WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
