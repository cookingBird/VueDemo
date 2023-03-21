/**
 * PRIVATE_CACHE_GET
 * PRIVATE_CACHE_PATCH
 * PRIVATE_CACHE_KEY
 */
export function proxyAction(action, fields, ...successCallback) {
  return (ctx, payload) => {
    const { getters, commit } = ctx;
    const cache = payload.cache || true;
    const key = payload[fields.PRIVATE_CACHE_KEY];
    const cacheVal = getters[fields.PRIVATE_CACHE_GET](key);
    function handleSuccessCallback(_res) {
      return successCallback.length > 0
        ? successCallback.reduce((_rowVal, _curCallback) => {
            return _curCallback(ctx, _rowVal);
          }, _res)
        : _res;
    }
    if (cacheVal && cache) {
      let res = cacheVal.data;
      return Promise.resolve(res).then(handleSuccessCallback);
    } else {
      return action(ctx, payload)
        .then((res) => {
          commit([fields.PRIVATE_CACHE_PATCH], {
            id: key,
            data: res,
          });
          return res;
        })
        .then(handleSuccessCallback);
    }
  };
}
/**
 * PRIVATE_CACHE
 */
export function proxyMutationPatch(fields) {
  return (state, payload) => {
    const { id } = payload;
    let cache = state[fields.PRIVATE_CACHE];
    let index = cache.findIndex((item) => item.id == id);
    if (index > -1) {
      cache.splice(index, 1, payload);
    } else {
      cache.push(payload);
    }
  };
}
/**
 * PRIVATE_CACHE
 */
export function proxyMutationReset(fields) {
  return (state) => {
    state[fields.PRIVATE_CACHE].splice(0);
  };
}
/**
 * PRIVATE_CACHE
 */
export function proxyGetter(fields) {
  return (state) =>
    ({ id }) => {
      console.log('_____proxy get from cache');
      return state[[fields.PRIVATE_CACHE]].find((item) => item.id == id);
    };
}
