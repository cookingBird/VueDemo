const task = require('./task');

//
const MockList = [...task];

module.exports = function (req) {
  let { path } = req;
  let index = MockList.findIndex((item) => item.path == path);
  if (index > -1) {
    return MockList[index];
  } else {
    return false;
  }
};
