// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportDictValue from '../../../app/service/dictValue';
import ExportEssay from '../../../app/service/essay';
import ExportLogin from '../../../app/service/login';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    dictValue: AutoInstanceType<typeof ExportDictValue>;
    essay: AutoInstanceType<typeof ExportEssay>;
    login: AutoInstanceType<typeof ExportLogin>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
