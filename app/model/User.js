"use strict";
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseModel_1 = require("./BaseModel");
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("typegoose");
/**
  * 用户字段接口
*/
let User = User_1 = class User extends BaseModel_1.default {
    //#region（实例方法 和 实例方法）
    async userInstanceTestMethods() {
        const user = new User_1();
        user.userName = '我是实例化方法测试';
        user.userNo = 9527;
        return user;
    }
    static async userStaticTestMethods() {
        const user = new User_1();
        user.userName = '我是静态方法测试';
        user.userNo = 9527;
        return user;
    }
};
tslib_1.__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field(() => type_graphql_1.Int, { description: "编号" }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "userNo", void 0);
tslib_1.__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field({ nullable: true, description: "名称" }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "userName", void 0);
tslib_1.__decorate([
    typegoose_1.instanceMethod,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], User.prototype, "userInstanceTestMethods", null);
tslib_1.__decorate([
    typegoose_1.staticMethod,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], User, "userStaticTestMethods", null);
User = User_1 = tslib_1.__decorate([
    type_graphql_1.ObjectType(),
    typegoose_1.index({ userNo: 1 })
], User);
exports.User = User;
exports.UserModel = new User().getModelForClass(User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUFvQztBQUVwQywrQ0FBc0Q7QUFDdEQseUNBQXFFO0FBRXJFOztFQUVFO0FBR0YsSUFBYSxJQUFJLFlBQWpCLE1BQWEsSUFBSyxTQUFRLG1CQUFTO0lBV2pDLHNCQUFzQjtJQUVmLEtBQUssQ0FBQyx1QkFBdUI7UUFFbEMsTUFBTSxJQUFJLEdBQVMsSUFBSSxNQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFHTSxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQjtRQUV2QyxNQUFNLElBQUksR0FBUyxJQUFJLE1BQUksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUdGLENBQUE7QUE1QkM7SUFGQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hCLG9CQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQUcsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7b0NBQ3pCO0FBSWY7SUFGQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hCLG9CQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7c0NBQzNCO0FBS2xCO0lBREMsMEJBQWM7Ozs7bURBUWQ7QUFHRDtJQURDLHdCQUFZOzs7O3VDQU9aO0FBN0JVLElBQUk7SUFGaEIseUJBQVUsRUFBRTtJQUNaLGlCQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7R0FDUixJQUFJLENBZ0NoQjtBQWhDWSxvQkFBSTtBQWtDSixRQUFBLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDIn0=