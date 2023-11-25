/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sensor', {
    sensorSk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'sensor_sk'
    },
    sensorCd: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'sensor_cd'
    },
    sensorType: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'sensor_type'
    },
    unitOfMeasure: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'unit_of_measure'
    },
    manufacturer: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    regulations: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sensor',
    schema: 'dim',
    timestamps: false,
    indexes: [
      {
        name: "PK__sensor__1A8E81A665E45674",
        unique: true,
        fields: [
          { name: "sensor_sk" },
        ]
      },
    ]
  });
};
