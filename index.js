const express = require('express');
const config = require('./appConfig/config');
const app = express();

//CONNECT DB
config.mongoconnect();

//DEFINE ROUTES
app.use('/api/user',require('./routes/user'));
app.use('/api/merchant',require('./routes/merchant'));

//START SERVER
const PORT = process.env.PORT || config.port;
app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));