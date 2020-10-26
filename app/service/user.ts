import { Service } from 'egg'
import { UserModel } from '../model/User' 

export default class UserService extends Service {
  public async getUserByName(query: { username: string, pwd: string }) {
    return UserModel.findOne({ username: query.username, password: query.pwd })
    .select(['name', 'username', 'portrait', 'skill', 'hobby', 'brief']).exec()
  }
}
