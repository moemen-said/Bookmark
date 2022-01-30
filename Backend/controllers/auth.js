const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config/config');

exports.userSignup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hashedPass => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass
      });
      user.save()
        .then(result => {
          res.status(201).json({
            message: 'User created Successfully',
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
            message: 'User didn\'t created',
            error: err
          });
        });
    })
}

exports.userLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'invalid email',
          errorCode: 'a1'
        })
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
      if (!isEqual) {
        return res.status(401).json({
          message: 'Invalid password',
          errorCode: 'a2'
        })
      }
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString()
        },
        config.JWT_SECRET_KEY,
        { expiresIn: '1h' }
      );
      res.status(200).json({ token: token, userId: loadedUser._id.toString(), expiresIn: 3600 });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
