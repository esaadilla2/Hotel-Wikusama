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
    }
  }
  room_type.init({
    type_room_name: DataTypes.STRING,
    room_price: DataTypes.DOUBLE,
    description: DataTypes.STRING,
    room_pict: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'room_type',
  });
  return room_type;
};