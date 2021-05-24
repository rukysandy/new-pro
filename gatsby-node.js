// exports.onCreateBabelConfig = ({ babelrc }) => ({

//   ...babelrc,
//   ...(process.env.NODE_ENV !== "development" && {
//     plugins: babelrc.plugins.concat([
//       "transform-regenerator",
//       "transform-runtime",
//     ]),
//   }),
// })

// exports.onCreateBabelConfig = ({ actions }) => {
//   actions.setBabelPlugin({
//     name: `babel-plugin-foo`,
//   })

//   exports.onCreateWebpackConfig = ({ config, stage }) => {
//     if (stage === "build-javascript") {
//       config._config.entry.app = ["babel-polyfill", config._config.entry.app]
//     }
//     return config
//   }
// }
