import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-foreground border-t border-background/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">R</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-background leading-tight">
                  RK Odontologia
                </h3>
                <span className="text-[9px] tracking-[0.2em] uppercase text-background/40">& Estética</span>
              </div>
            </div>
            <p className="text-background/40 text-sm leading-relaxed">
              Seu sorriso e sua estética em boas mãos.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-6">
              <a href="#sobre" className="text-background/50 hover:text-background text-sm transition-colors">Sobre</a>
              <a href="#servicos" className="text-background/50 hover:text-background text-sm transition-colors">Serviços</a>
              <a href="#contato" className="text-background/50 hover:text-background text-sm transition-colors">Contato</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex md:justify-end">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-background/10 text-background/60 hover:text-background hover:border-gold/30 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-background/5 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/30 text-xs">
            © {new Date().getFullYear()} RK Odontologia e Estética. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1 text-background/20 text-xs">
            Feito com <Heart className="w-3 h-3 text-gold/40" /> para você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
