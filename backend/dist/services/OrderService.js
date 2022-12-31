"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import OrderModel from '../models/OrderModel';
const CustomError_1 = __importDefault(require("../interfaces/CustomError"));
// import Buyer from '../database/models/Buyer';
// import Provider from '../database/models/Provider';
// export default class OrderService {
//   constructor(private model: OrderModel = new OrderModel()) {}
//   async findAll() {
//     const ASSOCIATIONS = [
//       { model: Buyer, as: 'buyer', attributes: ['name'] },
//       { model: Provider, as: 'provider', attributes: ['name'] },
//     ];
//     const data = await this.model.findAll({ 
//       // include: ASSOCIATIONS,
//       attributes: { exclude: ['id'] }
//     });
//     return data;
//   }
//   async findOne(id: string) {
//     const data = await this.model.findOne(Number(id));
//     if (!data) throw new CustomError(401, 'Invalid data id');
//     return data;
//   }
// }
const Order_1 = __importDefault(require("../database/models/Order"));
class OrderService {
    constructor(_model = new Order_1.default()) {
        this._model = _model;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._model.findAll();
            return data;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._model.findOne(Number(id));
            if (!data)
                throw new CustomError_1.default(401, 'Invalid data id');
            return data;
        });
    }
}
exports.default = OrderService;
