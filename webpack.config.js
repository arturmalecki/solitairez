module.exports = {
  context: __dirname + "/js",
  entry: './main.js',
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
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
      phaser: __dirname + "/node_modules/phaser/dist/phaser",
      backbone: __dirname + "/node_modules/backbone/backbone",
      underscore: __dirname + "/node_modules/underscore/underscore",
      jquery: __dirname + "/node_modules/jquery/dist/jquery",
      views: __dirname + "/js/views",
      templates: __dirname + "/templates",
      game: __dirname + "/js/game"
    },
    extensions: ["", ".js", ".css", ".html"]
  }
};
