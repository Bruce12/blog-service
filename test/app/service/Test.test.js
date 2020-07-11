"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const bootstrap_1 = require("egg-mock/bootstrap");
describe('test/app/service/Test.test.js', () => {
    let ctx;
    before(async () => {
        ctx = bootstrap_1.app.mockContext();
    });
    it('sayHi', async () => {
        const result = await ctx.service.user.sayHi('egg');
        assert(result === 'hi, egg');
    });
    it('addUserByScheduleTest', async () => {
        const result = await ctx.service.user.addUserByScheduleTest();
        assert(result.userNo === 99);
    });
    it('testUserInstanceServiceMethods', async () => {
        const user = await ctx.service.user.testUserInstanceServiceMethods();
        assert(user.userName == '我是实例化方法测试');
    });
    it('testUserStaticServiceMethods', async () => {
        const user = await ctx.service.user.testUserStaticServiceMethods();
        assert(user.userName == '我是静态方法测试');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGVzdC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWlDO0FBRWpDLGtEQUF5QztBQUV6QyxRQUFRLENBQUMsK0JBQStCLEVBQUUsR0FBRyxFQUFFO0lBQzdDLElBQUksR0FBWSxDQUFDO0lBRWpCLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNoQixHQUFHLEdBQUcsZUFBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLElBQUksRUFBRTtRQUM5QyxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEJBQThCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDNUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUMifQ==