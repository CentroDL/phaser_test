module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'phaserTest.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  stats: {
    colors: true
  },
  mode: "development"
}