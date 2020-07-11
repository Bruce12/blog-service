"use strict";
var Essay_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseModel_1 = require("./BaseModel");
const typegoose_1 = require("typegoose");
const type_graphql_1 = require("type-graphql");
let Essay = Essay_1 = class Essay extends BaseModel_1.default {
    createEssay(data) {
        let essay = new Essay_1();
        essay.title = data.title;
        essay.type = data.type;
        essay.content = data.content;
        return essay;
    }
};
tslib_1.__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field(() => String, { description: '标题' }),
    tslib_1.__metadata("design:type", String)
], Essay.prototype, "title", void 0);
tslib_1.__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field(() => String, { description: '类型' }),
    tslib_1.__metadata("design:type", String)
], Essay.prototype, "type", void 0);
tslib_1.__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field(() => String, { description: '内容' }),
    tslib_1.__metadata("design:type", String)
], Essay.prototype, "content", void 0);
tslib_1.__decorate([
    typegoose_1.instanceMethod,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], Essay.prototype, "createEssay", null);
Essay = Essay_1 = tslib_1.__decorate([
    type_graphql_1.ObjectType(),
    typegoose_1.index({ id: 1 })
], Essay);
exports.Essay = Essay;
exports.EssayModel = new Essay().getModelForClass(Essay);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXNzYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFc3NheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMkNBQW1DO0FBQ25DLHlDQUFzRDtBQUN0RCwrQ0FBa0Q7QUFLbEQsSUFBYSxLQUFLLGFBQWxCLE1BQWEsS0FBTSxTQUFRLG1CQUFTO0lBYXpCLFdBQVcsQ0FBQyxJQUFTO1FBQzFCLElBQUksS0FBSyxHQUFHLElBQUksT0FBSyxFQUFFLENBQUE7UUFDdkIsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUN0QixLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDNUIsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0NBQ0osQ0FBQTtBQWpCRztJQUZDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDeEIsb0JBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7O29DQUM3QjtBQUlkO0lBRkMsZ0JBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN4QixvQkFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7bUNBQy9CO0FBSVo7SUFGQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hCLG9CQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDOztzQ0FDNUI7QUFFZjtJQURDLDBCQUFjOzs7O3dDQU9kO0FBbkJRLEtBQUs7SUFGakIseUJBQVUsRUFBRTtJQUNaLGlCQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7R0FDSixLQUFLLENBb0JqQjtBQXBCWSxzQkFBSztBQXFCTCxRQUFBLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFBIn0=