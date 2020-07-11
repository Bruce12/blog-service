"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const Login_1 = require("../model/Login");
class LoginService extends egg_1.Service {
    async checkLogin(uName, pwd) {
        const data = await Login_1.LoginModel.findOne({ userName: uName, pwd: pwd });
        return new Login_1.Login().warpData(data);
    }
}
exports.default = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUM3QiwwQ0FBa0Q7QUFFbEQsTUFBcUIsWUFBYSxTQUFRLGFBQU87SUFDeEMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFhLEVBQUUsR0FBVztRQUNoRCxNQUFNLElBQUksR0FBRyxNQUFNLGtCQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUNwRSxPQUFPLElBQUksYUFBSyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ25DLENBQUM7Q0FDRjtBQUxELCtCQUtDIn0=