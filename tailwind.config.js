/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {

        'museo-negro': '#1C1C1C',       
        'museo-gris': '#3A3A3A',        
        'museo-beige': '#E3D5B8', 
        'museo-blanco': '#FAF8F1',


        'museo-oro': '#C9A227',
        'museo-terracota': '#A35D2B', 
        'museo-oliva': '#6C7A89', 


        'museo-azul': '#4A6FA5', 
        'museo-vino': '#77212E',


        'museo-fondo-claro': '#F6F3EB', 
        'museo-fondo-oscuro': '#2e2e2e'
      },
  },
  },
  plugins: [],
};
