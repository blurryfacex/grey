const { connect, initSchema } = require('../database/init')
;(async () => {
  await connect()
  initSchema()

  require('./movie')
})()