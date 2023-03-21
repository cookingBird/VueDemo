import Cookies from 'js-cookie';
const TokenKey = 'saber-access-token';
const RefreshTokenKey = 'saber-refresh-token';

export function getToken() {
  // 支持url传入access_token参数，实现免登录
  const access_token = sessionStorage.getItem('access_token');
  if (access_token && window.isPreview) {
    return access_token;
  }
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey);
}

export function setRefreshToken(token) {
  return Cookies.set(RefreshTokenKey, token);
}

export function removeToken() {
  sessionStorage.removeItem('access_token');
  return Cookies.remove(TokenKey);
}

export function removeRefreshToken() {
  return Cookies.remove(RefreshTokenKey);
}
