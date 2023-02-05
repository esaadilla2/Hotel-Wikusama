'use strict';
module.exports = { 
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('room_type', {
      id_room_type: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_room_name: {
        type: Sequelize.STRING
      },
      room_price: {
        type: Sequelize.DOUBLE
      },
      description: {
        type: Sequelize.STRING
      },
      room_pict: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('room_type');
  }
};