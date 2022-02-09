const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const storeRoutes = require('./routes/store');
const checkAuth = require('./middlewares/checkAuth');

const app = express();

mongoose.connect('mongodb+srv://moemen:moemenPass@cluster0.cfkkx.mongodb.net/Bookmark')
    .then(() => {
        console.log("Connected Successfully to Database")
    })
    .catch(() => {
        console.log("Could Not Connect to Database")
    })

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/api/auth', authRoutes)
app.use('/api/store', storeRoutes)

app.listen(3000);
