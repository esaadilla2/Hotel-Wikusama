'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('room', {
      id_room: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room_number: {
        type: Sequelize.INTEGER
      },
      id_room_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "room_type",
          key: "id_room_type"
        }
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
    await queryInterface.dropTable('room');
  }
};