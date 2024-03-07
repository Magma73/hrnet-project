const TerserPlugin = require('terser-webpack-plugin');

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
        ];
      }

      return webpackConfig;
    },
  },
};
