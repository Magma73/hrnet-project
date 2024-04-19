const path = require('path');
const { whenProd } = require('@craco/craco');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');

module.exports = {
  webpack: {
    entry: 'index.js',
    output: {
      path: __dirname + '/build',
      filename: 'index_bundle.js',
    },
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        plugins: [
          ...webpackConfig.plugins,
          ...whenProd(
            () => [
              new MiniCssExtractPlugin(),
              new HtmlCriticalWebpackPlugin({
                base: path.resolve(__dirname, 'build'),
                src: 'index.html',
                dest: 'index.html',
                inline: true,
                minify: true,
                extract: true,
                width: 320,
                height: 565,
                penthouse: {
                  blockJSRequests: false,
                },
              }),
              new HtmlWebpackInjectPreload({
                files: [
                  {
                    match: /chunk\.[a-z-0-9]*.css$/,
                    attributes: { as: 'style' },
                  },
                  {
                    match: /chunk\.[a-z-0-9]*.js$/,
                    attributes: { as: 'script' },
                  },
                ],
              }),
            ],
            []
          ),
        ],
        
      };
    },
  },
};
