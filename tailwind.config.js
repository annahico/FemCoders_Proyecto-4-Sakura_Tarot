// module.exports = {
// theme: {
//   extend: {
//     colors: {
//       customPink:'#f6C1CC',
//     },
//   },
// },
// };

// export default tailwindConfig


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  ],
  theme: {
    extend: {
        colors: {
            customPink:"#f6C1CC",
        }
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // rutas donde Tailwind analizará clases
//   ],
//   theme: {
//     extend: {
//       colors: {
//         customPink: "#F6C1CC",
//         customBrown: "#6A4A4A",
//         customGold: "#D4AF37",
//       },
//       fontFamily: {
//         montserrat: ["Montserrat", "sans-serif"],
//       },
//     },
//   },
//   plugins: [  ],
// };