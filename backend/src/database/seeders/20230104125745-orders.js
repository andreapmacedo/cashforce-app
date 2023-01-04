'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('orders', [
      {
        nNf: '18153',
        value: '198450',
        buyerId: 1,
        providerId: 1,
        orderStatusBuyer: '0',
        createdAt: new Date(),
        cnpjId: 1,
        userId: 1,
      },
      {
        nNf: '18157',
        value: '168850',
        buyerId: 1,
        providerId: 1,
        orderStatusBuyer: '0',
        createdAt: new Date(),
        cnpjId: 1,
        userId: 1,
      },
      {
        nNf: '18184',
        value: '222795',
        buyerId: 1,
        providerId: 1,
        orderStatusBuyer: '7',
        createdAt: new Date(),
        cnpjId: 1,
        userId: 1,
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};

