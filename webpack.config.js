require('dotenv').config();
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicFolder = `${__dirname}/public`;

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index.js', './scss/main.scss'],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: publicFolder,
        }),
      },
    ],
  },
  output: {
    path: publicFolder,
    filename: './js/bundle.min.js',
  },
  node: {
    fs: 'empty',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: publicFolder,
    port: 8080,
    stats: 'errors-only',
  },
  plugins: [
    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
    new ExtractTextPlugin({
      filename: './css/main.css',
      disable: false,
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NEWS_API_KEY: JSON.stringify(process.env.NEWS_API_KEY),
          GOOGLE_CLIENT_ID: JSON.stringify(process.env.GOOGLE_CLIENT_ID),
        },
      },
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
