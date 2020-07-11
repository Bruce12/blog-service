"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (app) => {
    class Controller extends app.Controller {
        async sendMsg() {
            const nsp = app.io.of('/');
            nsp.emit('test', '我是测试');
        }
    }
    return Controller;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBZSxLQUFLLEVBQUUsR0FBZ0IsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sVUFBVyxTQUFRLEdBQUcsQ0FBQyxVQUFVO1FBQ3JDLEtBQUssQ0FBQyxPQUFPO1lBQ1gsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQztLQUNGO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxDQUFDIn0=