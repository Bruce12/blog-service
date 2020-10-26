import BaseModel from './BaseModel'
import { index, prop, getModelForClass, mongoose } from '@typegoose/typegoose'
import { ObjectType, Field  }  from 'type-graphql'
import { User } from './User'

@ObjectType()
@index({ id: 1 })
export class Essay extends BaseModel {
    @prop({ required: true })
    @Field(() => String, { description: '标题' })
    title?: string
  
    @prop({ required: true })
    @Field(() => String, { description: '类型' })
    type: string
  
    @prop({ required: true })
    @Field(() => String, { description: '内容' })
    content: string

    @prop({ required: true })
    @Field(() => String, { description: '简介' })
    brief: string

    @prop()
    @Field(() => String, { description: '头部图片' })
    img?: string

    @prop({ type: mongoose.Types.ObjectId, ref: 'User' })
    @Field(() => String,{ description: '创建人' })
    createBy?: User | string
    @prop({ type: mongoose.Types.ObjectId, ref: 'User' })
    @Field(() => String,{ description: '更新人' })
    updateBy?: User | string

    @prop({ default: 0 })
    @Field(() => String,{ description: '文章是否隐藏' })
    isDisplay?: 0 | 1

    public createEssay(data: Essay) {
      let essay = new Essay()
      essay.title = data.title
      essay.type = data.type
      essay.content = data.content
      essay.img = data.img
      return essay
    }
}
export const EssayModel = getModelForClass(Essay)