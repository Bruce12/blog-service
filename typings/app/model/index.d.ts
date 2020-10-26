// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthCode from '../../../app/model/AuthCode';
import ExportBaseModel from '../../../app/model/BaseModel';
import ExportClient from '../../../app/model/Client';
import ExportDictValue from '../../../app/model/DictValue';
import ExportEssay from '../../../app/model/Essay';
import ExportInterviewBank from '../../../app/model/InterviewBank';
import ExportLogin from '../../../app/model/Login';
import ExportRefreshToken from '../../../app/model/RefreshToken';
import ExportToken from '../../../app/model/Token';
import ExportUser from '../../../app/model/User';

declare module 'egg' {
  interface IModel {
    AuthCode: ReturnType<typeof ExportAuthCode>;
    BaseModel: ReturnType<typeof ExportBaseModel>;
    Client: ReturnType<typeof ExportClient>;
    DictValue: ReturnType<typeof ExportDictValue>;
    Essay: ReturnType<typeof ExportEssay>;
    InterviewBank: ReturnType<typeof ExportInterviewBank>;
    Login: ReturnType<typeof ExportLogin>;
    RefreshToken: ReturnType<typeof ExportRefreshToken>;
    Token: ReturnType<typeof ExportToken>;
    User: ReturnType<typeof ExportUser>;
  }
}
