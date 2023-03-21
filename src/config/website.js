/**
 * 全局配置文件
 */
export default {
  title: 'saber',
  logo: 'S',
  key: 'saber', //配置主键,目前用于存储
  indexTitle: '蓝睛2.0',
  clientId: 'saber', // 客户端id
  clientSecret: 'saber_secret', // 客户端密钥
  tenantMode: true, // 是否开启租户模式
  tenantId: '000000', // 管理组租户编号
  captchaMode: true, // 是否开启验证码模式
  lockPage: '/lock',
  tokenTime: 3000,
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [],
  //配置首页不可关闭
  isFirstPage: false,
  fistPage: {
    label: '首页',
    value: '/events/current',
    params: {},
    query: {},
    meta: {
      i18n: 'dashboard',
    },
    group: [],
    close: false,
  },
  //配置菜单的属性
  //以用于解析路由时,标注后端返回的字段名
  menu: {
    iconDefault: 'iconfont icon-caidan',
    props: {
      label: 'name', //路由名称字段
      path: 'path', //路由地址字段
      icon: 'source', //路由图标字段
      children: 'children', //子路由字段
      meta: 'meat', //meta信息字段
    },
  },
  // 流程设计器地址
  flowDesignUrl: 'http://localhost:9999',
};
