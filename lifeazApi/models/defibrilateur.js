'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class defibrilateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  defibrilateur.init({
    serial: DataTypes.STRING,
    locationname: DataTypes.STRING,
    locationaddr: DataTypes.STRING,
    state: DataTypes.INTEGER,
    electrodesexpiry: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'defibrilateur',
  });
  return defibrilateur;
};