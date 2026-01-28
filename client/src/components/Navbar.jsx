import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSettings } from "../hooks/useSettings";

import matrixLogo from "../assets/matrixLogo.png";

import MatriciSelector from "./shared/MatriciSelector";
import LearnSelector from "./shared/LearnSelector";
import LanguageSelector from "./shared/LanguageSelector";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { settings: { darkMode }, toggleDarkMode } = useSettings();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  return (
    <nav className="w-full fixed z-10 border-b border-gray-300 dark:border-gray-600 bg-primary dark:bg-secondary py-4">
      <div className="flex justify-between items-center mx-auto px-5">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={matrixLogo} alt="Matrix Logo" className="h-12 object-contain" />
          <span className="text-xl font-bold text-dark dark:text-light">
            {t("navbar.title") || "Matrice del Destino"}
          </span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4 font-semibold">
          <Link to="/" className="text-dark dark:text-light hover:text-slate-950 dark:hover:text-gray-300 rounded hover:bg-violet-600 hover:dark:bg-purple-900 ml-2 p-2 transition-colors">
            {t("navbar.home")}
          </Link>

          <MatriciSelector />
          <LearnSelector />
          <LanguageSelector i18n={i18n} />

          <button
            onClick={() => toggleDarkMode(!darkMode)}
            className="ml-2 p-2 rounded hover:bg-violet-600 hover:dark:bg-purple-900"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={() => toggleDarkMode(!darkMode)} className="p-2">
            {darkMode ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-violet-600 hover:dark:bg-purple-900 rounded transition-colors"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary dark:bg-secondary border-t border-gray-300 dark:border-gray-600 py-4 space-y-2">
          <Link to="/" className="block p-2 text-dark dark:text-light">
            {t("navbar.home")}
          </Link>
          <MatriciSelector />
          <LearnSelector />
          <div className="px-2">
            <LanguageSelector i18n={i18n} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;








