import ContactButton from "./ContactButton";
import { FaWhatsapp} from "react-icons/fa";

export default function Hero({title, subtitle}) {
  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/deck1x2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 min-h-screen flex justify-center items-center gap-2">
        <div className="text-center text-white px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90">
            {subtitle}
          </p>
          <div className="mt-6 flex flex-row gap-3 justify-center">
            <ContactButton color="brown" href="#products">🪓Ver Productos</ContactButton> 
            <ContactButton color="green" href="https://wa.me/5491123456789"><FaWhatsapp size={20} />Whatsapp</ContactButton> 
          </div>
        </div>
      </div>


    </section>
  );
}
