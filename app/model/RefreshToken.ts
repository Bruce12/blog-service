import BaseModel from './BaseModel';
// import { InstanceType, ModelType } from 'typegoose'
import { ObjectType, Field } from 'type-graphql';
import { prop, getModelForClass } from '@typegoose/typegoose'

// 刷新令牌模型
@ObjectType()
export class RefreshToken extends BaseModel {
  @prop({ unique: true })
  @Field({ description: 'token' })
  token: string

  @Field({ description: '过期时间' })
  @prop()
  expirestAt: Date
  
  @prop()
  @Field({ description: '授权范围' })
  scope: string

  @prop()
  @Field({ description: '' })
  clientId: string

  @prop()
  @Field({ description: '' })
  userId: string

}

export const RefreshTokenModel = getModelForClass(RefreshToken)