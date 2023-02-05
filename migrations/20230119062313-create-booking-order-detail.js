'use strict';
module.exports = { 
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_order_detail', {
      id_booking_order_detail: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_booking_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "booking_order",
          key: "id_booking_order"
        }
      },
      id_room: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "room",
          key: "id_room"
        }
      },
      duration: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('booking_order_detail');
  }
};