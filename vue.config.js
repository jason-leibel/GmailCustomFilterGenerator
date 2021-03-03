const ansiRegex = require('ansi-regex')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/REPO_NAME/'
      : '/',
  transpileDependencies: [ansiRegex]
}
