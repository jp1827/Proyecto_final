/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event', {
    eventId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'event_id'
    },
    timestamp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    operatorId: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'operator_id'
    },
    maintenanceSchedule: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'maintenance_schedule'
    },
    sensorId: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'sensor_id'
    },
    sensorType: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'sensor_type'
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    manufacturer: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    model: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    regulations: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    affectedEquipment: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'affected_equipment'
    },
    sampleRate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'sample_rate'
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    alert: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    alarmThreshold: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'alarm_threshold'
    },
    batteryLevel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'battery_level'
    },
    status: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    reliability: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'event',
    schema: 'stg',
    timestamps: false,
    indexes: [
      {
        name: "PK__event__2370F7278F3B4077",
        unique: true,
        fields: [
          { name: "event_id" },
        ]
      },
    ]
  });
};

