const plugin = require('tailwindcss/plugin');
const _ = require('lodash');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: false,
  DiyTheme: [
    { name: 'share', scope: 'module' },
    { name: 'light', scope: 'global' },
  ],
  theme: {
    extend: {
      cursor: {
        'col-resize': 'col-resize',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, config }) {
      _.forEach(config('DiyTheme'), (element) => {
        addVariant(element.name, function ({ modifySelectors, separator }) {
          modifySelectors(function ({ className }) {
            if (element.scope == 'global') {
              return (
                'body.' +
                element.name +
                ' ' +
                '.' +
                e(element.name + separator + className)
              );
            }
            if (element.scope == 'module') {
              return (
                'section[' +
                element.name +
                '] ' +
                '.' +
                e(element.name + separator + className)
              );
            }
            return '';
          });
        });
      });
    }),
  ],
};
