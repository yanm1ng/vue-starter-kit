var webpackConfig = require('../build/webpack.test.conf')

module.exports = function (config) {
  config.set({
    port: 9876,
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['progress'],
    files: [
      '**/*.spec.js'
    ],
    preprocessors: {
      '**/*.spec.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }

  })
}