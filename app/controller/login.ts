import { Controller } from 'egg'
// import { LoginModel } from '../model/Login'

export default class LoginController extends Controller {
  public async checkLogin() {
    // let login = new LoginModel()
    let ctx = this.ctx
    let query = ctx.request.body
    const data = await this.ctx.service.login.checkLogin(query.userName, query.pwd)
    this.ctx.body = data
  }
}
