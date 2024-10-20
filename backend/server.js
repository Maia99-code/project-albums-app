const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log(err));

app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/albums', require('./routes/albums'));

app.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});
