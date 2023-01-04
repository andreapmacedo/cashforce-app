'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nNf: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      buyerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'buyerId',
        references: {
          model: 'buyers',
          key: 'id',
        },
      },
      providerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'providerId',
        references: {
          model: 'providers',
          key: 'id',
        },
      },
      cnpjId: {
        // allowNull: false,
        type: Sequelize.INTEGER,
        field: 'cnpjId',
        references: {
          model: 'cnpjs',
          key: 'id',
        },
      },
      userId: {
        // allowNull: false,
        type: Sequelize.INTEGER,
        field: 'userId',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      orderStatusBuyer: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
