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
const OrderService_1 = __importDefault(require("../services/OrderService"));
class TeamController {
    constructor(service = new OrderService_1.default()) {
        this.service = service;
        this.findAll = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.service.findAll();
                return res.status(200).json(result);
            }
            catch (error) {
                next(error);
            }
        });
        this.findOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.service.findOne(id);
                return res.status(200).json(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = TeamController;
