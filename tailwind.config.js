/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      // scale: {
      //   "x10": "10"
      // },
      // animation: {
      //   "idle": "idle 25s linear infinite"
      // },
      // keyframes: {
      //   "idle": {
      //     '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
      //     '20%': { transform: 'rotateX(0deg) rotateY(360deg)' }, // Left to right
      //     '25%': { transform: 'rotateX(0deg) rotateY(360deg)' }, // Pause
      //     '45%': { transform: 'rotateX(360deg) rotateY(360deg)' }, // Top to bottom
      //     '50%': { transform: 'rotateX(360deg) rotateY(360deg)' }, // Pause
      //     '70%': { transform: 'rotateX(360deg) rotateY(0deg)' }, // Right to left
      //     '75%': { transform: 'rotateX(360deg) rotateY(0deg)' }, // Pause
      //     '95%': { transform: 'rotateX(0deg) rotateY(0deg)' }, // Bottom to top
      //     '100%': { transform: 'rotateX(0deg) rotateY(0deg)' } // Pause
      //   },
      //   "spin-slow":{

      //   },
      //   "spin-mid":{

      //   },
      //   "spin-fast":{
        
      //   }
      // },
      fontFamily: {
        "open-font": '"Open Sans", sans-serif',
        "silkscreen": '"Silkscreen", sans-serif'
      }
    },
  },
  plugins: [],
}

