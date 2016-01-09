module.exports = {
  entry: __dirname + '/src/toastr.js',
  output: {
    path: __dirname + '/js',
    filename: 'toastr.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};