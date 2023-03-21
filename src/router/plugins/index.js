import { ErrorLoading } from './ErrorLoading';

const plugins = [ErrorLoading];

function install(router) {
  plugins.forEach((plugin) => {
    plugin.install(router);
  });
}

export default {
  install,
};
