/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        display: ["'Outfit'", "sans-serif"],
      },
      colors: {
        accent: "#0ea5e9", // vibrant cyan (sky-500)
        "accent-light": "rgba(14, 165, 233, 0.15)", // subtle cyan for backgrounds
        dark: "#020617", // slate-950
        "dark-card": "#0f172a", // slate-900
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        glow: '0 0 10px rgba(14, 165, 233, 0.7), 0 0 20px rgba(14, 165, 233, 0.5)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'text-gradient': 'textGradient 8s linear infinite',
      },
      keyframes: {
        textGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      }
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
};
