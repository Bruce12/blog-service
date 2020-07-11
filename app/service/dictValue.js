"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const DictValue_1 = require("../model/DictValue");
class DictValueService extends egg_1.Service {
    async getDictList() {
        const data = await DictValue_1.DictValueModel.find();
        return data;
    }
    async create(data) {
        const res = await DictValue_1.DictValueModel.create(...data);
        console.log('res', res);
    }
}
exports.default = DictValueService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdFZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGljdFZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZCO0FBQzdCLGtEQUFtRDtBQUVuRCxNQUFxQixnQkFBaUIsU0FBUSxhQUFPO0lBQzVDLEtBQUssQ0FBQyxXQUFXO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLE1BQU0sMEJBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN4QyxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFDTSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQVM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsTUFBTSwwQkFBYyxDQUFDLE1BQU0sQ0FDckMsR0FBRyxJQUFJLENBQ1IsQ0FBQTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Q0FDRjtBQVhELG1DQVdDIn0=