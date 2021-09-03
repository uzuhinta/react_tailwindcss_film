module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'detail-img':
          '0 -2px hsl(0deg 0% 100% / 20%)',
      },
      backgroundImage: (theme) => ({
        'footer-texture':
          "linear-gradient(180deg,#081b27,rgba(8,27,39,.8)), url('https://global-uploads.webflow.com/5fe2d564b3fa64a886a11cee/5fe2d564b3fa643be1a11d52_Photo-8.jpg')",
        'notfound-bg':
          "linear-gradient(180deg,rgba(5,7,9,.5),rgba(5,7,9,.5)), url('https://global-uploads.webflow.com/5fe2d564b3fa64a886a11cee/5fe2d564b3fa64d6a2a11d45_Photo-2.jpg')",
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
          gray9c: '#9cabb6',
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
