const TerserPlugin = require('terser-webpack-plugin');

// module.exports = {
//   webpack: {
//     configure: (webpackConfig, { env, paths }) => {
//       if (env === 'production') {
//         // Activer la minimisation du bundle
//         webpackConfig.optimization.minimize = true;

//         // Utiliser le plugin Terser pour minimiser les fichiers JavaScript
//         webpackConfig.optimization.minimizer = [
//           new TerserPlugin({
//             // Vos options de configuration pour Terser ici
//             terserOptions: {
//               compress: {
//                 drop_console: true, // Supprimer les appels console.* dans le code
//               },
//               output: {
//                 comments: false, // Supprimer les commentaires du code minifié
//               },
//             },
//           }),
//         ];
//       }

//       return webpackConfig;
//     },
//   },
// };
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
