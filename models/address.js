const mongoose = require("mongoose");
const {Schema} = mongoose;

const AddressSchema = new Schema({
street1: {
    type: String,
    required: true
},
street2: {
    type: String
},
street3: {
  type: String
},
city: {
    type: String,
    required: true
},
state: {
    type: String,
    required: true
},
district: {
    type: String,
    required: true
},
pin_code: {
    type: String,
    required: true
},
country: {
    type: String,
    required: true
}
});

const Address = mongoose.model("Address", AddressSchema);
module.exports = Address;
