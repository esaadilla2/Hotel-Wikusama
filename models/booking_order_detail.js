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

      // relasi: booking_order_detail -> id_booking_detail
      // parent: booking_order; child: booking_order_detail
      // key: id_booking_order
      this.belongsTo(models.booking_order, {
        foreignKey: "id_booking_order",
        as: "booking_order"
      })

      // relasi: booking_order_detail -> room
      // parent: room; child: booking_order_detail
      // key: id_room
      this.belongsTo(models.room, {
        foreignKey: "id_room",
        as: "room"
      })
    }
  }
  booking_order_detail.init({
    id_booking_order_detail:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_booking_order: DataTypes.INTEGER,
    id_room: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    total_price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'booking_order_detail',
    tableName: 'booking_order_detail'
  });
  return booking_order_detail;
};