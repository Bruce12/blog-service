import baseController from './baseController'

export default class UserController extends baseController {
  public async getUser() {
    const ctx = this.ctx
    const query = ctx.request.body
    const uName = query.username as string
    const pwd = query.password as string
    const resData = await ctx.service.user.getUserByName({ username: uName, pwd: pwd })
    this.success(resData)
  }
}