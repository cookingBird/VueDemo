const formatResponseData = require('./util').formatData;
const { randomRangeNumber } = require('./util');

module.exports = [
  {
    mock: false,
    path: '/api/emgrp-task/emgrgaitaskresult/stat/all',
    response: (req) => {
      return formatResponseData({
        fireCount: Math.floor(Math.random() * 100),
        houseArea: Math.floor(Math.random() * 100),
        personCount: Math.floor(Math.random() * 100),
        roadCount: Math.floor(Math.random() * 100),
      });
    },
  },
  {
    mock: false,
    path: '/api/emgrp-task/emgrgaitaskresultobj/listAll',
    response: (req) => {
      let length = randomRangeNumber(10)(5);
      let res = [];
      for (let i = 0; i < length; i++) {
        res.push({
          addr: '河南省新乡市卫辉市城郊乡人民路',
          createTime: '2021-08-04T15:35:42',
          id: 1372476506239930400,
          name: '',
          objectLatitude: '35.400' + randomRangeNumber(1000)(3),
          objectLongitude: '114.0759' + randomRangeNumber(100)(),
          objectType: 1,
          rank: -1,
          resultId: 100,
          taskId: 1422026507382952000,
          value: '',
        });
      }
      return formatResponseData(res);
    },
  },
];
