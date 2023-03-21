import { isPlainObject, isArray, forEach } from '@/util/merge';
export default function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      //对象则递归合并
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      if (key == 'routes' && result[key]) {
        //routes选项,直接push
        return result[key].push(...val);
      } else {
        //其它数组配置替换之前的配置
        result[key] = val.slice();
      }
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
