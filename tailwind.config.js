module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'footer-texture':
          "linear-gradient(180deg,#081b27,rgba(8,27,39,.8)), url('https://global-uploads.webflow.com/5fe2d564b3fa64a886a11cee/5fe2d564b3fa643be1a11d52_Photo-8.jpg')",
      }),
      colors: {
        header: {
          bg: '#0c2738',
        },
        body: {
          bg: '#081b27',
        },
        common: {
          gray89: '#899ead',
          whiteff: '#fff',
          yellowf1: '#f1b722',
          gray37: '#374550',
          gray3b: '#3b4b57',
          gray0c: '#0c2738',
          gray74: '#74a8cf',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        sidebar: '578px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
