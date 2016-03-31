var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/toastr.js',
  output: {
    path: __dirname + '/final/js',
    filename: 'toastr.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  devtool: 'cheap-module-source-map'
};
