
const express = require('express');
const fetch = require('node-fetch');

const {sequelize} = require('./db_conection');
const DataTypes = require('sequelize').DataTypes;


const app = express();
const port = 4000;


const apiUrl = 'https://api-iot-monitoring-production.up.railway.app';
const endpoint = '/event';
const method = 'GET';

async function db_test(){
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
  
db_test()

async function getTotalRecords() {
  try {
    const response = await fetch('https://api-iot-monitoring-production.up.railway.app/event/getTotalRecords');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener el total de registros:', error.message);
    throw error; // Propaga el error
  }
}


app.get('/', async (req, res) => {

    const totalrecords = await getTotalRecords();
    const totalRecords2 = totalrecords.totalRecords

    try {

      const Eventos = require('./Models/event')(sequelize, DataTypes)

      const totaleventos = await Eventos.count();
      const faltantes = totalRecords2 - totaleventos

      // Hacer la solicitud a la API
      const response = await fetch(apiUrl + endpoint, { method, 
        headers : {
          Direction : 1,
          offset: totaleventos,
          Limit: 0
        } 
      });
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      data = await response.json();
      res.json(data);
      console.log(totalRecords2)
      console.log(totaleventos)
      console.log(faltantes)


    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
  
      // Log de la respuesta completa
      const responseText = await response.text();
      console.log('Texto de la respuesta:', responseText);
  
      res.status(500).json({ error: 'Error al comunicarse con la API' });
    }

  });
  


  // Middleware para manejar errores 404 (Not Found)
  app.use((req, res, next) => {
    res.status(404).json({ error: 'Recurso no encontrado' });
  });
  
  // Middleware para manejar errores generales
  app.use((err, req, res, next) => {
    console.error('Error interno:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  });
  
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });




