/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sensorReading', {
    sensorReadingId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'SensorReadingId'
    },
    affectedEquipment: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'AffectedEquipment'
    },
    sampleRate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'SampleRate'
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'Value'
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Unit'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Description'
    }
  }, {
    sequelize,
    tableName: 'SensorReading',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SensorRe__76C08A81F00C5AF5",
        unique: true,
        fields: [
          { name: "SensorReadingId" },
        ]
      },
    ]
  });
};
