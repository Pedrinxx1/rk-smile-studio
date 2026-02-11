import { Instagram, Heart, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-foreground">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <span className="text-primary-foreground font-display font-bold text-base">R</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-primary-foreground leading-tight">
                  RK Odontologia
                </h3>
                <span className="text-[9px] tracking-[0.25em] uppercase text-primary-foreground/40 font-medium">
                  & Estética
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/40 text-sm leading-relaxed max-w-xs">
              Seu sorriso e sua estética em boas mãos. Odontologia e estética facial 
              com excelência no Gama – DF.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-primary-foreground/30 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Navegação
            </h4>
            <div className="flex flex-col gap-3">
              {["Sobre a Clínica", "Serviços", "Diferenciais", "Contato"].map((label, i) => (
                <a
                  key={label}
                  href={`#${["sobre", "servicos", "diferenciais", "contato"][i]}`}
                  className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground/30 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Contato
            </h4>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="w-4 h-4 text-primary-foreground/30 mt-0.5 shrink-0" />
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                St. Sul – Gama, Brasília – DF<br />CEP 72410-107
              </p>
            </div>
            <p className="text-primary-foreground/50 text-sm mb-1">📞 (61) 99837-8600</p>
            <p className="text-primary-foreground/50 text-sm mb-4">📧 rkodontologiadf@gmail.com</p>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/10 text-primary-foreground/50 hover:text-primary-foreground hover:border-primary/30 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/25 text-xs">
            © {new Date().getFullYear()} RK Odontologia e Estética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
