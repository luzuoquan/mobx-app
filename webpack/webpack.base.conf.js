const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: "./app.tsx"
  },
  output: {
      filename: "[name].[hash].js",
      path: "/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [{
      test: /\.tsx|\.ts?$/,
      loader: "ts-loader"
    }]
  }
}