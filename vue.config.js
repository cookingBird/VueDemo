const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const ZipPlugin = require('./plugin/zip-plugin.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const GetMock = require('./mock');



const GetPlugin = (_date) =>
  new ZipPlugin({
    path: path.resolve(__dirname, 'packages'),
    filename: 'dist.' + _date,
  });
const getFormatDateNow = function () {
  let res = '';
  let dateTime = new Date();
  let year = dateTime.getFullYear(); //获取当前年份
  res += year;
  let month = dateTime.getMonth() + 1; //获取当前月份
  res += month < 10 ? `0${month}` : `${month}`;
  let day = dateTime.getDate(); //获取当前日
  res += day < 10 ? `0${day}_` : `${day}_`;
  let hour = dateTime.getHours(); //获取小时
  res += hour < 10 ? `0${hour}` : `${hour}`;
  let minutes = dateTime.getMinutes(); //获取分
  res += minutes < 10 ? `0${minutes}` : `${minutes}`;
  let second = dateTime.getSeconds(); //获取秒
  res += second < 10 ? `0${second}` : `${second}`;
  return res;
};


module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      less: {},
    },
  },
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      title: '首页',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    page2: {
      entry: 'src/pages/page2/main.js',
      template: 'public/index.html',
      title: '展示页2',
      filename: 'page2.html',
      chunks: ['chunk-vendors', 'chunk-common', 'page2'],
    },
  },
  configureWebpack: {
    plugins:
      process.env.NODE_ENV == 'production'
        ? [GetPlugin(getFormatDateNow())]
        : [new BundleAnalyzerPlugin()],
  },
  devServer: {
    port: 1888,
    proxy: {
      '/api': {
        target: 'http://211.149.129.108:8000',
        ws: true,
        bypass: function (req, res) {
          console.log(
            '___________request path is ' + new Date(Date.now()).toLocaleString(),
            req.path,
          );
          if (GetMock(req).mock && GetMock(req)) {
            res.send(GetMock(req).response(req));
          }
        },
      },
    },
  },
});
