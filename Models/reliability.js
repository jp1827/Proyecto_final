/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reliability', {
    reliabilitySk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'reliability_sk'
    },
    reliability: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reliability',
    schema: 'dim',
    timestamps: false,
    indexes: [
      {
        name: "PK__reliabil__6DA6E39C6FEABBBD",
        unique: true,
        fields: [
          { name: "reliability_sk" },
        ]
      },
    ]
  });
};
