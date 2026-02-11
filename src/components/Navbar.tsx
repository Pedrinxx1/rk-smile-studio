import { useState, useEffect } from "react";
import rkLogo from "@/assets/rk-logo-clean.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2.5">
            <img src={rkLogo} alt="RK Odontologia" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className={`font-display text-base font-bold leading-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
                RK <span className="text-gradient-gold">Odonto</span>
              </span>
              <span className={`text-[9px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-primary-foreground/40"}`}>
                & Estética
              </span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/5"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5561998378600?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-gradient-gold text-primary-foreground px-5 py-2 rounded-xl text-sm font-semibold shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Agendar
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-foreground hover:bg-accent/50" : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-6 pt-2 flex flex-col gap-1 bg-background/90 backdrop-blur-xl rounded-2xl p-4 mb-4 border border-border/30">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-foreground hover:text-primary transition-colors text-base font-medium px-4 py-3 rounded-xl hover:bg-accent/50"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="https://wa.me/5561998378600?text=Olá! Gostaria de agendar uma avaliação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold shadow-gold text-center"
                >
                  Agendar avaliação
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
