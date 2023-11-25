
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
  
//sequelize.literal

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


app.get('/',async (req, res) => {

    const totalrecords = await getTotalRecords();
    const totalRecords2 = totalrecords.totalRecords

    try {

      //conexion 
      const Eventos = require('./Models/event')(sequelize, DataTypes)

      const totaleventos = await Eventos.count();
      const faltantes = totalRecords2 - totaleventos


      // Hacer la solicitud a la API
      const response = await fetch(apiUrl + endpoint, { method, 
        headers : {
          Direction : 1,
          offset: totaleventos,
          Limit: faltantes
        } 
      });
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      data = await response.json();
      res.json(data);

      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        console.log(item)

        const datoguardado = await Eventos.findOrCreate({ 
          where: { eventId: item.EventId },
          defaults: {
            eventId: item.EventId, 
            timestamp: item.Timestamp, 
            operatorId: item.OperatorID,
            maintenanceSchedule: item.MaintenanceSchedule,
            sensorId: item.Sensor.SensorID, 
            sensorType: item.Sensor.SensorType, 
            location: item.Sensor.Location,
            manufacturer: item.Sensor.Manufacturer,
            regulations: item.Sensor.Regulations,
            model: item.Sensor.Model,
            affectedEquipment: 	item.SensorReading.AffectedEquipment, 
            sampleRate: item.SensorReading.SampleRate, 
            value: item.SensorReading.Value,
            unit: item.SensorReading.Unit,
            description: item.SensorReading.Description,
            alert: item.Status.Alert, 
            alarmThreshold: item.Status.AlarmThreshold, 
            batteryLevel: item.Status.BatteryLevel,
            status: item.Status.Status,
            reliability: item.Status.Reliability}
        });

      }
      console.log('Ya finalizó el for, se han agregado los datos')

    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
  
      // Log de la respuesta completa
      const responseText = await response.text();
      console.log('Texto de la respuesta:', responseText);
  
      res.status(500).json({ error: 'Error al comunicarse con la API' });
    }

  });
  

  /*
  const apiUrlEr = 'https://api-iot-monitoring-production.up.railway.app';
  const endpoint2 = '/event/getTotalRecords';
  const method2 = 'GET';

  app.get('/', async (req, res) => {
    try {
        // Hacer la solicitud a la API
        const response2 = await fetch(apiUrlEr + endpoint2, { method: method2 });

        if (!response2.ok) {
            throw new Error(`Error en la solicitud: ${response2.statusText}`);
        }

        const data2 = await response2.json();
        res.json(data)
        res.json(data2);  // Enviar la respuesta completa al cliente
        
    } catch (error) {
        console.error('Error al hacer la solicitud segun:', error);

        // Log de la respuesta completa (si response está definida)
            const responseText2 = await response2.text();
            console.log('Texto de la respuesta:', responseText2);


        res.status(500).json({ error: 'Error al comunicarse con la API' });
    }
});
*/

/*
const apiUrl3 = 'https://api-iot-monitoring-production.up.railway.app';
const searchEndpoint = '/event/search';
const methodPost = 'POST';

app.post('/', async (req, res) => {
  try {
      // Hacer la solicitud a la API
      const response = await fetch(apiUrlEr + endpoint2, { method: method2 });

      if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const data = await response.json();
      res.json(data);  // Enviar la respuesta completa al cliente
  } catch (error) {
      console.error('Error al hacer la solicitud:', error);

      // Log de la respuesta completa (si response está definida)
      if (response) {
          const responseText = await response.text();
          console.log('Texto de la respuesta:', responseText);
      }

      res.status(500).json({ error: 'Error al comunicarse con la API' });
  }
});
*/

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

  