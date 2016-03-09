module.exports = {
  entry: __dirname + '/src/app.js',
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
  devtool: 'source-map',
  debug: true
};
