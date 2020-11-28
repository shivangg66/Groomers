const mongoose = require('mongoose');
const {Schema} = mongoose;

const ServiceSchema = new Schema({
    merchant_id: {
        type: String,
        required: true,
        unique: true
    },
    service_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    cost: {
        type: String,
        required: true
    }

})

const Services = mongoose.model("Services", ServiceSchema);
module.exports = Services;