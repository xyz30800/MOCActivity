const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDER_LIBS = ['react', 'react-dom', 'lodash', 'react-google-maps'];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vender: VENDER_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.html']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
           presets: ['es2015', 'react']
        }
      },
      {
        exclude: [ /node_modules/, /index\.html$/],
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        exclude: /node_modules/,
        test: /\.(ttf|eot|svg|woff(2)?|jpe?g|png|gif|)$/,        
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vender', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/img/web-icon.png', // Add Web Icon
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};