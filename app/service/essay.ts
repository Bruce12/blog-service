import { Service } from 'egg' 
import { IData, EssayModel } from '../model/Essay'

interface IEditParams {
  _id: string
  content: string
}

export default class EssayService extends Service {
    public async create(data: IData) {
      const resData = await EssayModel.create(data)
      if (resData) true
      return false
    } 
    public async getList(query: any) {
      const resData = await EssayModel.find(query, { _id: 1, title: 1, content: 1, type: 1 })
      return resData
    }
    public async edit(query: IEditParams) {
      const resData = await EssayModel.updateOne({_id: query._id}, { content: query.content })
      return resData
    }
}