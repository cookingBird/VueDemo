import NProgress from 'nprogress';
NProgress.configure({
  showSpinner: false,
});

export function setLoading(websiteConfig) {
  return (config) => {
    NProgress.start();
    return config;
  };
}
