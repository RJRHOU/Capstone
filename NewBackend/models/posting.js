'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //   // define association here
      Posting.belongsTo(models.User)
    }
  }
  Posting.init({
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reviewtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productreview: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'posting',
  });
  return Posting;
};