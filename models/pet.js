var mongoose = require('mongoose');

const { Schema } = mongoose;

var PetSchema = new Schema({
    name: { type: String, required: true},
    species: { type: String, required: true},
    age: { type: String},
    weight: { type: String},
    vet: {type: Schema.Types.ObjectId, ref: 'Vet'},
    insurance: {type: Schema.Types.ObjectId, ref: 'Insurance'}
});

// Virtual for user URL

PetSchema
    .virtual('url')
    .get( function () {
        return '/user/pet' + this._id;
    });

//Export
module.exports = mongoose.model('Pet', PetSchema)


