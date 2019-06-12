const puppeteer = require('puppeteer')
const fs = require('fs')
const https = require('https')
const url = 'https://www.tomtop.com/'

const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

function get (url, m, s) {
  https.get(url, function(res) {
    let imgData = ''
    res.setEncoding('binary')
    res.on('data', (chunk) => {
      imgData += chunk
    })
    res.on('end', () => {
      fs.writeFile(`./image/${m}/${s}.jpg`, imgData, 'binary', (error) => {
        console.log(error ? error: 'success')
      })
    })
  })
}

;(async () => {
  console.log('start crawling')

  await puppeteer.launch({
    headless: false
  }).then(async browser => {
    const page = await browser.newPage()
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 1000000
    })
    await sleep(500)

    // 详情信息是根据滚动异步加载，所以需要让页面滚动到屏幕最下方，通过延迟等待的方式进行多次滚动
    // let preScrollHeight = 0
    // let scrollHeight = -1
    // while(preScrollHeight !== scrollHeight) {
    //   let scrollH1 = await page.evaluate(async () =>
    //     window.scrollTo(0, document.body.scrollHeight)
    //   )
    //   await page.waitFor(500)
    //   let scrollH2 = await page.evaluate(async () => document.body.scrollHeight)
    //   preScrollHeight = scrollH1
    //   scrollHeight = scrollH2
    // }
    // await sleep(500)
    const obj = await page.evaluate(() => {
      document.scrollingElement.scrollTop = 5000
      let products = [...document.querySelectorAll('.product_img a')]
      return products.map(el => {
        return el.href.trim()
      })
    })
    page.close()
    for (var x=0; x< obj.length; x++) {
      const page = await browser.newPage()
      await page.goto(obj[x], {
        waitUntil: 'networkidle2',
        timeout: 1000000
      })
      fs.mkdir(`./image/${x}`, err => {
        console.log(err || 'success')
      })
      await sleep(500)

      let nresult = await page.$$eval('.moveList a img', e => {
        let dd = []
        for (var z=0;z<e.length;z++) {
          dd.push(e[z].src)
        }
        return dd
      })
      for(var n=0;n<nresult.length;n++) {
        get(nresult[n] ,x , n)
      }
    }

  }).catch(err => console.log(err))
})()