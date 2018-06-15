module.exports = {

  proxyList: {

      '/api': {

          target: 'http://192.168.1.119/2.0',   //（这里是代理接口的位置）

          changeOrigin: true,//（允许跨域，如果这不写，调用接口接口时会有跨域错误说缺少请求头）

          pathRewrite: {'^/api': '/api' } 

      }

  }

}