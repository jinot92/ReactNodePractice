const passport = require("passport");

module.exports = (app) =>{
  app.get(
    "/",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/callback", passport.authenticate("google"));

}
