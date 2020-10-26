import BaseModel from './BaseModel';
import { ObjectType, Field, ArgsType } from 'type-graphql';
import { index, prop, getModelForClass } from '@typegoose/typegoose'
/**
  * 用户字段接口
*/
@ArgsType()
@ObjectType()
@index({ userNo: 1 })
export class User extends BaseModel {
  @prop({ required: true })
  @Field({ nullable: true, description: '名称' })
  username: string

  @prop({ required: true })
  @Field({ description: '密码' })
  password: string

  @prop({ required: true })
  @Field({ description: '姓名' })
  name: string

  @prop()
  @Field({ description: '头像' })
  portrait?: string

  @prop({ type: [String] })
  @Field( type => [String], { description: '技能' })
  skill?: string[]

  @prop({ type: [String] })
  @Field(type => [String], { description: '兴趣爱好' })
  hobby?: string[]

  @prop()
  @Field({ description: '描述' })
  brief?: string
}

export const UserModel = getModelForClass(User)
