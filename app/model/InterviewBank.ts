import { User } from './User'
import BaseModel from './BaseModel'
import { ObjectType, Field } from 'type-graphql'
import { prop, index, getModelForClass, mongoose } from '@typegoose/typegoose'
/**
 * 面试题题库
 */
@ObjectType()
@index({ id: 1 })
export class InterviewBank extends BaseModel {
  @prop()
  @Field(() => String, { description: '类型' })
  type: string
  @prop()
  @Field(() => String,{ description: '内容' })
  content: string
  @prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  @Field(() => String,{ description: '创建人' })
  createBy?: User | string
  @prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  @Field(() => String,{ description: '更新人' })
  updateBy?: User | string
}

export const InterviewBankModel = getModelForClass(InterviewBank)
