import { Service } from 'egg'
import { DictValueModel } from '../model/DictValue'

export default class DictValueService extends Service {
  public async getDictList(type: string) {
    const data = await DictValueModel.find({ type })
    return data
  }
  public async create(data: any) {
    const res = await DictValueModel.create(
      ...data
    )
    console.log('res', res)
  }
}
