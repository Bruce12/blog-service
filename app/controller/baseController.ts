import { Controller } from 'egg'
/**
 * 处理data 返回数据
 */
// const handleData = (data: any) => {
//   let list: any = null
//   if (Array.isArray(data)) {
//     list = data.map(t => {
//       let o = Object.assign({}, t)
//       o.id = o._id
//       // delete t._id
//       console.log('ttt', o)
//       return t
//     })
//   } else if (Object.prototype.toString.call(data) === '[object Object]') {
//     data.id = data._id
//     delete data._id
//     list =  data
//   }
//   console.log('list', data)
//   return list
// }



export default class BaseController extends Controller {
  get user() {
    return this.ctx
  }
  success(data: any, message?: string, status?: number) {
    this.ctx.body = {
      status: status || 0,
      message: message || '请求成功',
      data: data
    }
  }
  notFound(msg: string) {
    msg = msg || 'not found'
    this.ctx.throw(404, msg)
  }
}
