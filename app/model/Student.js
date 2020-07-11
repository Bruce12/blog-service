"use strict";
var Student_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseModel_1 = require("./BaseModel");
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("typegoose");
/**
  * 学生类
*/
let Student = Student_1 = class Student extends BaseModel_1.default {
    //#region（实例方法 和 实例方法）
    async userInstanceTestMethods() {
        const user = new Student_1();
        user.userName = '我是实例化方法测试';
        user.userNo = 9527;
        return user;
    }
    async userStaticTestMethods() {
        const user = new Student_1();
        user.userName = '我是静态方法测试';
        user.userNo = 9527;
        return user;
    }
};
tslib_1.__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field(() => type_graphql_1.Int, { description: "编号" }),
    tslib_1.__metadata("design:type", Number)
], Student.prototype, "userNo", void 0);
tslib_1.__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field({ nullable: true, description: "名称" }),
    tslib_1.__metadata("design:type", String)
], Student.prototype, "userName", void 0);
tslib_1.__decorate([
    typegoose_1.instanceMethod,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Student.prototype, "userInstanceTestMethods", null);
tslib_1.__decorate([
    typegoose_1.staticMethod,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Student.prototype, "userStaticTestMethods", null);
Student = Student_1 = tslib_1.__decorate([
    type_graphql_1.ObjectType(),
    typegoose_1.index({ userNo: 1 })
], Student);
exports.Student = Student;
exports.StudentModel = new Student().getModelForClass(Student);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R1ZGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0dWRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDJDQUFvQztBQUVwQywrQ0FBc0Q7QUFDdEQseUNBQWdGO0FBRWhGOztFQUVFO0FBR0YsSUFBYSxPQUFPLGVBQXBCLE1BQWEsT0FBUSxTQUFRLG1CQUFTO0lBVXBDLHNCQUFzQjtJQUVmLEtBQUssQ0FBQyx1QkFBdUI7UUFFbEMsTUFBTSxJQUFJLEdBQVksSUFBSSxTQUFPLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFHTSxLQUFLLENBQUMscUJBQXFCO1FBRWhDLE1BQU0sSUFBSSxHQUFZLElBQUksU0FBTyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBR0YsQ0FBQTtBQTVCQztJQUZDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDeEIsb0JBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBRyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDekI7QUFJZjtJQUZDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDeEIsb0JBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDNUI7QUFJakI7SUFEQywwQkFBYzs7OztzREFRZDtBQUdEO0lBREMsd0JBQVk7Ozs7b0RBUVo7QUE3QlUsT0FBTztJQUZuQix5QkFBVSxFQUFFO0lBQ1osaUJBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztHQUNSLE9BQU8sQ0FnQ25CO0FBaENZLDBCQUFPO0FBa0NQLFFBQUEsWUFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMifQ==