const puppeteer = require('puppeteer')
const assert = require('assert')
const url = 'https://www.tomtop.com/'
const fs = require('fs')
const https = require('https')

const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
  })

;(async () => {
  console.log('start crawling')

  await puppeteer.launch().then(async browser => {

    const page = await browser.newPage()
    await page.goto(url,{
      waitUntil: 'networkidle2',
      timeout: 1000000
    })
    await sleep(500)
    // 加载详情图
    let preScrollHeight = 0;
    let scrollHeight = -1;
    while(preScrollHeight !== scrollHeight) {
      // 详情信息是根据滚动异步加载，所以需要让页面滚动到屏幕最下方，通过延迟等待的方式进行多次滚动
      let scrollH1 = await page.evaluate(async () => {
        let h1 = document.body.scrollHeight;
        window.scrollTo(0, h1);
        return h1;
      });
      await page.waitFor(500);
      let scrollH2 = await page.evaluate(async () => {
        return document.body.scrollHeight;
      });
      let scrollResult = [scrollH1, scrollH2];
      preScrollHeight = scrollResult[0];
      scrollHeight = scrollResult[1];
    }
    await sleep(500)
    const result = await page.evaluate( () =>{
      const $ = window.$
      document.scrollingElement.scrollTop = 5000
      const items = $('.m_product_box a')
      const ilist = []
      if (items.length >= 1) {
        items.each((index, item) => {
          if (item.href) {
            ilist.push(item.href)
          }
        })
      }
      return ilist
    })
    page.close()
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

    for (var i = 0; i < result.length; i++) {
      const page = await browser.newPage()
      await page.goto(result[i], {
        waitUntil: 'networkidle2',
        timeout: 1000000
      })
      fs.mkdir(`./image/${i}`, err => {
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
        get(nresult[n],i , n)
      }
      // const nresult = await page.evaluate(function () {
      //   const $ = window.$
      //   let mlist = []
      //   console.log('star inter evaluate')
      //
      //   let itemList = $('.moveList a img')
      //   itemList.each(function(index, item){
      //     console.log(index, item)
      //     if (item.src) {
      //       mlist.push(item.src)
      //     }
      //   })
      //   return mlist
      // })
      // mainList[i] = nresult
      // console.log(i+': '+mainList[i])
      console.log('ending')
      await page.close()
    }

    // for (var j =0; j< mainList.length; j++) {
    //   for (var x = 0; x<mainList[j].length; x++) {
    //     console.log(`${j}-${x}: `, mainList[j][x])
    //     get(mainList, j, x)
    //   }
    // }
    // function get(obj, m, s) {
    //
    // }
  }).catch( err => {
    console.log(err)
  })
})()