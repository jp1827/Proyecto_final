/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('statu', {
    statusiD: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'StatusiD'
    },
    alert: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'Alert'
    },
    alarmThreshold: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'AlarmThreshold'
    },
    batteryLevel: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'BatteryLevel'
    },
    statu: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Statu'
    },
    reliability: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Reliability'
    }
  }, {
    sequelize,
    tableName: 'Statu',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Statu__C8E9143B4F262442",
        unique: true,
        fields: [
          { name: "StatusiD" },
        ]
      },
    ]
  });
};
