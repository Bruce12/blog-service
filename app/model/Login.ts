import BaseModel from './BaseModel'
import {index, prop, instanceMethod } from 'typegoose'
import { ObjectType, Field, Int  }  from 'type-graphql'

@ObjectType()
@index({ id: 1 })
export class Login extends BaseModel {
  @prop({ required: true })
  @Field(() => Int, { description: '用户名' })
  userName: string

  @prop({ required: true })
  @Field(() => Int, { description: '密码' })
  pwd: string

  @instanceMethod
  public async checkLogin() {

  }
}
export const LoginModel = new Login().getModelForClass(Login)
