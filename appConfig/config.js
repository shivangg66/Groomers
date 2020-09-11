const mongoose = require('mongoose');
let appconfig = {}
appconfig.port = 5000;
appconfig.db = "mongodb://localhost:27017/test";
appconfig.mongoconnect = async()=> {
try{
    await mongoose.connect(appconfig.db)
    console.log('Connected to mongodb');
}
catch(err){
    console.log(err);
    process.exit(1);
}
}

module.exports = appconfig;