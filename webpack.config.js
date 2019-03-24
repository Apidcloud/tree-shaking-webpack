const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: "TS",
    // export itself to UMD format
    libraryTarget: "umd",
    umdNamedDefine: true,
    // fix for https://github.com/webpack/webpack/issues/6525
    globalObject: `(typeof self !== 'undefined' ? self : this)`
    },
  mode: 'development',
  optimization: {
    usedExports: true
  }
};