module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: false, decoratorsBeforeExport: true}],
    // [
    //   'module-resolver',
    //   {
    //     root: ['.'],
    //     alias: {
    //       '@medux/core': '@medux/core/src',
    //     },
    //     extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
    //   },
    // ],
  ],
};
