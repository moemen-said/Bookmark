const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const cors = require('cors')

const authRoutes = require("./routes/auth");
const storeRoutes = require("./routes/store");
const config = require("./config/config");

const app = express();

mongoose
    .connect(config.MONGO_DB_CONNECTION)
    .then(() => {
        console.log("Connected Successfully to Database");
    })
    .catch(() => {
        console.log("Could Not Connect to Database");
    });

app.use(bodyParser.json());
app.use(helmet());
app.use(compression());
app.use(cors({ origin: '*' }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use("/api/auth", authRoutes);
app.use("/api/store", storeRoutes);

app.listen(process.env.PORT || 3000);
