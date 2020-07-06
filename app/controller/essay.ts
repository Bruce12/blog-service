import baseController from './baseController'

// 文章列表
export default class EssayController extends baseController {
    public async create() {
        const ctx = this.ctx
        const data = ctx.request.body
        const resData = await ctx.service.essay.create(data)
        this.success(null, resData ? '保存成功' : '保存失败')
    }
    public async index() {
        const ctx = this.ctx
        const query = ctx.request.query
        const list = await ctx.service.essay.getList(query)
        this.success(list)
    }
    public async update() {
        const ctx = this.ctx
        const query = ctx.request.body
        const resData = await ctx.service.essay.edit({ _id: ctx.params.id, content: query.content })
        this.success(resData)
    }
}