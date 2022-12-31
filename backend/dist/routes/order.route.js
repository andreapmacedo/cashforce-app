"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrderController_1 = __importDefault(require("../controllers/OrderController"));
const orderController = new OrderController_1.default();
const route = (0, express_1.Router)();
route.get('/orders', (_req, res, next) => orderController.findAll(_req, res, next));
route.get('/order/:id', (_req, res, next) => orderController.findOne(_req, res, next));
exports.default = route;
