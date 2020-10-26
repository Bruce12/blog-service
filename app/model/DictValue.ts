import baseModel from './BaseModel'
import { index, prop, getModelForClass } from '@typegoose/typegoose'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
@index({ id: 1 })
export class DictValue extends baseModel {
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
export const DictValueModel = getModelForClass(DictValue)
