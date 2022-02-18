const jwt = require('jsonwebtoken');

const config = require('../config/config');

module.exports = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        const decodedToken = jwt.verify(token, config.JWT_SECRET_KEY)
        req.userData = { email: decodedToken.email, id: decodedToken.userId }
        next();
    } catch (err) {
        res.status(401).json({
            success:false,
            message: 'Unauthorized',
            err:err
        })
    }
}