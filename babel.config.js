module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // Esto es necesario si usas Expo
    plugins: ['react-native-reanimated/plugin'], // Agrega este plugin
  };
};
