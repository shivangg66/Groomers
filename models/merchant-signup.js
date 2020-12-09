const mongoose = require("mongoose");
const {Schema} = mongoose;

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };

const MerchantSignupSchema = new Schema({
    customer_id: {
        type: String,
        required: true,
        index: true,
    },
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        maxlength: 10,
        minlength: 10,
        required: true
    },
    email_id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true,
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address",
    },
    is_active: {
        type: Boolean,
        required: true,
        default: true,
      },
      created_at: Date,
      updated_at: Date,
},    schemaOptions);

const MerchantSignup = mongoose.model("Merchants", MerchantSignupSchema)
module.exports = MerchantSignup