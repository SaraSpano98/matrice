import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function MatriciSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const matrici = [
    { to: "/matrici/matrice-personale", label: "MATRICE PERSONALE" },
    { to: "/matrici/matrice-di-compatibilità", label: "MATRICE DI COMPATIBILITA'" },
    { to: "/matrici/matrice-del-la-bambino-a", label: "MATRICE DEL/LA BAMBINO/A" },
  ];

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 250);
  };

  return (
    <div
      className="relative w-full md:w-auto"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-auto p-2 text-dark dark:text-light hover:text-gray-700 dark:hover:text-gray-300 hover:bg-violet-600 hover:dark:bg-purple-900 rounded transition-colors font-semibold"
      >
         SELEZIONA MATRICE
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>

      <div
        className={`absolute left-0 mt-1 w-full md:w-40 bg-primary dark:bg-secondary border border-gray-500 dark:border-gray-800 rounded shadow-md z-20
          transform transition-all duration-300
          ${isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-90 -translate-y-4 pointer-events-none"}`}
        style={{ transformOrigin: "top center" }}
      >
        {matrici.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setIsOpen(false)}
            className="block p-2 text-dark dark:text-light 
                       hover:translate-y-0.5 hover:scale-105 
                       hover:bg-violet-600 hover:dark:bg-purple-900 
                       hover:shadow-lg hover:dark:shadow-purple-700 
                       active:scale-95 active:shadow-none 
                       transition-all duration-200 rounded"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}




