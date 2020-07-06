import { Context } from 'egg'
// 错误日志
export default () => {
  return async function errorHandler(ctx: Context, next: any) {
    try {
      await next()
    } catch(err) {
      ctx.app.emit('error', err, ctx)
      const status = err.status || 500
      const error = status === 5000 && ctx.app.config.env === 'prod'
        ? 'Internal Server Error': err.message
      // 从 error 对象上读取各个属性，设置到响应中
      ctx.body = { error }
      if (status === 422) {
        ctx.body.detaul = err.errors
      }
      ctx.status = status
    }
  }
}