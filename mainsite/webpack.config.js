const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './static/js/app.js',
  output: {
    publicPath: 'http://127.0.0.1:9000/'
  },
  mode: 'development',
  devServer: {
    // contentBase: path.join(__dirname, 'static'),
    watchContentBase: true,
    hot: true,
    inline: true,
    port: 9000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
