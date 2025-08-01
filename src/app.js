const express = require('express');
const authRoutes = require('./routes/auth.routes');

const app = express();   //create server

app.use(express.json());   // For read data


/*
    POST /auth/register
    POST /auth/login
    GET /auth/user
    GET /auth/logout
*/
app.use('/auth', authRoutes);

// app.use('/product', productRoute);
// app.use('/customer', customerRoutes);

module.exports = app;