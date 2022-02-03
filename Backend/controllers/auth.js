const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const config = require("../config/config");
const user = require("../models/user");

exports.userSignup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hashedPass) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
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
                    message: "User didn't created",
                    success: false,
                });
            });
    });
};

exports.userLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
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
