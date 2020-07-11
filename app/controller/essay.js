"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseController_1 = require("./baseController");
// 文章列表
class EssayController extends baseController_1.default {
    async create() {
        const ctx = this.ctx;
        const data = ctx.request.body;
        const resData = await ctx.service.essay.create(data);
        this.success(null, resData ? '保存成功' : '保存失败');
    }
    async index() {
        const ctx = this.ctx;
        const query = ctx.request.query;
        const list = await ctx.service.essay.getList(query);
        this.success(list);
    }
    async update() {
        const ctx = this.ctx;
        const query = ctx.request.body;
        const resData = await ctx.service.essay.edit({ _id: ctx.params.id, content: query.content });
        this.success(resData);
    }
}
exports.default = EssayController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNzYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlc3NheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUE2QztBQUU3QyxPQUFPO0FBQ1AsTUFBcUIsZUFBZ0IsU0FBUSx3QkFBYztJQUNoRCxLQUFLLENBQUMsTUFBTTtRQUNmLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUE7UUFDcEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDN0IsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFDTSxLQUFLLENBQUMsS0FBSztRQUNkLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUE7UUFDcEIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFDL0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBQ00sS0FBSyxDQUFDLE1BQU07UUFDZixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFBO1FBQ3BCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBO1FBQzlCLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUM1RixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Q0FDSjtBQW5CRCxrQ0FtQkMifQ==