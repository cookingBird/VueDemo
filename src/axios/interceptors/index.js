import request from './request';
import response from './response';

export default function runInterceptors(axiosInstance, websiteConfig, router, store) {
  if (!axiosInstance) return;
  //设置请求拦截器
  for (const key in request) {
    axiosInstance.interceptors.request.use((req) => request[key](websiteConfig)(req));
  }
  //设置响应拦截器
  for (const key in response) {
    axiosInstance.interceptors.response.use((res) =>
      response[key](websiteConfig, router, store)(res),
    );
  }
}
