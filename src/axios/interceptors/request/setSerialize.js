function serialize(data) {
  return data;
}

export function setSerialize(websiteConfig) {
  return (config) => {
    const meta = config.meta || {};
    //headers中配置serialize为true开启序列化
    if (config.method === 'post' && meta.isSerialize === true) {
      config.data = serialize(config.data);
    }
    return config;
  };
}
