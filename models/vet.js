var mongoose = require('mongoose');

const { Schema } = mongoose;

var vetSchema = new Schema({
    name: { type: String},
    number: [{ type: String}],
    email: { type: String},
    url: { type: String},
    Pet: [{ type: Schema.Types.ObjectId, ref:'Pet'}]
});

// Virtual for user URL

vetSchema
    .virtual('url')
    .get( function () {
        return '/vet' + this._id;
    });

//Export
module.exports = mongoose.model('Vet', VetSchema)



