const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (env === 'production') {
        // Enable bundle minimization
        webpackConfig.optimization.minimize = true;

        // Use Terser plugin to minimize JavaScript files
        webpackConfig.optimization.minimizer = [
          new TerserPlugin({
            // Your Terser configuration options here
            terserOptions: {
              compress: {
                drop_console: true, // Remove console.* calls in the code
              },
              output: {
                comments: false, // Remove comments from minified code
              },
            },
          }),
          new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            uglifyOptions: {
              compress: {
                drop_console: true, // Supprime les instructions console.*
                drop_debugger: true, // Supprime les instructions debugger
                pure_funcs: ['console.log'], // Supprime les fonctions pures spécifiées
                unused: true,
                dead_code: true,
              },
              output: {
                comments: false, // Supprime les commentaires
              },
              mangle: false,
              sourceMap: false,
              parallel: true,
            },
          }),
        ];
      }

      return webpackConfig;
    },
  },
};
