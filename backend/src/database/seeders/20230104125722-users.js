'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        name: 'ALLAN SOUZA',
        email: 'allan@cashforce.com.br',
        createdAt: '2020-10-01 21:31:37',
        updatedAt: '2020-10-01 22:41:23',
      },
    ], {});

  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

