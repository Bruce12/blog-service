"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class DictValueController extends egg_1.Controller {
    async show() {
        const ctx = this.ctx;
        // const query = ctx.params.id
        const data = await ctx.service.dictValue.getDictList();
        ctx.body = data;
    }
}
exports.default = DictValueController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdFZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGljdFZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQWdDO0FBRWhDLE1BQXFCLG1CQUFvQixTQUFRLGdCQUFVO0lBQ2xELEtBQUssQ0FBQyxJQUFJO1FBQ2YsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQTtRQUNwQiw4QkFBOEI7UUFDOUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUN0RCxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNqQixDQUFDO0NBQ0Y7QUFQRCxzQ0FPQyJ9