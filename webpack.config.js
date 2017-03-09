const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const CLIENT_SERVER = 'http://' + HOST + ':' + PORT;

const EXCLUDE_JS = [
  /node_modules/,
];

/**
*
* @type {*[]}
*/
const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('css/[name].css'),
];

/**
* Plugins that will only be included in production
* @type {*[]}
*/
const productionPlugins = [
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
    },
  }),
];

/**
* Assets that will only be included in development
* @type {string[]}
*/
const devServerEntry = [
  'webpack-dev-server/client?' + CLIENT_SERVER + '/',
  'webpack/hot/only-dev-server',
];

/**
* Styles should only be extracted in production to allow hot-reload of css
* @param loader
* @returns {*}
*/
function styleLoader(loader) {
  if (PRODUCTION) return ExtractTextPlugin.extract('style-loader', loader);
  return 'style-loader!' + loader;
}

/**
*
* @returns {string}
*/
function autoPrefixLoader() {
  return 'autoprefixer-loader?' + JSON.stringify({
    browsers: ['Firefox > 20', 'iOS 7', 'IE 9'],
  });
}

/**
*
* @type {*[]}
*/
const loaders = [
  {
    test: /\.js$/,
    loaders: ['babel'],
    exclude: EXCLUDE_JS,
    include: __dirname,
  },
  {
    test: /\.json$/,
    loader: 'json'
  },
];

/**
*
* @type {*[]}
*/
const preLoaders = [
  {
    test: /\.js$/,
    loader: 'eslint-loader',
    exclude: EXCLUDE_JS,
  },
];

module.exports = {
  entry: {
    main: PRODUCTION ? ['./source'] : devServerEntry.concat(['./source']),
  },

  output: {
    filename: 'js/main.js',
    path: path.join(__dirname, 'production'),
    publicPath: PRODUCTION ? '/production/' : 'http://localhost:3000/production/',
  },

  eslint: {configFile: '.eslintrc'},
  devtool: PRODUCTION ? null : 'cheap-module-eval-source-map',
  module: {loaders: loaders, preLoaders: preLoaders},
  plugins: plugins.concat(productionPlugins),
};
