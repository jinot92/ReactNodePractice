const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/Users");
require("./services/passport");

var options = {
  server: {
    socketOptions: {
      socketTimeoutMS: 10000,
      connectTimeoutMS: 10000
    }
  }
};
mongoose.connect(
  keys.mongoURI,
  options,
  function(err, db) {
    if (!err) {
      console.log("We are connected");
    } else {
      console.log(err);
    }
  }
);

mongoose.Promise = global.Promise;

var app = express();

app.use(cookieSession({
  maxAge: 30*24*60*60*1000, //Expiration time - 30 days * 24 hours * 60 minutues * 60 secs in minute * 1000 millsec in a sec
  keys:[keys.cookieKey]//Key to encrypt cookie
}));

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
