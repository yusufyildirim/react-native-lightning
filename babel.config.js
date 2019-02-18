module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [require.resolve('babel-plugin-module-resolver'), {
      root: ['./app'],
      extensions: ['.js', '.ios.js', '.android.js']
    }]
  ]
};
