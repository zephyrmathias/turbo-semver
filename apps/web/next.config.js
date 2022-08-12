const withTM = require("next-transpile-modules")(["@zephyrmathias2/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
