const Address = require("./address");
module.exports = {
    name: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true 
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    phone_number: {
        type: Number,
        required: true
    },
    address: Address,
    email_id: {
        type: String,
        required: true
    },
    description: {
        type: String
    }


};