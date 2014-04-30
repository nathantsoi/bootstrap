module.exports = function(config){
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    files: [
      'misc/test-lib/jquery-1.8.2.min.js',
      'misc/test-lib/angular.js',
      'misc/test-lib/angular-mocks.js',
      'misc/test-lib/helpers.js',
      'src/**/*.js',
      'template/**/*.js'
    ],
    exclude: [
      'src/**/docs/*'
    ],
    preprocessors: {},
    proxies: {},
    reporters: ['progress'],
    port: 9018,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [
      'Chrome'
    ],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher'
    ],
    captureTimeout: 60000,
    singleRun: false
  });
};
