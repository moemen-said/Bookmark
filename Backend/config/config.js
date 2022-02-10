const config = {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY ,
    SEND_GRID_KEY: process.env.SEND_GRID_KEY,
    MONGO_DB_CONNECTION:process.env.MONGO_DB_CONNECTION
}

module.exports = config;