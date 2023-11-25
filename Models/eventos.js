/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventos', {
    eventId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sensorReadingId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SensorReading',
        key: 'SensorReadingId'
      }
    },
    statusId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Statu',
        key: 'StatusiD'
      }
    },
    sensorId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'Sensor',
        key: 'sensorId'
      }
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    operadorId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maintenanceSchedule: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Eventos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Eventos__2DC7BD0930D655BA",
        unique: true,
        fields: [
          { name: "eventId" },
        ]
      },
    ]
  });
};
