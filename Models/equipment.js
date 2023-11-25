/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipment', {
    equipmentSk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'equipment_sk'
    },
    equipment: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'equipment',
    schema: 'dim',
    timestamps: false,
    indexes: [
      {
        name: "PK__equipmen__1973BBFCA0F7B874",
        unique: true,
        fields: [
          { name: "equipment_sk" },
        ]
      },
    ]
  });
};
