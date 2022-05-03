const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
});
