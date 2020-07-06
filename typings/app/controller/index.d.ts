// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/baseController';
import ExportDictValue from '../../../app/controller/dictValue';
import ExportEssay from '../../../app/controller/essay';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    dictValue: ExportDictValue;
    essay: ExportEssay;
    home: ExportHome;
    login: ExportLogin;
  }
}
