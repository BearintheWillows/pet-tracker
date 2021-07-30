const User = require('../models/user')
const Pet = require('../models/pet')
const async = require('async')

//Display Pets

exports.petListGet = (req, res, next) => {
    Pet.find( {}, 'name species')
        .populate('name')
        .exec( (err, listPets) => {
            if (err) { return next(err);}
            //Successful, then render
            res.render('petList', { title: 'Your Pets', petList: listPets})
        });
}