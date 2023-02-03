const fallbackMiddleware = require('connect-history-api-fallback')

module.exports = {
  logLevel: 'silent',
  port: 3002,
  browser: [
    'chrome',
    // 'iexplore',
    // 'firefox',
  ],
  server: {
    baseDir: 'public',
    middleware: {
      1: fallbackMiddleware({
        index: '/index.html',
        verbose: true
      })
    }
  },
  files: [
    'public/**/**/*.{html,htm,css,js,ts}'
  ],
  watchOptions: {
    ignored: 'node_modules'
  }
}