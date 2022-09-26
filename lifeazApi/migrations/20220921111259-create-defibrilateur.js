'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('defibrilateurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serial: {
        type: Sequelize.STRING
      },
      locationname: {
        type: Sequelize.STRING
      },
      locationaddr: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.INTEGER
      },
      electrodesexpiry: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('defibrilateurs');
  }
};