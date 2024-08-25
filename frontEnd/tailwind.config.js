/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    './src/**/*.{html,ts}',
   
  ],
  theme: {
    extend: {
      colors:{
        primaire: "rgba(var(--primaire))",
       primairebg: "rgba(var(--primaire-bg))",
      },
      fontSize: {
        'xss': '0.6rem', // Ajouter une taille de texte encore plus petite
      }
    },
  },
  plugins: [],
}

