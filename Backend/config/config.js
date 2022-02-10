const config = {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY ||  'Moemen_Mohamed_Said_Ahmed_Elsayed_Ali_15-2-1998',
    SEND_GRID_KEY: process.env.SEND_GRID_KEY || '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',
    MONGO_DB_CONNECTION:process.env.MONGO_DB_CONNECTION || 'mongodb+srv://moemen:moemenPass@cluster0.cfkkx.mongodb.net/Bookmark'
}

module.exports = config;