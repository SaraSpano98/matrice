import matrixLogo from "../assets/matrixLogo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-black text-primary dark:text-accent">
      <div className="max-w-[1168px] mx-auto px-5">

        {/* Contenuto principale */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-600 dark:border-gray-500">

          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={matrixLogo}
                alt="Matrice del Destino"
                className="h-10 w-auto mr-3"
              />
              <h4 className="text-xl font-semibold !text-light dark:text-secondary">
                Matrice del Destino
              </h4>
            </div>

            <p className="text-sm leading-relaxed !text-light dark:text-secondary">
              Scopri il tuo percorso spirituale attraverso la numerologia della
              Matrice del Destino. Il sito ufficiale di Serena Leone.
            </p>
          </div>

          {/* Strumenti */}
          <div>
            <h5 className="mb-4 font-semibold !text-primary dark:text-secondary">
              Strumenti
            </h5>
            <ul className="space-y-2 text-sm">
              {[
                "Homepage",
                "Calcolatore Matrice Personale",
                "Calcolatore Matrice di Coppia",
                "Calcolatore Matrice del Bambino/a"
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="!text-light dark:text-secondary hover:!text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Apprendimento */}
          <div>
            <h5 className="mb-4 font-semibold !text-primary dark:text-secondary">
              Apprendimento
            </h5>
            <ul className="space-y-2 text-sm">
              {[
                "Zone della Matrice",
                "Arcani Maggiori",
                "Matrice vuota"
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="!text-light dark:text-secondary hover:!text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">
          <p className="!text-primary dark:text-secondary">
            © 2026 Matrice del Destino. Tutti i diritti riservati.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:!text-accent transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:!text-accent transition">
              Cookie Policy
            </a>
            <a href="#" className="hover:!text-accent transition">
              Termini e Condizioni
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
