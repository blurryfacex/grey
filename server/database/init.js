const mongoose = require('mongoose')
const db = ''
const glob = require('glob')
const { resolve } = require('path')

mongoose.Promise = global.Promise

exports.initSchema = () => {
  glob.sync(resolve(__dirname, './schema', '**/*.js').forEach(require))
}

exports.connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true)
  }

  mongoose.connect(db, {userNewUrlParse: true}, err => {
    console.log(err ? 'Conect Error' + err : 'Connection Success')
  })
}