import baseController from './baseController'

export default class DictValueController extends baseController {
  public async show() {
    const ctx = this.ctx
    const id = ctx.params.id
    const data = await ctx.service.dictValue.getDictList(id)
    this.success(data)
  }
}
