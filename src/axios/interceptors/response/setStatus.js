import { Message } from 'element-ui';

export function setStatus(websiteConfig, router, store) {
  return (res) => {
    const status = res.data.code || res.status;
    const message = res.data.msg || res.data.error_description || '未知错误';
    const statusWhiteList = websiteConfig.statusWhiteList || [];
    //如果在白名单里则自行catch逻辑处理
    if (statusWhiteList.includes(status)) return Promise.reject(res);
    //如果是401则跳转到登录页面
    if (status === 401) {
      store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }));
    }
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
      if (message !== 'message') {
        Message({
          message: message,
          type: 'error',
        });
      }
      return Promise.reject(new Error(message));
    }
    return res;
  };
}
