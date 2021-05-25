module.exports = app => {
  const user = require("../controllers/user.controller.js");

  app.post("/login", user.findOneByEmail);

  // Retrieve all Users
  app.get("/login2", user.findAll);

};
