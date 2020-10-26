import { Field, ObjectType } from 'type-graphql'
import { prop, pre } from '@typegoose/typegoose'
import { formatDateTime } from '../utils/date'

/**
  * BaseModel
*/

@pre<BaseModel>(/save|update/g, function(next) {
  if (this.isNew) {
    this.createdAt = formatDateTime(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss')
    this.updatedAt = formatDateTime(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss')
  } else {
    this.updatedAt = formatDateTime(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss')
    this.update({}, { $set: { updatedAt: this.updatedAt } })
  }
  next()
})

@ObjectType()
export default class BaseModel {

  @Field({ description: "id" })
  id?: string

  @prop()
  @Field({ description: "创建时间" })
  createdAt?: string

  @prop()
  @Field({ description: "更新时间" })
  updatedAt?: string
}


