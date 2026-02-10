import { Instagram, Heart, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-secondary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <span className="text-primary-foreground font-display font-bold text-base">R</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                  RK Odontologia
                </h3>
                <span className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground font-medium">
                  & Estética
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Seu sorriso e sua estética em boas mãos. Odontologia e estética facial 
              com excelência no Gama – DF.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground/60 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Navegação
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#sobre" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">Sobre a Clínica</a>
              <a href="#servicos" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">Serviços</a>
              <a href="#diferenciais" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">Diferenciais</a>
              <a href="#contato" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">Contato</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-foreground/60 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Contato
            </h4>
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Setor Sul Qd 01, Conj. G, Lote 19, Sala 201 – Gama, Brasília – DF
              </p>
            </div>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} RK Odontologia e Estética. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5 text-muted-foreground/40 text-xs">
            Feito com <Heart className="w-3 h-3 text-primary/40" /> para você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
