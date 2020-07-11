"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const Essay_1 = require("../model/Essay");
class EssayService extends egg_1.Service {
    async create(data) {
        const resData = await Essay_1.EssayModel.create(data);
        if (resData)
            true;
        return false;
    }
    async getList(query) {
        const resData = await Essay_1.EssayModel.find(query, { _id: 1, title: 1, content: 1, type: 1 });
        return resData;
    }
    async edit(query) {
        const resData = await Essay_1.EssayModel.updateOne({ _id: query._id }, { content: query.content });
        return resData;
    }
}
exports.default = EssayService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNzYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlc3NheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUM3QiwwQ0FBMkM7QUFPM0MsTUFBcUIsWUFBYSxTQUFRLGFBQU87SUFDdEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFTO1FBQzNCLE1BQU0sT0FBTyxHQUFHLE1BQU0sa0JBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDN0MsSUFBSSxPQUFPO1lBQUUsSUFBSSxDQUFBO1FBQ2pCLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUNNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBVTtRQUM3QixNQUFNLE9BQU8sR0FBRyxNQUFNLGtCQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZGLE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7SUFDTSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWtCO1FBQ2xDLE1BQU0sT0FBTyxHQUFHLE1BQU0sa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQ3hGLE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7Q0FDSjtBQWRELCtCQWNDIn0=