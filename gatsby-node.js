exports.onCreateBabelConfig = ({ babelrc }) => ({
  ...babelrc,
  ...(process.env.NODE_ENV !== "development" && {
    plugins: babelrc.plugins.concat([
      "transform-regenerator",
      "transform-runtime",
    ]),
  }),
})
exports.onCreateWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config._config.entry.app = ["babel-polyfill", config._config.entry.app]
  }
  return config
}
