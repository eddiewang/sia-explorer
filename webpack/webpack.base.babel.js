const path = require('path')
const webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = options => ({
  entry: options.entry,

  output: Object.assign(
    {
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/'
    },
    options.output
  ),

  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: 'file-loader'
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?'
    }),
    new CopyWebpackPlugin([
      {
        from: 'static'
      }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin()
  ]),

  resolve: {
    modules: ['app', 'node_modules', 'app/assets', 'data'],
    extensions: ['.js', '.json'],
    mainFields: ['browser', 'jsnext:main', 'module', 'main']
  },
  devtool: options.devtool
})
