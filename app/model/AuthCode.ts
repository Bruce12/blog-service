import BaseModel from './BaseModel'
// import { InstanceType, ModelType } from 'typegoose'
import { ObjectType, Field } from 'type-graphql'
import { index, prop, getModelForClass } from '@typegoose/typegoose'

// 授权码 模型
@ObjectType()
@index({ id: 0 })
export class AuthCode extends BaseModel {
  @Field({ description: '授权码' })
  @prop()
  code: string

  @Field({ description: '授权码有效期' })
  @prop()
  expirestAt: Date

  @Field({ description: '客户端回调Url' })
  @prop()
  redirectUri: string

  @Field({ description: '授权范围' })
  @prop()
  scope: string

  @Field({ description: 'id' })
  @prop()
  clientId: string

  @Field({ description: '用户id' })
  @prop()
  userId: string
}

export const AuthCodeModel = getModelForClass(AuthCode)