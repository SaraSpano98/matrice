import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSettings } from "../hooks/useSettings";

import MatriciSelector from "./shared/MatriciSelector";
import LearnSelector from "./shared/LearnSelector";
import LanguageSelector from "./shared/LanguageSelector";

import matrixLogo from "../assets/matrixLogo.png";

const Navbar = () => {
  const { i18n } = useTranslation();
  const {
    settings: { darkMode },
    toggleDarkMode,
  } = useSettings();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/95 dark:bg-secondary/95 backdrop-blur border-b border-gray-300 dark:border-gray-600">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex items-center justify-between relative">

        {/* LOGO SINISTRA */}
        <div className="absolute left-0 flex items-center pl-2 md:pl-4">
          <img
            src={matrixLogo}
            alt="Matrix Logo"
            className="h-10 md:h-12 object-contain animate-breath"
            style={{ animation: "slowPulse 6s ease-in-out infinite" }}
          />
        </div>

        {/* LINKS SINISTRA (Home rimossa) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium ml-20">
          <MatriciSelector className="uppercase font-matrix" />
          <LearnSelector className="uppercase font-matrix" />
        </div>

        {/* LOGO CENTRALE COME LINK ALLA HOME */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-3"
        >
          <span className="text-yellow-400 text-xl">✦</span>
          <span className="text-3xl font-serif font-bold text-dark dark:text-light font-matrix">
            Matrix
          </span>
          <span className="text-yellow-400 text-xl">✦</span>
        </Link>

        {/* LINKS DESTRA */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <LanguageSelector i18n={i18n} className="uppercase font-matrix" />

          <button
            onClick={() => toggleDarkMode(!darkMode)}
            className="px-2 py-1 rounded hover:bg-violet-600 hover:dark:bg-purple-900 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          <Link
            to="/contact"
            className="text-gray-700 hover:text-dark dark:text-gray-500 dark:hover:text-light opacity-80 hover:opacity-100 transition"
          >
            CONTATTI
          </Link>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => toggleDarkMode(!darkMode)}
            className="text-dark dark:text-light text-lg"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-dark dark:text-light text-xl px-2 py-1 rounded hover:bg-violet-600 hover:dark:bg-purple-900 transition"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Home rimossa) */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-5 pt-2 pb-4 space-y-3 border-t border-gray-300 dark:border-gray-600 bg-primary dark:bg-secondary">
          <MatriciSelector className="uppercase font-matrix" />
          <LearnSelector className="uppercase font-matrix" />
          <LanguageSelector i18n={i18n} className="uppercase font-matrix" />

          <Link
            to="/contact"
            className="block text-gray-700 hover:text-dark dark:text-gray-500 dark:hover:text-light opacity-90"
          >
            CONTATTI
          </Link>
        </div>
      )}

      {/* ANIMAZIONE PULSANTE MORBIDA */}
      <style>{`
        @keyframes slowPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .animate-breath {
          animation: slowPulse 6s ease-in-out infinite;
        }

        .font-matrix {
          font-family: 'Cinzel', serif;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;


