'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking_order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { 
      // define association here
    }
  }
  booking_order_detail.init({
    id_booking_order: DataTypes.INTEGER,
    id_room: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    total_price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'booking_order_detail',
  });
  return booking_order_detail;
};