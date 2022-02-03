const jwt = require('jsonwebtoken');

const config = require('../config/config');

module.exports = (req, res, next) => {
    try {
        const token = req.header.authorization;
        if (token.startWith('Bearer')) {
            token = token.slice(7, token.lenght)
        }
        const decodedToken = jwt.verify(token, config.JWT_SECRET_KEY)
        req.userData = { email: decodedToken.email, id: decodedToken.userId }
        next();
    } catch (err) {
        res.status(401).json({
            success:false,
            message: 'Unauthorized'
        })
    }
}