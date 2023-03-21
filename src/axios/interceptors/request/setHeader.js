import { Base64 } from 'js-base64';
import { getToken } from '@/util/Auth/authStore';
import website from '@/config/website';

export const headers = () => {
  const Authorization = `Basic ${Base64.encode(
    `${website.clientId}:${website.clientSecret}`,
  )}`;
  //让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
  const Auth = 'bearer ' + getToken();
  return {
    Authorization: Authorization,
    'Blade-Auth': Auth,
  };
};

export function setHeader(websiteConfig) {
  return (config) => {
    const meta = config.meta || {};
    const isToken = meta.isToken === true;
    config.headers['Authorization'] = `Basic ${Base64.encode(
      `${website.clientId}:${website.clientSecret}`,
    )}`;
    if (getToken && !isToken) {
      //让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
      config.headers['Blade-Auth'] = 'bearer ' + getToken();
    }
    return config;
  };
}
