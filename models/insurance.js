var mongoose = require('mongoose');

const { Schema } = mongoose;

var insuranceSchema = new Schema({
    insurerName: { type: String},
    policyNumber: { type: String},
    renewalDate: { type: Date},
    url: { type: String},
    pet: [{type: Schema.Types.ObjectId, ref: 'Pet'}],
});

// Virtual for user URL

InsuranceSchema
    .virtual('url')
    .get( function () {
        return '/insurance' + this._id;
    });

//Export
module.exports = mongoose.model('Insurance', InsuranceSchema)



