import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const StyleButton =
    "hover:bg-gray-800 px-3 py-2 rounded text-white font-medium block";

  const NavBarButton = [
    { id: 1, name: "Acerca", link: "#about" },
    { id: 2, name: "Servicio", link: "#service" },
    { id: 3, name: "Contacto", link: "#contacts" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gray-900 p-4 shadow-md border-b border-gray-700">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <span className="font-bold text-lg text-white">EdPack</span>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            {NavBarButton.map((button) => (
              <a
                key={button.id}
                href={button.link}
                className={StyleButton}
              >
                {button.name}
              </a>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-2">
            {NavBarButton.map((button) => (
              <a
                key={button.id}
                href={button.link}
                className={StyleButton}
                onClick={() => setOpen(false)}
              >
                {button.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
