const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: '#396eb0',
      accent: '#c22c24',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: '#396eb0',
          secondary: '#463AA1',
          accent: '#c22c24',
          neutral: '#333333',
          'base-100': '#FFFFFF',
          info: '#93E6FB',
          success: '#80CED1',
          warning: '#EFD8BD',
          error: '#E58B8B',

          '--btn-focus-scale': '0.95',
        },
      },
      {
        mythemedark: {
          primary: '#396eb0',
          secondary: '#463AA1',
          accent: '#c22c24',
          neutral: '#FFFFFF',
          'base-100': '#111827',
          info: '#93E6FB',
          success: '#80CED1',
          warning: '#EFD8BD',
          error: '#E58B8B',

          '--btn-focus-scale': '0.98',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'mytheme',
  },
};
