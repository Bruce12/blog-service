import { Service } from 'egg'
import { DictValueModel } from '../model/DictValue'

export default class DictValueService extends Service {
  public async getDictList() {
    const data = await DictValueModel.find()
    return data
  }
  public async create(data: any) {
    const res = await DictValueModel.create(
      ...data
    )
    console.log('res', res)
  }
}
