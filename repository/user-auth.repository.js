const Signup = require("../models/user-signup");

class AuthRepository {
  async findOne(phone_number, email_id) {
    try {
      const q = await Signup.find({
        $and: [
          {
            $or: [{ phone_number }, { email_id }],
          },
          {
            is_active: true,
          },
        ],
      })
        .lean()
        .exec();
      if (q.length) {
        return true;
      }

      return null;
    } catch (err) {
      throw err;
    }
  }
  async saveOne(bodyParams) {
    try {
      let newUser = new Signup(bodyParams);
      const q = await newUser.save();
      return q;
    } catch (err) {
      throw err;
    }
  }
  async findData(mobile_number, email_id) {
    try {
      const q = await Signup.find({ $or: [{ mobile_number }, { email_id }] })
        .lean()
        .exec();
      return q[0];
    } catch (err) {
      throw err;
    }
  }
}

module.exports = AuthRepository;
