"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const User_1 = require("../../model/User");
const User_2 = require("../../model/User");
const type_graphql_1 = require("type-graphql");
let UserResolver = class UserResolver {
    async getUser() {
        return await User_2.UserModel.find();
    }
    async addUser() {
        let user = new User_2.UserModel();
        user.userNo = 666;
        user.userName = 'liang';
        return await User_2.UserModel.create(user);
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [User_1.User], { description: '查询用户列表' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => User_1.User, { description: '增加用户' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "addUser", null);
UserResolver = tslib_1.__decorate([
    type_graphql_1.Resolver(User_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlclJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3QztBQUN4QywyQ0FBNkM7QUFDN0MsK0NBQXlEO0FBR3pELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFHdkIsS0FBSyxDQUFDLE9BQU87UUFDWCxPQUFPLE1BQU0sZ0JBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBR0QsS0FBSyxDQUFDLE9BQU87UUFFWCxJQUFJLElBQUksR0FBRyxJQUFJLGdCQUFTLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUV4QixPQUFPLE1BQU0sZ0JBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGLENBQUE7QUFiQztJQURDLG9CQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7OzsyQ0FHOUM7QUFHRDtJQURDLHVCQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBSSxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDOzs7OzJDQVE3QztBQWZVLFlBQVk7SUFEeEIsdUJBQVEsQ0FBQyxXQUFJLENBQUM7R0FDRixZQUFZLENBZ0J4QjtBQWhCWSxvQ0FBWSJ9