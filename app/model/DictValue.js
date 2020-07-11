"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseModel_1 = require("./BaseModel");
const typegoose_1 = require("typegoose");
const type_graphql_1 = require("type-graphql");
let DictValue = class DictValue extends BaseModel_1.default {
};
tslib_1.__decorate([
    typegoose_1.prop(),
    type_graphql_1.Field({ description: '字典Type' }),
    tslib_1.__metadata("design:type", String)
], DictValue.prototype, "type", void 0);
tslib_1.__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field({ description: '字典code' }),
    tslib_1.__metadata("design:type", String)
], DictValue.prototype, "dictCode", void 0);
tslib_1.__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field({ description: '字典Value' }),
    tslib_1.__metadata("design:type", String)
], DictValue.prototype, "dictValue", void 0);
DictValue = tslib_1.__decorate([
    type_graphql_1.ObjectType(),
    typegoose_1.index({ id: 1 })
], DictValue);
exports.DictValue = DictValue;
exports.DictValueModel = new DictValue().getModelForClass(DictValue);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGljdFZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGljdFZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFtQztBQUNuQyx5Q0FBdUM7QUFDdkMsK0NBQWdEO0FBSWhELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVUsU0FBUSxtQkFBUztDQWdCdkMsQ0FBQTtBQVRDO0lBRkMsZ0JBQUksRUFBRTtJQUNOLG9CQUFLLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUM7O3VDQUNyQjtBQUlaO0lBRkMsZ0JBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN4QixvQkFBSyxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDOzsyQ0FDakI7QUFJaEI7SUFGQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hCLG9CQUFLLENBQUMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUM7OzRDQUNqQjtBQWZOLFNBQVM7SUFGckIseUJBQVUsRUFBRTtJQUNaLGlCQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7R0FDSixTQUFTLENBZ0JyQjtBQWhCWSw4QkFBUztBQWlCVCxRQUFBLGNBQWMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFBIn0=