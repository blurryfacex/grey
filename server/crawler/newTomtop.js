import {prod} from "../middleware/parcel/prod"

const puppeteer = require('puppeteer')
const fs = require('fs')
const https = require('https')
const url = 'https://www.tomtop.com/'

const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

;(async () => {
  console.log('start crawling')

  await puppeteer.launch().then(async browser => {
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
      let products = document.querySelectorAll('.product_img')
      products.map(el => {
        return {}
      })
    })



    await console.log(obj)
    await page.close()
  }).catch(err => console.log(err))
})()