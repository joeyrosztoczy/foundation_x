const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: ['./web/static/css/app.scss', './web/static/js/app.js'],
  output: {
    path: './priv/static',
    filename: 'app.js'
  },
  resolve: {
    modulesDirectories: [ 'node_modules', path.join(__dirname, '/web/static/js') ]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'url?limit=1000'
    }, {
      test: /\.(png|gif|jpg|pdf)(\?[a-z0-9]+)?$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style',
        path.join('css!sass?includePaths[]=', __dirname, '/node_modules')
      )
    }]
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new CopyWebpackPlugin([{ from: './web/static/assets' }])
  ]
}
