import { EggPlugin } from 'egg';
// 开启一些插件
const plugin: EggPlugin = {
  static: true,
  // mongoose
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  },
  // cors
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  // socket.io
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  oAuth2Server: {
    enable: true,
    package: 'egg-oauth2-server'
  }
}

export default plugin;
