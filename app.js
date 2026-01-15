require('dotenv').config();
const express = require('express');

const userRoutes = require('./routes/auth');
const newsRoutes = require('./routes/news');

const app = express();

app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/news', newsRoutes);

module.exports = app;
