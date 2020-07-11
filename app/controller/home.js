"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const User_1 = require("../model/User");
class HomeController extends egg_1.Controller {
    async index() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.user.sayHi('egg');
    }
    async getUser() {
        const ctx = this.ctx;
        const users = await User_1.UserModel.findOne();
        ctx.body = users;
    }
    async getUsers() {
        const ctx = this.ctx;
        const users = await User_1.UserModel.find();
        ctx.body = users;
    }
    async addUser() {
        const ctx = this.ctx;
        // 模拟前端传递过来的数据（方便测试）
        const user = new User_1.UserModel();
        user.userName = 'add user';
        user.userNo = 99;
        const res = await User_1.UserModel.create(user);
        ctx.body = res;
    }
    async updateUser() {
        const ctx = this.ctx;
        const user = new User_1.UserModel();
        user.userNo = 99;
        const res = await User_1.UserModel.findOneAndUpdate({ userNo: user.userNo }, { userName: 'i am from update' }, { new: true });
        ctx.body = res;
    }
    async deleteUser() {
        const ctx = this.ctx;
        const user = new User_1.UserModel();
        user.userNo = 99;
        const res = await User_1.UserModel.findOneAndRemove({ userNo: user.userNo });
        ctx.body = res;
    }
    async testInstanceFunction() {
        const ctx = this.ctx;
        const user = await ctx.service.user.testUserInstanceServiceMethods();
        ctx.body = user;
    }
    async testStaticMethods() {
        const ctx = this.ctx;
        const user = await ctx.service.user.testUserStaticServiceMethods();
        ctx.body = user;
    }
}
exports.default = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBZ0M7QUFDaEMsd0NBQXlDO0FBRXpDLE1BQXFCLGNBQWUsU0FBUSxnQkFBVTtJQUU3QyxLQUFLLENBQUMsS0FBSztRQUNoQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRXJCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPO1FBQ2xCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFckIsTUFBTSxLQUFLLEdBQUcsTUFBTSxnQkFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXhDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSxLQUFLLENBQUMsUUFBUTtRQUNuQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRXJCLE1BQU0sS0FBSyxHQUFHLE1BQU0sZ0JBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU87UUFDbEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUVyQixvQkFBb0I7UUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxnQkFBUyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFakIsTUFBTSxHQUFHLEdBQUcsTUFBTSxnQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRU0sS0FBSyxDQUFDLFVBQVU7UUFDckIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUVyQixNQUFNLElBQUksR0FBRyxJQUFJLGdCQUFTLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixNQUFNLEdBQUcsR0FBRyxNQUFNLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUV2SCxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRU0sS0FBSyxDQUFDLFVBQVU7UUFDckIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUVyQixNQUFNLElBQUksR0FBRyxJQUFJLGdCQUFTLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixNQUFNLEdBQUcsR0FBRyxNQUFNLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFdEUsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVNLEtBQUssQ0FBQyxvQkFBb0I7UUFDL0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUVyQixNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFFckUsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxpQkFBaUI7UUFDNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUVyQixNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFFbkUsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQUVGO0FBM0VELGlDQTJFQyJ9