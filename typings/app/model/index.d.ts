// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseModel from '../../../app/model/BaseModel';
import ExportDictValue from '../../../app/model/DictValue';
import ExportEssay from '../../../app/model/Essay';
import ExportLogin from '../../../app/model/Login';
import ExportStudent from '../../../app/model/Student';
import ExportUser from '../../../app/model/User';

declare module 'egg' {
  interface IModel {
    BaseModel: ReturnType<typeof ExportBaseModel>;
    DictValue: ReturnType<typeof ExportDictValue>;
    Essay: ReturnType<typeof ExportEssay>;
    Login: ReturnType<typeof ExportLogin>;
    Student: ReturnType<typeof ExportStudent>;
    User: ReturnType<typeof ExportUser>;
  }
}
