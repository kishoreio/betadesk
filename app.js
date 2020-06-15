const express = require('express');
const app = express();
const cors = require('cors');
const ticketRouter = require('./routes/ticketRoute');

app.use(cors());
app.use(express.json());

app.use('/api/v1/tickets', ticketRouter);

module.exports = app;

// <password>
