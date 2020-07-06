import { Service } from 'egg'
import { LoginModel, Login } from '../model/Login'

export default class LoginService extends Service {
  public async checkLogin(uName: string, pwd: string) {
    const data = await LoginModel.findOne({ userName: uName, pwd: pwd })
    return new Login().warpData(data)
  }
}