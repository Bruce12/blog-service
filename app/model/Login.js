"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseModel_1 = require("./BaseModel");
const typegoose_1 = require("typegoose");
const type_graphql_1 = require("type-graphql");
let Login = class Login extends BaseModel_1.default {
    async checkLogin() {
    }
};
tslib_1.__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field(() => type_graphql_1.Int, { description: '用户名' }),
    tslib_1.__metadata("design:type", String)
], Login.prototype, "userName", void 0);
tslib_1.__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field(() => type_graphql_1.Int, { description: '密码' }),
    tslib_1.__metadata("design:type", String)
], Login.prototype, "pwd", void 0);
tslib_1.__decorate([
    typegoose_1.instanceMethod,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Login.prototype, "checkLogin", null);
Login = tslib_1.__decorate([
    type_graphql_1.ObjectType(),
    typegoose_1.index({ id: 1 })
], Login);
exports.Login = Login;
exports.LoginModel = new Login().getModelForClass(Login);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBbUM7QUFDbkMseUNBQXNEO0FBQ3RELCtDQUF1RDtBQUl2RCxJQUFhLEtBQUssR0FBbEIsTUFBYSxLQUFNLFNBQVEsbUJBQVM7SUFVM0IsS0FBSyxDQUFDLFVBQVU7SUFFdkIsQ0FBQztDQUNGLENBQUE7QUFWQztJQUZDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDeEIsb0JBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBRyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDOzt1Q0FDekI7QUFJaEI7SUFGQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hCLG9CQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQUcsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7a0NBQzdCO0FBR1g7SUFEQywwQkFBYzs7Ozt1Q0FHZDtBQVpVLEtBQUs7SUFGakIseUJBQVUsRUFBRTtJQUNaLGlCQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7R0FDSixLQUFLLENBYWpCO0FBYlksc0JBQUs7QUFjTCxRQUFBLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFBIn0=