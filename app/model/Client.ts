import BaseModel from './BaseModel'
import { ObjectType, Field } from 'type-graphql'
import { prop, index, getModelForClass } from '@typegoose/typegoose'

@ObjectType()
@index({ id: 1 })
export class Client extends BaseModel {
  @prop({ unique: true })
  @Field(() => String, { description: '客户端id' })
  clientId: string
  @prop()
  @Field(() => String,{ description: '客户端 secret' })
  clientSecret: string
  @prop()
  @Field(() => String,{ description: '授权模式，比如密码模式' })
  grants: string
}

export const ClientModel = getModelForClass(Client)