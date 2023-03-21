module.exports = {
  formatData: function (data) {
    return {
      code: 200,
      data: data,
      msg: '操作成功',
      success: true,
    };
  },
  randomRangeNumber: function (unit = 10) {
    return (len = 1) => Math.floor((Math.random() * unit * 10) % (len * unit));
  },
};
