'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userinfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Userinfo.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: DataTypes.STRING,
    product: DataTypes.STRING,
    productreview: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'Userinfos',
    modelName: 'Userinfo',
  });
  return Userinfo;
};