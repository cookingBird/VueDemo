import NProgress from 'nprogress';

NProgress.configure({
  showSpinner: false,
});
export function setLoading(websiteConfig) {
  return (result) => {
    NProgress.done();
    return result;
  };
}
