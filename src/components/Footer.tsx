import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-semibold text-background mb-1">
              RK Odontologia e Estética
            </h3>
            <p className="text-background/50 text-sm">
              Seu sorriso e sua estética em boas mãos
            </p>
          </div>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">Siga-nos no Instagram</span>
          </a>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} RK Odontologia e Estética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
