var mongoose = require('mongoose');

const { Schema } = mongoose;

var UserSchema = new Schema({
        family: { type: String},
        username: { type: String, required: true, maxlength: 10 },
        email: { type: String, required: true},
        password: { type: String, required: true, maxlength: 100},
        pet: [{type: Schema.Types.ObjectId, ref: 'Pet'}],

});

// Virtual for user URL

UserSchema
    .virtual('url')
    .get( function () {
        return '/user' + this._id;
    });

//Export
module.exports = mongoose.model('User', UserSchema)



