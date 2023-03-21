module.exports = {
  presets: ['@vue/cli-plugin-babel/preset', '@vue/babel-preset-jsx'],
  plugins: [
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }],
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};
