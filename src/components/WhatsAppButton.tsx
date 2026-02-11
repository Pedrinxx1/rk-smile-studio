import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561998378600?text=Olá! Gostaria de agendar uma avaliação.";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
}

const WhatsAppButton = ({ children, className = "", size = "default" }: WhatsAppButtonProps) => {
  const sizeClasses = size === "lg"
    ? "px-8 py-4 text-base gap-3"
    : "px-6 py-3 text-sm gap-2";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:bg-[#1ebe5d] transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 ${sizeClasses} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children}
    </a>
  );
};

export default WhatsAppButton;
export { WHATSAPP_URL };
