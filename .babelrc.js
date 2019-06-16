module.exports = function(api) {

  api.cache.forever();

  return {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-flow",
    ],
    "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["@babel/plugin-syntax-dynamic-import"],
    ]
  };
};