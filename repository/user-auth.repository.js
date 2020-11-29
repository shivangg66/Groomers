const model = require("../constant/model");

class AuthRepository {
  async findOne(model, phone_number, email_id) {
    try {
      const q = await model.find({
        $and: [
          {
            $or: [{phone_number}, {email_id}],
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
  async findOneAndUpdate(model, bodyParams){
    try{
      const q = await model.findOneAndUpdate(service_id, bodyParams, {new: true}, function(err){
        if(err){
          throw err;
        }
      }).lean()
      .exec()
      return q;
    }catch(err) {
      throw err;
    }
  }

  async saveOne(model, bodyParams) {
    try {
      let newCreated = new model(bodyParams);
      const q = await newCreated.save();
      return q;
    } catch (err) {
      throw err;
    }
  }
  async findData(model, phone_number, email_id) {
    try {
      const q = await model.find({ $or: [{phone_number}, {email_id}] })
        .lean()
        .exec();
      return q[0];
    } catch (err) {
      throw err;
    }
  }
}

module.exports = AuthRepository;
