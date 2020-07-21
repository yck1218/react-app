const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  // app.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'https://cnodejs.org',
  //     changeOrigin: true,
  //   })
  // );
  let url = 'http://10.36.147.164:9999'
  app.use(
    '/jd',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
};

