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

  await puppeteer.launch()
    .then(async browser => {

    let page = await browser.newPage()
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
    const result = await page.evaluate(function (){
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
      page.close()
      for (var i = 0; i < ilist.length; i++) {
        let npage =  browser.newPage()
        fs.mkdir(`./image/${i}`, err => {
          console.log(err || 'success')
        })
        npage.goto(ilist[i], {
          waitUntil: 'networkidle2',
          timeout: 1000000
        })
        sleep(500)
        console.log('star inter evaluate')

        let itemList = ('.moveList a img')
        console.log(itemList)
        // await page.evaluate(function(){
        //   console.log('nresult')
        //   let $ = window.$
        //   let itemList = $('.moveList a img')
        //   console.log(itemList)
        //   if (itemList >= 1) {
        //     itemList.each(function(index, item){
        //       console.log(index, item)
        //       https.get(item.src, (res) => {
        //         let imgData = ''
        //         res.setEncoding('binary')
        //         res.on('data', (chunk) => {
        //           imgData += chunk
        //         })
        //         res.on('end', () => {
        //           fs.writeFile(`./image/${main_index}/${index}.jpg`, imgData, 'binary', (error) => {
        //             console.log(error ? error: 'success')
        //           })
        //         })
        //       })
        //     })
        //   }
        // })
        console.log('end inter evaluate')
        npage.close()
      }
    })
    console.log('result', result)


  }).catch( err => {
    console.log(err)
  })
})()