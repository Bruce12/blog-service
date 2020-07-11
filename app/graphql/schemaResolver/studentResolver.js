"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Student_1 = require("../../model/Student");
const type_graphql_1 = require("type-graphql");
const Student_2 = require("../../model/Student");
let StudentResolver = class StudentResolver {
    async getStudent() {
        return await Student_2.StudentModel.findOne();
    }
    async addStudent() {
        let strudent = new Student_2.StudentModel();
        strudent.userNo = 666;
        strudent.userName = 'liang';
        return await Student_2.StudentModel.create(strudent);
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [Student_1.Student], { description: '查询用户列表' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], StudentResolver.prototype, "getStudent", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => Student_1.Student, { description: '增加用户' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], StudentResolver.prototype, "addStudent", null);
StudentResolver = tslib_1.__decorate([
    type_graphql_1.Resolver(Student_1.Student)
], StudentResolver);
exports.StudentResolver = StudentResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudFJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3R1ZGVudFJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUE4QztBQUM5QywrQ0FBeUQ7QUFDekQsaURBQW1EO0FBR25ELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFHMUIsS0FBSyxDQUFDLFVBQVU7UUFDZCxPQUFPLE1BQU0sc0JBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBR0QsS0FBSyxDQUFDLFVBQVU7UUFDZCxJQUFJLFFBQVEsR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQztRQUNsQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN0QixRQUFRLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUU1QixPQUFPLE1BQU0sc0JBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGLENBQUE7QUFaQztJQURDLG9CQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxpQkFBTyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUM7Ozs7aURBR2pEO0FBR0Q7SUFEQyx1QkFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7Ozs7aURBT2hEO0FBZFUsZUFBZTtJQUQzQix1QkFBUSxDQUFDLGlCQUFPLENBQUM7R0FDTCxlQUFlLENBZTNCO0FBZlksMENBQWUifQ==