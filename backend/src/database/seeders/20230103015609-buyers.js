'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('buyers', [{
      name: 'SACADO 001',
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('buyers', null, {});
  }
};
