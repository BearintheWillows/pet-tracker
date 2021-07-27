const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PetSchema = new Schema(
    {
        name: {type: String, required: true, maxLength: 10},
        species: {type: String, required: true, maxLength:10},
        breed: {type: String, required: true, maxLength: 10},
        dob: {type: Date}
        weight: {type: String},
        vet: {type: Schema.Types.ObjectId, ref: 'Vet'},
    }
);

//Virtual for pet URL
PetSchema
    .virtual('url')
    .get( () => {
            return '/users/pet/' + this._id;
    });

//Export Model
module.exports = mongoose.model('Pet', PetSchema)
