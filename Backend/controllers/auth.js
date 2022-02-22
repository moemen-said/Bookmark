const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const User = require("../models/user");
const config = require("../config/config");

const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: config.SEND_GRID_KEY
  }
}))

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hashedPass) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
      userName: req.body.name.replace(' ', '.') + Math.floor(Math.random() * 1000000)
    });
    user.save()
      .then((result) => {
        res.status(201).json({
          message: "User created Successfully",
          success: true,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "User didn't created, please try again",
          success: false,
        });
      });
  });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const cart = req.body.cart
  let loadedUser;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "invalid email",
        });
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        return res.status(401).json({
          success: false,
          message: "Invalid password",
        });
      }
      loadedUser.password = undefined; //to delete password for returned object to frontend
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString(),
        },
        config.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );

      // for update cart with localStorage cart
      // if(cart){
      //   console.log(cart);
      //   const anonymousCart = cart;
      //   const userCart = loadedUser.cart;
      //   let updatedUserCart = userCart;
      //   anonymousCart.books.forEach(item=>{
      //     console.log(item)
      //   })
      // }
      res.status(200).json({
        success: true,
        message: "Successful Login",
        token: token,
        expiresIn: 3600,
        user: loadedUser,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.resetPassword = (req, res, next) => {
  const email = req.body.email;
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: 'an error has occured in our server, please try again'
      })
    }
    const token = buffer.toString('hex');
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          return res.status(404).json({
            success: false,
            message: 'this email is not exist in our database'
          })
        }
        user.resetToken = token;
        user.resetTokenExpiration = new Date(Date.now() + 3600000);
        return user.save();
      })
      .then(res => {
        if (!res.statusCode) {
          return transporter.sendMail({
            to: email,
            from: 'moemen.said@gmail.com',
            subject: 'Password Reset',
            html: `<p>You requested a password reset</p>
            <p>Click this <a href="https://bookmark-store.web.app/Account/newPassword/${token}?id=${res._id}">link</a> to set a new password`
          });
        }
      })
      .then((success) => {
        if (success && success.message == 'success') {
          return res.status(200).json({
            success: true,
            message: 'An email has been sent to you'
          })
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          success: false,
          message: 'An error has occured in our server, please try again'
        })
      });
  })
}

exports.newPassword = (req, res, next) => {
  const { newPassword, userId, resetToken } = req.body;
  let resetUser;
  User.findOne({
    resetToken: resetToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId
  })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'password cannot be reset, please request a new password again'
        })
      }
      resetUser = user;
      return bcrypt.hash(newPassword, 12).then(hashedPassword => {
        resetUser.password = hashedPassword;
        resetUser.resetToken = undefined;
        resetUser.resetTokenExpiration = undefined;
        return resetUser.save()
          .then(savedUser => {
            transporter.sendMail({
              to: savedUser.email,
              from: 'moemen.said@gmail.com',
              subject: 'New Password Set',
              html: `<p>You have created a new password</p>`
            });
          })
          .then(() => {
            return res.status(200).json({
              success: true,
              message: 'password has been reset successfully'
            })
          })
      });
    })
    .catch(err => {
      return res.status(500).json({
        success: false,
        message: 'password cannot be reset, please request a new password again'
      })
    });
}
