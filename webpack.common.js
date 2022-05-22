const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'site/'),
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "Graph JS Experiments",
        filename: 'index.html'
      })
    ],

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
  };