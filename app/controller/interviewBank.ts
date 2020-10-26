import baseController from './baseController'

export default class InterviewBankController extends baseController {
  public async create() {
    const ctx = this.ctx
    const resData = await ctx.service.interviewBank.create()
    this.success(resData, '保存成功')
  }
  public async show() {
    const ctx = this.ctx
    const id = ctx.params.id
    // 查询
    const resData = await ctx.service.interviewBank.findOne(id)
    this.success(resData || {})
  }
  // 修改
  public async update() {
    const ctx = this.ctx
    const query = ctx.request.body
    const type = ctx.params.id
    const resData = await ctx.service.interviewBank.update({ type: type, content: query.content })
    this.success(resData, '修改成功')
  }
}