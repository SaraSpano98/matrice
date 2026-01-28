export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9A7BFF",         // Viola mistico → titoli, elementi grafici principali, icone centrali
        secondary: "#3C2F70",       // Viola scuro elegante → sfondi scuri, logo, testi principali su chiaro
        light: "#EDEAF9",           // Sfondo chiaro → sezioni, cards, aree neutre
        accent: "#A63D7C",          // Fucsia scuro elegante → bottoni principali, link, hover, highlights importanti
        secondaryAccent: "#F2C94C", // Oro delicato → badge, icone secondarie, piccoli dettagli luminosi
        dark: "#0F192E"             // Blu notte profondo → testi su chiaro, linee, bordi sottili
      }
    },
  },
}
