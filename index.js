const express = require("express");
const mongoose = require('mongoose')
const keys= require('./config/keys')
require('./models/Users')
require("./services/passport");


mongoose.connect(keys.mongoURI).then(
  ()=>{
    console.log("connected to mongoDB")},
 (err)=>{
     console.log("err",err);
})

mongoose.Promise = global.Promise;

var app = express();

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
