import { Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/55SEUNUMERO?text=Olá! Gostaria de agendar uma avaliação.";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
}

const WhatsAppButton = ({ children, className = "", size = "default" }: WhatsAppButtonProps) => {
  const sizeClasses = size === "lg" 
    ? "px-8 py-4 text-lg" 
    : "px-6 py-3 text-base";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-[#25D366] text-white font-semibold shadow-lg hover:bg-[#1da851] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${sizeClasses} ${className}`}
    >
      <Phone className="w-5 h-5" />
      {children}
    </a>
  );
};

export default WhatsAppButton;
export { WHATSAPP_URL };
