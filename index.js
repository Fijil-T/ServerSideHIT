require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/mongo');
const routes = require('./routes/routes');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.on('error', (error) => {
  console.error('Database connection error:', error);
});

database.once('open', () => {
  console.log('Database Connected');
});

const app = express();

app.use(express.json());
app.use('', routes);

connectDB(); // Not sure what this function does, remove if unnecessary

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
