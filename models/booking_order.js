'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking_order.init({
    order_number: DataTypes.INTEGER,
    guest_name: DataTypes.STRING,
    guest_email: DataTypes.STRING,
    order_date: DataTypes.DATE,
    checkIn_date: DataTypes.DATE,
    checkOut_date: DataTypes.DATE,
    rooms_amount: DataTypes.INTEGER,
    id_room_type: DataTypes.INTEGER,
    order_status: DataTypes.ENUM,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'booking_order',
  });
  return booking_order;
};