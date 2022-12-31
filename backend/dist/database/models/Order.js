"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Buyer_1 = __importDefault(require("./Buyer"));
const Provider_1 = __importDefault(require("./Provider"));
class Order extends sequelize_1.Model {
}
Order.init({
    nNf: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    value: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    buyerID: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    providerID: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    orderStatusBuyer: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'orders',
    underscored: false,
    timestamps: false,
});
// Order.associate = (models) => {
//   Order.belongsTo(Buyer, { foreignKey: 'buyerID', as: 'buyer' });
//   Order.belongsTo(Provider, { foreignKey: 'providerID', as: 'provider' });
// };
Order.belongsTo(Buyer_1.default, { foreignKey: 'buyerID', as: 'buyer' });
Order.belongsTo(Provider_1.default, { foreignKey: 'providerID', as: 'provider' });
Buyer_1.default.hasMany(Order, { foreignKey: 'buyerID', as: 'buyerID' });
Provider_1.default.hasMany(Order, { foreignKey: 'providerID', as: 'providerID' });
exports.default = Order;
