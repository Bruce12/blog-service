import baseController from './baseController'

export default class LoginController extends baseController {
  public async checkLogin() {
    // let login = new LoginModel()
    let ctx = this.ctx
    let query = ctx.request.body
    const data = await this.ctx.service.login.checkLogin(query.userName, query.pwd)
    this.success(data)
  }
}
