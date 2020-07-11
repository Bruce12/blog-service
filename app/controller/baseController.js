"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
/**
 * 处理data 返回数据
 */
// const handleData = (data: any) => {
//   let list: any = null
//   if (Array.isArray(data)) {
//     list = data.map(t => {
//       let o = Object.assign({}, t)
//       o.id = o._id
//       // delete t._id
//       console.log('ttt', o)
//       return t
//     })
//   } else if (Object.prototype.toString.call(data) === '[object Object]') {
//     data.id = data._id
//     delete data._id
//     list =  data
//   }
//   console.log('list', data)
//   return list
// }
class BaseController extends egg_1.Controller {
    get user() {
        return this.ctx;
    }
    success(data, message, status) {
        this.ctx.body = {
            status: status || 0,
            message: message || '请求成功',
            data: data
        };
    }
    notFound(msg) {
        msg = msg || 'not found';
        this.ctx.throw(404, msg);
    }
}
exports.default = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFnQztBQUNoQzs7R0FFRztBQUNILHNDQUFzQztBQUN0Qyx5QkFBeUI7QUFDekIsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QixxQ0FBcUM7QUFDckMscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4Qiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLFNBQVM7QUFDVCw2RUFBNkU7QUFDN0UseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkIsTUFBTTtBQUNOLDhCQUE4QjtBQUM5QixnQkFBZ0I7QUFDaEIsSUFBSTtBQUlKLE1BQXFCLGNBQWUsU0FBUSxnQkFBVTtJQUNwRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUNELE9BQU8sQ0FBQyxJQUFTLEVBQUUsT0FBZ0IsRUFBRSxNQUFlO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHO1lBQ2QsTUFBTSxFQUFFLE1BQU0sSUFBSSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxPQUFPLElBQUksTUFBTTtZQUMxQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUE7SUFDSCxDQUFDO0lBQ0QsUUFBUSxDQUFDLEdBQVc7UUFDbEIsR0FBRyxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzFCLENBQUM7Q0FDRjtBQWZELGlDQWVDIn0=