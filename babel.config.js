module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: [
    //   [
    //     'module-resolver',
    //     {
    //       root: ['./src'],
    //       extensions: ['.tsx', '.ts', '.json'],
    //       alias: {
    //         'src': './src',
    //         '@assets': './src/assets',
    //         '@components': './src/components',
    //         '@navigation': './src/navigation',
    //         '@pages': './src/pages',
    //         '@redux': './src/redux',
    //         '@constants': './src/constants',
    //         '@hooks': './src/hooks',
    //         '@styles': './src/styles',
    //         '@utils': './src/utils',
    //       },
    //     },
    //   ],
    //   '@babel/plugin-transform-typescript',
    // ],
  };
};
