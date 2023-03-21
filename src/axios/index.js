import axios from 'axios';
import runInterceptors from './interceptors';
import websiteConfig from '@/config/website';
const JSONbig = require('json-bigint')({ storeAsString: true });
import { store } from '@/store';
import { CreateRouter } from '@/main';

export default createAxios(axios, CreateRouter(), store);

export const headers = () => {
  const { Base64 } = require('js-base64');
  const { getToken } = require('@/util/Auth/authStore');
  const website = require('@/config/website');
  const clientId = website.clientId;
  const clientSecret = website.clientSecret;
  const Authorization = 'Basic ' + Base64.encode(clientId + ':' + clientSecret);
  //让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
  const Auth = 'bearer ' + getToken();
  return {
    Authorization: Authorization,
    'Blade-Auth': Auth,
  };
};

export function createAxios(_axios, router, _store, config = websiteConfig) {
  //默认超时时间
  _axios.defaults.timeout = 10000;
  // 处理大数
  _axios.defaults.transformResponse = [
    function (data) {
      try {
        if (typeof data === 'string') {
          return JSONbig.parse(data);
        }
        return data;
      } catch (error) {
        return data;
      }
    },
  ];
  //返回其他状态码
  _axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500;
  };
  //跨域请求，允许保存cookie
  _axios.defaults.withCredentials = true;
  //设置拦截器
  runInterceptors(_axios, router, _store, config);
  return _axios;
}
