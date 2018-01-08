const path = require('path');
const slsw = require('serverless-webpack')

module.exports = {
  entry: slsw.lib.entries,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  externals: {
    "@eventuateinc/eventuate-nodejs-client": "@eventuateinc/eventuate-nodejs-client"
  },
  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, "webpackdebug"),
    filename: "[name].js",
    sourceMapFilename: "[file].map"
  }
};