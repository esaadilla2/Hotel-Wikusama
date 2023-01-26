'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_order', {
      id_booking_order: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_number: {
        type: Sequelize.INTEGER
      },
      guest_name: {
        type: Sequelize.STRING
      },
      guest_email: {
        type: Sequelize.STRING
      },
      order_date: {
        type: Sequelize.DATE
      },
      checkIn_date: {
        type: Sequelize.DATE
      },
      checkOut_date: {
        type: Sequelize.DATE
      },
      rooms_amount: {
        type: Sequelize.INTEGER
      },
      id_room_type: {
        type: Sequelize.INTEGER
      },
      order_status: {
        type: Sequelize.ENUM('new','check_in','check_out')
      },
      id_user: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('booking_order');
  }
};