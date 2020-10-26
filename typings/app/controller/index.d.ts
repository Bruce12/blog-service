// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/baseController';
import ExportDictValue from '../../../app/controller/dictValue';
import ExportEssay from '../../../app/controller/essay';
import ExportInterviewBank from '../../../app/controller/interviewBank';
import ExportLogin from '../../../app/controller/login';
import ExportUpload from '../../../app/controller/upload';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    dictValue: ExportDictValue;
    essay: ExportEssay;
    interviewBank: ExportInterviewBank;
    login: ExportLogin;
    upload: ExportUpload;
    user: ExportUser;
  }
}
