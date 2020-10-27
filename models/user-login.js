const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserLoginSchema = new Schema({
    phone_number: {
        type: String
    },
    email_id: {
        type: String
    },
    password: {
        type: String,
        require: true
    }
})

const UserLogin = mongoose.model("UserLogin", UserLoginSchema);
module.exports = UserLogin;