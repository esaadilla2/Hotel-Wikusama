'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // relasi: room -> booking_order_detail
      // key: id_room, room as parent
      // type: one to one, since id only represent a single value
      this.hasMany(models.booking_order_detail, {
        foreignKey: {
          allowNull: false,
          name: 'id_room',
          references: {
            model: 'booking_order_detail',
            key: 'id_room'
          }
        }
      })

      // relasi: room -> room_type
      // key: id_room_type, room as child
      this.belongsTo(models.room_type, {
        foreignKey: {
          allowNull: false,
          name: 'id_type_room',
          references: {
            model: 'room_type',
            key: 'id_type_room'
          }
        },
        as: "room_type"
      })
    }
  }
  room.init({
    id_room:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    room_number: DataTypes.INTEGER,
    id_room_type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'room',
    tableName: 'room'
  });
  return room;
};