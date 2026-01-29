import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSettings } from "../hooks/useSettings";

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
    <nav className="fixed top-0 w-full z-50 bg-primary/95 dark:bg-secondary/95 backdrop-blur border-b border-gray-300 dark:border-gray-600">

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-3 flex items-center justify-between">

        {/* LEFT */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium">
          <Link
            to="/"
            className="text-dark dark:text-light opacity-80 hover:opacity-100 transition"
          >
            {t("navbar.home")}
          </Link>

          <MatriciSelector />
          <LearnSelector />
        </div>

        {/* LOGO CENTER */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-dark dark:text-light text-xl md:text-2xl font-bold italic tracking-wide">
            + mystik+
          </span>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">

          <LanguageSelector i18n={i18n} />

          <button
            onClick={() => toggleDarkMode(!darkMode)}
            className="text-dark dark:text-light px-2 py-1 rounded hover:bg-violet-600 hover:dark:bg-purple-900 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          <Link
            to="/contact"
            className="text-dark dark:text-light opacity-80 hover:opacity-100 transition"
          >
            CONTACT
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

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-5 pt-2 pb-4 space-y-3 border-t border-gray-300 dark:border-gray-600 bg-primary dark:bg-secondary">

          <Link to="/" className="block text-dark dark:text-light text-sm opacity-90">
            {t("navbar.home")}
          </Link>

          <MatriciSelector />
          <LearnSelector />

          <LanguageSelector i18n={i18n} />

          <Link to="/contact" className="block text-dark dark:text-light text-sm opacity-90">
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;












