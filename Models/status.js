/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status', {
    statusSk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'status_sk'
    },
    status: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'status',
    schema: 'dim',
    timestamps: false,
    indexes: [
      {
        name: "PK__status__36865204DA62B654",
        unique: true,
        fields: [
          { name: "status_sk" },
        ]
      },
    ]
  });
};
