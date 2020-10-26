import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1572947163069_8100';

  // add your egg config in here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  }

  config.io = {
    init: {},
    namespace: {
      '/': {
        connectionMiddleware: ['connection'],
        packetMiddleware: ['packet'],
      },
      '/chat': {
        connectionMiddleware: ['connection'],
        packetMiddleware: [],
      },
    },
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
  }

  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://ljh_rll:123.ljh@127.0.0.1/blog',
    options: {
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  }

  // config.graphql = {
  //   router: '/graphql',
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   dateScalarMode: 'timestamp',
  //   // graphQL 路由前的拦截器
  //   onPreGraphQL: function* (ctx) {},
  //   // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
  //   onPreGraphiQL: function* (ctx) {},
  //    // apollo server的透传参数，参考[文档](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#parameters)
  //   apolloServerOptions: {

  //   }
  // }

  config.middleware = ['errorHandler']
  config.errorHandler = { match: 'api' }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  }
  // 开启授权： 授权码模式 和 刷新 Token 模式，实现刷新访问令牌的功能
  config.oAuth2Server = {
    debug: config.env === 'local',
    grants: ['password'],
    accessTokenLifetime: 60 * 60 * 24
  }
  // 开启文件上传
  config.multipart = {
    mode: 'file',
    fileSize: '50mb',
    whitelist: ['.png', '.jpg', '.jpeg', '.gif']
  }
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  }
}
