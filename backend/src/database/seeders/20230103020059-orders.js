'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('orders', [
      {
        nNf: '18153',
        value: '198450',
        buyerID: 1,
        providerID: 1,
        orderStatusBuyer: '0',
        createdAt: new Date(),
      },
      {
        nNf: '18157',
        value: '168850',
        buyerID: 1,
        providerID: 1,
        orderStatusBuyer: '0',
        createdAt: new Date(),
      },
      {
        nNf: '18184',
        value: '222795',
        buyerID: 1,
        providerID: 1,
        orderStatusBuyer: '7',
        createdAt: new Date(),
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};

