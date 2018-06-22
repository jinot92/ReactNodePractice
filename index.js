const express = require("express");
require("./services/passport");

var app = express();

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
