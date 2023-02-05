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

      // relasi: booking_order ->  booking_order_detail
      // parent: booking_order; child: booking_order_detail
      // key: id_booking_order
      this.hasMany(models.booking_order_detail, {
        foreignKey: "id_booking_order",
        as: "booking_order_detail"
      })

      // relasi: booking_order -> guest
      // parent: guest; child: booking_order
      // key: id_guest
      this.belongsTo(models.guest, {
        foreignKey: "id_guest",
        as: "guest"
      })

      // relasi: booking_order -> room_type
      // parent: room_type; child: booking_order
      // key: id_room_type
      this.belongsTo(models.room_type, {
        foreignKey: "id_room_type",
        as: "room_type"
      })
    }
  }
  booking_order.init({
    id_booking_order:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_number: DataTypes.INTEGER,
    id_guest: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    checkIn_date: DataTypes.DATE,
    checkOut_date: DataTypes.DATE,
    rooms_amount: DataTypes.INTEGER,
    id_room_type: DataTypes.INTEGER,
    order_status: DataTypes.ENUM('new','check_in','check_out')
  }, {
    sequelize,
    modelName: 'booking_order',
    tableName: 'booking_order'
  });
  return booking_order;
};