/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    fontFamily: {
      sans: [
        // "Poppins , sans-serif",
        "Outfit, sans-serif",
        // {
        //   fontFeatureSettings: '"cv11", "ss01"',
        //   fontVariationSettings: '"opsz" 32'
        // },
      ],
    },
    color: {
      'orange': '#f38c10',
      "sienna": '#a7763b',
      'lightsteelblue': '#ccd7d8',
      'darkolivegreen': '#4c482e',
      'dark700':'#3d4465'

    },
    extend: {
      colors: {
        'orange': '#f38c10',
        "sienna": '#a7763b',
        'lightsteelblue': '#ccd7d8',
        'darkolivegreen': '#4c482e',
        'dark700':'#3d4465',
        'gray500':'#7e7e7e',
      },
      boxShadow:{
        'main':'-1px 1px 23px 3px rgba(0,0,0,0.12);',
        'header':'-3px 2px 32px 3px rgba(0,0,0,0.09);',
        'box':'0 0 35px 0 rgba(154,161,171,0.15)',
        'notification-box':'0px 0px 15px 1px rgba(201,201,201,1)',

      },
      backgroundImage: {
        'upload-img': "url('/assets/images/transparent-grid-pattern-for-background-vector.jpg')",
        'login-bg':"url('/assets/images/bg-1.jpg')",
        'slider1':"url('/assets/images/slider-1.jpg')",
        'slider2':"url('/assets/images/slider-2.jpg')",
        'slider3':"url('/assets/images/slider-3.jpg')",
      }
     
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
