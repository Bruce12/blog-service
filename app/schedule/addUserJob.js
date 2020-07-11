"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
/**
* 间隔时间段，定时任务测试
*/
class AddUserJob extends egg_1.Subscription {
    static get schedule() {
        return {
            interval: '600000m',
            type: 'all',
        };
    }
}
exports.default = AddUserJob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVXNlckpvYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZFVzZXJKb2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2QkFBa0M7QUFFbEM7O0VBRUU7QUFDRixNQUFxQixVQUFXLFNBQVEsa0JBQVk7SUFDbEQsTUFBTSxLQUFLLFFBQVE7UUFDakIsT0FBTztZQUNMLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQztJQUNKLENBQUM7Q0FhRjtBQW5CRCw2QkFtQkMifQ==