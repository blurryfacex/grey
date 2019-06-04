let detailUrl = 'https://detail.1688.com/offer/564492877842.html';

/**
 * 抓取详情页
 * @param {Object} page
 */
async function fetchDetail(page) {
  // 获取商品名称
  let dTitleHandle = await page.$('.d-title');  // 使用css selector格式查找商品名称，返回
  let dTitle = await page.evaluate(dTitle => dTitle.innerHTML, dTitleHandle); // 获取dom innerHTML
  let iDetailConfig = await page.evaluate(x => {
    return Promise.resolve(iDetailConfig);
  }); // 获取页面js iDetailConfig对象
  let iDetailData = await page.evaluate(x => {
    return Promise.resolve(iDetailData);
  }); // 获取页面js iDetailData对象
  let detail = {
    title: dTitle,
    offerid: iDetailConfig.offerid,
    skuProps: iDetailData.sku.skuProps,
    skuMap: iDetailData.sku.skuMap
  };
  /**
   * ……
   */
  // 获取sku图片和缩略图
  Object.keys(detail.skuMap).forEach(async (skuName) => {
    let selectorStr = `tr[data-sku-config] span.image[title=${skuName}]`;
    // 遍历sku信息查找对应的缩略图标签，读取data-imgs属性的json，从其中获取缩略图和原图url
    let dataImgsValue = page.evaluate(selectorStr => {
      return document.querySelector(selectorStr).dataset.imgs;
    }, selectorStr);
    let dataImgs = JSON.parse(await dataImgsValue);
    // 调用第三方库下载图片
    await saveImgs(dataImgs.preview, `${dir}/preview`);
    await saveImgs(dataImgs.original, `${dir}/original`);

  });
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
  let descContainerHandle = await page.$('#desc-lazyload-container');
  let descImgs = await page.evaluate(descContainer => {
    let descImgs = [];
    descContainer.querySelectorAll('img').forEach(imgElement => {
      // 遍历保存所有的详情页图片
      descImgs.push({
        src: imgElement.src
      })
    });
    return descImgs;
  }, descContainerHandle);
}

