var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: './main.js',

  output:
  {
    path: './',
    filename: 'index.js',
  },

  devServer:
  {
    inline: true,
    port: 4000
  },

  module:
  {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query:
      {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\material-ui-table-edit\/index\.jsx$/,
      loader: "jsx-loader"
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/style.css',
    {
      allChunks: true
    })
  ]
}

module.exports = config;
