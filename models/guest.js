'use strict';
const {
  Model
} = require('sequelize');
const booking_order = require('./booking_order');
module.exports = (sequelize, DataTypes) => {
  class guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // relasi: guest -> booking_order
      // key: id_guest, guest as parent
      // type: one to many since one guest can book multiple order
      this.hasMany(models.booking_order, {
        foreignKey: "id_guest",
        as: "booking_order"
      })
    }
  }
  guest.init({
    id_guest:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    guest_name: DataTypes.STRING,
    guest_email: DataTypes.STRING,
    guest_password: DataTypes.STRING,
    guest_pict: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'guest',
    tableName: 'guest'
  });
  return guest;
};