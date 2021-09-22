module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        login: '600px',
      },
      inset: {
        125: '125%',
      },
      fontSize: {
        bullet: '5px',
      },
      boxShadow: {
        'detail-img': '0 -2px hsl(0deg 0% 100% / 20%)',
        'admin-header': '0px 10px 30px 0px rgb(82 63 105 / 5%)',
        'drop-down': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
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
        admin: {
          'bs-bg': '#EFF2F5',
          'bs-blue': '#009ef6',
          'bs-indigo': '#6610f2',
          'bs-purple': '#6f42c1',
          'bs-pink': '#d63384',
          'bs-red': '#dc3545',
          'bs-orange': '#fd7e14',
          'bs-yellow': '#ffc107',
          'bs-green': '#198754',
          'bs-teal': '#20c997',
          'bs-cyan': '#0dcaf0',
          'bs-gray': '#7E8299',
          'bs-gray-dark': '#3F4254',
          'bs-white': '#ffffff',
          'bs-light': '#F5F8FA',
          'bs-primary': '#009EF7',
          'bs-secondary': '#E4E6EF',
          'bs-success': '#50CD89',
          'bs-info': '#7239EA',
          'bs-warning': '#FFC700',
          'bs-danger': '#F1416C',
          'bs-dark': '#181C32',
          'bs-darker': '#1a1a27',
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
      minHeight: {
        main: '100px',
        content: 'calc(100vh - 140px)',
      },
    },
  },
  variants: {
    extend: {
      width: ['responsive', 'hover', 'focus'],
      display: ['responsive', 'hover', 'focus'],
      scale: ['active', 'group-hover'],
      // transitionDuration: ['hover', 'focus',],
    },
  },
  plugins: [],
};
