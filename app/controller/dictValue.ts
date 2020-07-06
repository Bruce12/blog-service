import { Controller } from 'egg'

export default class DictValueController extends Controller {
  public async show() {
    const ctx = this.ctx
    // const query = ctx.params.id
    const data = await ctx.service.dictValue.getDictList()
    ctx.body = data
  }
}
