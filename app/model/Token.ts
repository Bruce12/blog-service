import BaseModel from './BaseModel'
import { ObjectType, Field } from 'type-graphql';
import { prop, getModelForClass, mongoose } from '@typegoose/typegoose'

export interface IToken {
  token: string
  expirestAt: Date
  scope: string
  clientId: string
  userId: string
}

// 访问令牌模型
@ObjectType()
export class Token extends BaseModel {
  @prop({ unique: true })
  @Field({ description: '访问令牌' })
  token: string

  @prop()
  @Field({ description: '令牌有效时间' })
  expirestAt: Date

  @prop()
  @Field({ description: '授权范围' })
  scope: string

  @prop()
  @Field({ description: '客户端id' })  
  clientId: string

  @prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  @Field({ description: '用户id' })  
  userId: string
}

export const TokenModel = getModelForClass(Token)