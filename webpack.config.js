const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'production';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js',
  },
  plugins: [
    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    }),
    new ExtractTextPlugin({
      filename: './css/main.css',
      disable: process.env.NODE_ENV === 'development',
    }),
    new webpack.DefinePlugin({
      'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],
};
