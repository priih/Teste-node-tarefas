const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors()) 

mongoose
  .connect(
    'mongodb://priscilamarques:chocolate557#@ds139775.mlab.com:39775/exerciciopdm',
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
}
);