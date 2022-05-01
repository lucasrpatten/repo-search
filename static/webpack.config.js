const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: __dirname + '/js/main.jsx',
   target: "web",
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
   },
   resolve: {
    extensions: [".js", ".jsx", ".css"]
   }
   devServer: {
      port: 3000
   },
   module: {
      rules: [         
          {
            test: /\.css$/i,
         use: ["style-loader", "css-loader"]},
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}
