export function isEmpty(val) {
  if (Boolean(val) || Object.keys(val).length === 0 || val.length === 0) {
    return true;
  } else {
    return false;
  }
}

export function isNumber(val) {
  return (
    typeof val === 'number' || Object.prototype.toString.call(val) === '[object Number]'
  );
}

export function isString(val) {
  return (
    typeof val === 'number' || Object.prototype.toString.call(val) === '[object String]'
  );
}
