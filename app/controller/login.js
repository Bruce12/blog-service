"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
// import { LoginModel } from '../model/Login'
class LoginController extends egg_1.Controller {
    async checkLogin() {
        // let login = new LoginModel()
        let ctx = this.ctx;
        let query = ctx.request.body;
        const data = await this.ctx.service.login.checkLogin(query.userName, query.pwd);
        this.ctx.body = data;
    }
}
exports.default = LoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFnQztBQUNoQyw4Q0FBOEM7QUFFOUMsTUFBcUIsZUFBZ0IsU0FBUSxnQkFBVTtJQUM5QyxLQUFLLENBQUMsVUFBVTtRQUNyQiwrQkFBK0I7UUFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQTtRQUNsQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQTtRQUM1QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ3RCLENBQUM7Q0FDRjtBQVJELGtDQVFDIn0=