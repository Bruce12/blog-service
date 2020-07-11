import { EggPlugin } from 'egg';

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
  }
};

export default plugin;
