module.exports = {
  context: __dirname + "/js",
  entry: './main.js',
  output: {
    path: __dirname + "/disc",
    publicPath: "/disc/",
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  resolve: {
    alias: {
      css: __dirname + "/css",
      pahser: __dirname + "/js/libs/phaser",
      backbone: __dirname + "/js/libs/backbone",
      underscore: __dirname + "/js/libs/underscore",
      jquery: __dirname + "/js/libs/jquery",
      views: __dirname + "/js/views"
    },
    extensions: ["", ".js", ".css"]
  }
};
