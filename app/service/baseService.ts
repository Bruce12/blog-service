import { Service } from 'egg'
import { TokenModel } from './../model/Token'
export default class BaseService extends Service {
  protected async getUserIdByToken() {
    const ctx = this.ctx
    let authStr = ((ctx.request.header.authorization || '') as string).split('Bearer')[1]?.trim()
    const resToken = await TokenModel.findOne({ token: authStr })
    return resToken?.userId || ''
  }
  // 每页多少条
  public limit: number = 10
  // 当前第几页
  public page: number = 10
  // 有问题，以后去调试
  protected async wrapData(data: object | Array<any>) {
    const array: Array<any> = []
    if (data === null || data === undefined) return
    if (Array.isArray(data)) {
      data.forEach(item => {
        const obj: any = {}
        for (let k in item) {
          console.log(k)
          if (k === '_id') {
            obj.id = item[k] 
          } else {
            obj[k] = item[k]
          }
        }
        array.push(obj)
      })
      console.log('我进来了', array)
      return array
    }
    const o: any = {}
    for (let k in data) {
      if (k === '_id') o.id = data[k]
      o[k] = data[k]
    }
    return o
  }
}