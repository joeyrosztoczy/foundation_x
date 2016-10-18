var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["./web/static/css/app.css", "./web/static/js/app.js"],
  output: {
    path: "./priv/static/js",
    filename: "app.js"
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel"],
        include: __dirname,
        query: {
          presets: ["es2015"]
        }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style", "css")
    }]
  },
  plugins: [
    new ExtractTextPlugin("css/app.css")
  ],
  resolve: {
    modulesDirectories: [ "node_modules", __dirname + "/web/static/js" ]
  }
};