const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    core: './src/index.js',
    consumer: './consumer/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: ['TS', '[name]'],
    // export itself to UMD format
    libraryTarget: "umd",
    umdNamedDefine: true,
    // fix for https://github.com/webpack/webpack/issues/6525
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  optimization: {
    usedExports: true,
    sideEffects: true
  },
  stats: {
    // Examine all modules
    maxModules: Infinity,
    // Display bailout reasons
    optimizationBailout: true
  }
};