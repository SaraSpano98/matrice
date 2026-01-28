import { useState, useRef } from "react";

export default function LanguageSelector({ i18n }) {
  const [isOpen, setIsOpen] = useState(false);
  // Removed unused 'lang' state
  const timeoutRef = useRef(null);

  const languages = [
    { code: "it", label: "IT", flag: "https://flagcdn.com/w20/it.png" },
    { code: "en", label: "EN", flag: "https://flagcdn.com/w20/gb.png" },
  ];

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 250);
  };

  const changeLang = (value) => {
    i18n.changeLanguage(value);
    setIsOpen(false);
  };

  return (
    <div
      className="relative w-full md:w-auto"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full md:w-auto p-2 text-dark dark:text-light hover:text-gray-700 dark:hover:text-gray-300 bg-primary dark:bg-secondary rounded transition-colors"
      >
        🌎 Traduttore
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>

      <div
        className={`absolute left-0 mt-1 w-full md:w-40 bg-primary dark:bg-secondary border border-gray-500 dark:border-gray-800 rounded shadow-md z-20
          transform transition-all duration-300
          ${isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-90 -translate-y-4 pointer-events-none"}`}
        style={{ transformOrigin: "top center" }}
      >
        {languages.map(({ code, label, flag }) => (
          <button
            key={code}
            onClick={() => changeLang(code)}
            className="flex items-center gap-2 w-full p-2 text-dark dark:text-light 
                       hover:translate-y-0.5 hover:scale-105 
                       hover:bg-violet-600 hover:dark:bg-purple-900 
                       hover:shadow-lg hover:dark:shadow-purple-700 
                       active:scale-95 active:shadow-none 
                       transition-all duration-200 rounded"
          >
            <img src={flag} alt={label} className="w-5 h-4" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}




