
let config = {
  debug: false,
  publicPath: '//localhost:4000'
}

if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
  let localhost = 'localhost'
  config.debug = process.env.NODE_ENV === 'test'
  config.port = 4000
  config.classScopedName = '[name]_[local]__[hash:base64:5]'
  config.domainName = `http://${localhost}:4000`
  config.publicPath = `http://${localhost}:4000`
  config.googleAdSense = ''
  config.GA = ''
  config.analysisScript = ''
}

module.exports = config