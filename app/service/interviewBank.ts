import { User } from './../model/User'
import { TokenModel } from './../model/Token'
import { Service } from 'egg'
import { InterviewBankModel, InterviewBank } from '../model/InterviewBank'

/**
 * 用户 Service 层
 */
export default class UserService extends Service {
  public async findOne(type: string) {
    const resData = await InterviewBankModel.findOne({ type })?.populate('createBy', { name: 1 })
      .populate('updateBy', { name: 1 }).exec()
    return { 
      type: resData?.type, 
      content: resData?.content, 
      createdAt: resData?.createdAt, 
      updatedAt: resData?.updatedAt , 
      createBy: (resData?.createBy as User)?.name, 
      updateBy: (resData?.updateBy as User)?.name,
      id: resData?._id
    }
  }
  // 查询用户id 存入数据库中
  public async create() {
    const ctx = this.ctx
    const data = ctx.request.body
    const uId = await this.getUserIdByToken()
    data.createBy = uId
    const res = await InterviewBankModel.create(data)
    return !!res
  }
  public async update(data: InterviewBank) {
    const uId = await this.getUserIdByToken()
    const resData = await InterviewBankModel.updateOne({ type: data.type },{ content: data.content, updateBy: uId })
    return !!resData
  }
  private async getUserIdByToken() {
    const ctx = this.ctx
    let authStr = ((ctx.request.header.authorization || '') as string).split('Bearer')[1]?.trim()
    const resToken = await TokenModel.findOne({ token: authStr })
    return resToken?.userId || ''
  }
}
