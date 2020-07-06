import baseModel from './BaseModel'
import { index, prop } from 'typegoose'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
@index({ id: 1 })
export class DictValue extends baseModel {
  /**
   * 2. mongoose 默认加s 的问题
   * 
   */
  @prop()
  @Field({ description: '字典Type' })
  type: string

  @prop({ required: true })
  @Field({ description: '字典code' })
  dictCode: string

  @prop({ required: true })
  @Field({ description: '字典Value' })
  dictValue: string
}
export const DictValueModel = new DictValue().getModelForClass(DictValue)
