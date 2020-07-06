import { Field, ObjectType } from 'type-graphql'
import { Typegoose, prop, pre } from 'typegoose'
import { formatDateTime } from '../utils/date'

/**
  * BaseModel
*/

@pre<BaseModel>(/save|update|updateOne/, function(next) {
  //
  if (!this.createdAt || this.isNew) {
    this.createdAt = formatDateTime(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss')
  } else {
    this.updatedAt = formatDateTime(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss')
  }
  next()
})

@ObjectType()
export default class BaseModel extends Typegoose {

  @Field({ description: "id" })
  _id?: string

  @prop()
  @Field({ description: "创建时间" })
  createdAt: string

  @prop()
  @Field({ description: "更新时间" })
  updatedAt: string

  public warpData<T = any>(data: T, message?: string) {
    return { status: data? 0 : -1, message: message || data? '请求成功' : '请求失败', data }
  }
}


