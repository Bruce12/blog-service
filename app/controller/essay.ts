import baseController from './baseController'

// 文章列表 restfull
export default class EssayController extends baseController {
	// 创建文章
	public async create() {
		const ctx = this.ctx
		const data = ctx.request.body
		const resData = await ctx.service.essay.create(data)
		this.success({}, resData ? '保存成功' : '保存失败')
	}
	// 更新文章
	public async update() {
		const ctx = this.ctx
		const resData = await ctx.service.essay.edit()
		this.success(resData)
	}
	// 删除文章
	public async destroy() {
		const ctx = this.ctx
		const resData = await ctx.service.essay.deleteEssay()
		this.success(resData)
	}
	public async getList() {
		const ctx = this.ctx
		const list = await ctx.service.essay.getList()
		this.success(list)
	}
	public async getDetail() {
		const ctx = this.ctx
		const data = await ctx.service.essay.getDetail()
		this.success(data)
	}
}