const { resolve } = require('path')
const cp = require('child_process')

;(async () => {
  const script = resolve(__dirname, '../crawler/tomtop')
  const child = cp.fork(script, [])
  let invoked = false

  child.on('error', err => {
    if (invoked) return
    invoked = true
    console.log(err)
  })

  child.on('exit', code => {
    if (invoked) return
    invoked = true
    let err = code === 0 ? null : new Error('exit code' + code)
    console.log(err)
  })

  child.on('message', data => {
  })

})()