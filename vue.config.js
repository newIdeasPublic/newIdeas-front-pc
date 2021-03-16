module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://admin.xslgy.com/prod-api/api/', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
