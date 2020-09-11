const express = require('express');
const config = require('./appConfig/config');
const app = express();
config.mongoconnect();
app.get('/', (req,res) => res.send('Api running..'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));