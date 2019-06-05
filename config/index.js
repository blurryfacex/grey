let config = {
  debug: false,
  name: 'b&b',
  contactEmail: '***@163.com',
  ICPNumber: '',
  port: 4000,
  domainName: 'http://localhost:4000',
  authCookieName: 'b_b',
  classScopedName: '[hash.base64:8]',
  publicPath: '//localhost:4000',
  APIDomainName: 'https://api.xiapduyu.com',
  graphqlUrl: 'https://www.xiaoduyu.com/graphql',
  head: `
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
    <link rel="apple-touch-icon" href="//www.xiaoduyu.com/icon-512x512.png">
    <meta content="yes" name="apple-touch-fullscreen">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta data-react-helmet="true" name="apple-itunes-app" content="app-id=1261181004">
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  `,
}

module.exports = config