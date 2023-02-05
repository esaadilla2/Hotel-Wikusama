'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // relasi: room_type -> booking_order
      // parent: room_type; child: booking_order
      // key: id_room_type
      this.hasMany(models.booking_order, {
        foreignKey: "id_room_type",
        as: "booking_order"
      })
    }
  }
  room_type.init({
    id_room_type:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type_room_name: DataTypes.STRING,
    room_price: DataTypes.DOUBLE,
    description: DataTypes.STRING,
    room_pict: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'room_type',
    tableName: 'room_type'
  });
  return room_type;
};