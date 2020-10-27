const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MerchantLoginSchema = new Schema({
    phone_number: {
        type: String,
        minlength: 10,
        maxlength: 10
    },
    email: {
        type: String,
    },
    password: {
        type: String
    }
});

const MerchantLogin = mongoose.model("MerchantLogin", MerchantLoginSchema);
module.exports = MerchantLogin;