const ansiRegex = require('ansi-regex')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/GmailCustomFilterGenerator/'
      : '/',
  transpileDependencies: [ansiRegex]
}
