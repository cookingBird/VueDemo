export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    if (from.meta.keepAlive) {
      from.meta.savedPosition = document.body.scrollTop;
    }
    return {
      x: 0,
      y: to.meta.savedPosition || 0,
      behavior: 'smooth',
    };
  }
}
