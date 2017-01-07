var path = require('path');
var webpackConfig = require('./webpack.config.js');
var ROOT_PATH = path.resolve(__dirname, '..');

// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: ROOT_PATH,
    frameworks: ['jasmine'],
    files: [
      'spec/javascripts/test_bundle.js',
      { pattern: 'spec/javascripts/fixtures/**/*@(.json|.html|.html.raw)', included: false },
    ],
    preprocessors: {
      'spec/javascripts/**/*.js?(.es6)': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackMiddleware: { stats: 'errors-only' },
  });
};
