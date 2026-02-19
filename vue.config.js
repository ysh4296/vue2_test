module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('svg');
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('svg-url-loader')
      .loader('svg-url-loader')
      .options({
        limit: 0
      });
  }
}
