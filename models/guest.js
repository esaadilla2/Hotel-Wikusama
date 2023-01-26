'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  guest.init({
    guest_name: DataTypes.STRING,
    guest_email: DataTypes.STRING,
    guest_password: DataTypes.STRING,
    guest_pict: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'guest',
  });
  return guest;
};