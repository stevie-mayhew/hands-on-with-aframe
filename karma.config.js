require('babel/register');
const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha', 'chai'],
    files: [
      'test.webpack.js',
    ],
    preprocessors: {
      'test.webpack.js': ['webpack'],
    },
    webpack: {
      module: webpackConfig.module,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
