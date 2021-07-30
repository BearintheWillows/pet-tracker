const User = require('../models/user');
const { body,validationResult } = require('express-validator');


//Display login page

exports.index = (req, res) => {
    res.render('index', { title: 'Pet-tracker Login' })
    console.log('Welcome to login page')
}

//Display register form on GET

exports.registerGET = (req, res) => {
    res.render('registerForm', {title: 'Pet-tracker Register' })
    console.log('Registering....')
}

//Handle register user on POST

exports.registerPost = [

    //Validate fields

    body('username', 'Username is required').trim().isLength({ min: 1}).escape(),
    body('email', 'Email is required').trim().isLength({ min: 1 }).escape(),
    body('password', 'Password is required').trim().isLength({ min: 1, max: 100 }).escape(),

    //Process request
    (req, res, next) => {

        //Extract validation errors
        const errors = validationResult(req);
            // Data is valid

            // Create User object

        const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            });

            console.log(user)
            user.save(function (err) {
                if (err) {
                    return next(err);
                }
                //Success
                res.redirect(user.url)
            })
        }
    ];


