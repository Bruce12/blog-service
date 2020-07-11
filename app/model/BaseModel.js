"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("typegoose");
const date_1 = require("../utils/date");
/**
  * BaseModel
*/
let BaseModel = class BaseModel extends typegoose_1.Typegoose {
    warpData(data, message) {
        return { status: data ? 0 : -1, message: message || data ? '请求成功' : '请求失败', data };
    }
};
tslib_1.__decorate([
    type_graphql_1.Field({ description: "id" }),
    tslib_1.__metadata("design:type", String)
], BaseModel.prototype, "_id", void 0);
tslib_1.__decorate([
    typegoose_1.prop(),
    type_graphql_1.Field({ description: "创建时间" }),
    tslib_1.__metadata("design:type", String)
], BaseModel.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typegoose_1.prop(),
    type_graphql_1.Field({ description: "更新时间" }),
    tslib_1.__metadata("design:type", String)
], BaseModel.prototype, "updatedAt", void 0);
BaseModel = tslib_1.__decorate([
    typegoose_1.pre(/save|update|updateOne/, function (next) {
        //
        if (!this.createdAt || this.isNew) {
            this.createdAt = date_1.formatDateTime(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss');
        }
        else {
            this.updatedAt = date_1.formatDateTime(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss');
        }
        next();
    }),
    type_graphql_1.ObjectType()
], BaseModel);
exports.default = BaseModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmFzZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUFnRDtBQUNoRCx5Q0FBZ0Q7QUFDaEQsd0NBQThDO0FBRTlDOztFQUVFO0FBYUYsSUFBcUIsU0FBUyxHQUE5QixNQUFxQixTQUFVLFNBQVEscUJBQVM7SUFhdkMsUUFBUSxDQUFVLElBQU8sRUFBRSxPQUFnQjtRQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUE7SUFDbEYsQ0FBQztDQUNGLENBQUE7QUFiQztJQURDLG9CQUFLLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NDQUNqQjtBQUlaO0lBRkMsZ0JBQUksRUFBRTtJQUNOLG9CQUFLLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7OzRDQUNkO0FBSWpCO0lBRkMsZ0JBQUksRUFBRTtJQUNOLG9CQUFLLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7OzRDQUNkO0FBWEUsU0FBUztJQVg3QixlQUFHLENBQVksdUJBQXVCLEVBQUUsVUFBUyxJQUFJO1FBQ3BELEVBQUU7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQWMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUE7U0FDN0U7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQWMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUE7U0FDN0U7UUFDRCxJQUFJLEVBQUUsQ0FBQTtJQUNSLENBQUMsQ0FBQztJQUVELHlCQUFVLEVBQUU7R0FDUSxTQUFTLENBZ0I3QjtrQkFoQm9CLFNBQVMifQ==