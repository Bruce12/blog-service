import BaseService from './baseService' 
import { EssayModel, Essay } from '../model/Essay'
import { User } from '../model/User'


export default class EssayService extends BaseService {
  public async create(data: Essay) {
    const uid = await this.getUserIdByToken()
    data.createBy = uid
    const resData = await EssayModel.create(data)
    if (resData) return true
    return false
  } 
  // 文章列表 支持分页
  public async getList() {
    const ctx = this.ctx
    const limit = (ctx.query.limit || this.limit) - 0
    const page = (ctx.query.page || this.page) - 0
    const type = ctx.query.type || ''
    const total = await EssayModel.find(type ? { type }: {}).countDocuments()
    const resData = await EssayModel.find(type ? { type }: {})?.populate('createBy', { name: 1 })
      .populate('updateBy', { name: 1 }).skip(page -  1).limit(limit).exec()
    const data = resData.map(item => {
      return { 
        id: item._id, 
        brief: item.brief, 
        img: item.img, 
        type: item.type, 
        title: item.title,
        createBy: (item.createBy as User)?.name,
        updateBy: (item.updateBy as User)?.name,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        isDisplay: item.isDisplay
      }
    })
    return { 
      list: data, 
      pageInfo: {
        page: page,
        limit,
        total
    } }
  }
  // 获取文章详情
  public async getDetail() {
    const ctx = this.ctx
    const id = ctx.query.id
    const resData = await EssayModel.findOne({ _id: id }).populate('createBy', { name: 1 })
      .populate('updateBy', { name: 1 }).exec()
    return { 
      id: resData?._id, 
      brief: resData?.brief, 
      img: resData?.img, 
      type: resData?.type, 
      title: resData?.title,
      createBy: (resData?.createBy as User)?.name,
      updateBy: (resData?.updateBy as User)?.name,
      createdAt: resData?.createdAt,
      updatedAt: resData?.updatedAt,
      isDisplay: resData?.isDisplay,
      content: resData?.content
    }
  }
  // 删除文章
  public async deleteEssay() {
    const ctx = this.ctx
    const id = ctx.params.id
    const resData = await EssayModel.deleteOne({ _id: id })
    return !!resData
  }
  // 需要对参数做校验，后续去完善****
  public async edit() {
    const ctx = this.ctx
    const id = ctx.params.id
    const query = ctx.request.body || {}
    const uid = await this.getUserIdByToken()
    const resData = await EssayModel.updateOne({_id: id}, { ...query, updateBy: uid })
    return !!resData
  }
}