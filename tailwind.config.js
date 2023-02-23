/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }
    },
    fontSize:{
      "12px":"12px",
      "14px":"14px",
      "16px":"16px",
      "18px":"18px",
      "20px":"20px",
      "22px":"22px",
      "24px":"24px",
    },
    extend: {},
  },
  corePlugins: {
    preflight: false
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
