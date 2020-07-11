"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const User_1 = require("../model/User");
/**
 * 用户 Service 层
 */
class UserService extends egg_1.Service {
    /**
    * sayHi to you
    * @param name - your name
    */
    async sayHi(name) {
        return `hi, ${name}`;
    }
    async addUserByScheduleTest() {
        const user = new User_1.UserModel();
        user.userName = 'add user';
        user.userNo = 99;
        const res = await User_1.UserModel.create(user);
        return res;
    }
    /**
    * 测试用户的实例方法
    */
    async testUserInstanceServiceMethods() {
        const newUser = new User_1.UserModel();
        return await newUser.userInstanceTestMethods();
    }
    /**
    * 测试用户的方法
    */
    async testUserStaticServiceMethods() {
        return await User_1.UserModel.userStaticTestMethods();
    }
}
exports.default = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBOEI7QUFDOUIsd0NBQWdEO0FBRWhEOztHQUVHO0FBQ0gsTUFBcUIsV0FBWSxTQUFRLGFBQU87SUFFOUM7OztNQUdFO0lBQ0ssS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFZO1FBQzdCLE9BQU8sT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sS0FBSyxDQUFDLHFCQUFxQjtRQUVoQyxNQUFNLElBQUksR0FBRyxJQUFJLGdCQUFTLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixNQUFNLEdBQUcsR0FBRyxNQUFNLGdCQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOztNQUVFO0lBQ0ssS0FBSyxDQUFDLDhCQUE4QjtRQUN6QyxNQUFNLE9BQU8sR0FBRyxJQUFJLGdCQUFTLEVBQUUsQ0FBQztRQUVoQyxPQUFPLE1BQU0sT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVEOztNQUVFO0lBQ0ssS0FBSyxDQUFDLDRCQUE0QjtRQUN2QyxPQUFPLE1BQU0sZ0JBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELENBQUM7Q0FFRjtBQXBDRCw4QkFvQ0MifQ==