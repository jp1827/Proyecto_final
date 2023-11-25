const { Sequelize } = require('sequelize');

module.exports.sequelize = new Sequelize('Ecommerce', 'sa', 'Guate.2023', {

    host: 'localhost',
    port: '1433',
    dialect: 'mssql',
    logging: false,
    trustedConnection: true

  });