import BaseModel from './BaseModel'
import {index, prop, instanceMethod } from 'typegoose'
import { ObjectType, Field  }  from 'type-graphql'
  

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
    @instanceMethod
    public createEssay(data: any) {
      let essay = new Essay()
      essay.title = data.title
      essay.type = data.type
      essay.content = data.content
      return essay
    }
}
export const EssayModel = new Essay().getModelForClass(Essay)