var DataTypes = require("sequelize").DataTypes;
var _event = require("./event");
var _equipment = require("./equipment");
var _event = require("./event");
var _location = require("./location");
var _sensor = require("./sensor");
var _reliability = require("./reliability");
var _status = require("./status");

function initModels(sequelize) {
  var event = _event(sequelize, DataTypes);
  var equipment = _equipment(sequelize, DataTypes);
  var event = _event(sequelize, DataTypes);
  var location = _location(sequelize, DataTypes);
  var sensor = _sensor(sequelize, DataTypes);
  var reliability = _reliability(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);

  return {
    event,
    equipment,
    event,
    location,
    sensor,
    reliability,
    status,
  };
}
module.exports = { initModels };
