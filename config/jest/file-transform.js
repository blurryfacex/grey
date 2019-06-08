const path = require('path')

module.exports = {
  process(src, filename, config, options) {
    return 'module.expots = ' + JSON.stringify(path.basename(filename)) + ';'
  }
}