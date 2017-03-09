const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  moduleBind: 'css=style!css',
  historyApiFallback: true,
  stats: {
    colors: true,
    chunks: false,
    hash: false,
    version: false,
    assets: false,
  },
}).listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
