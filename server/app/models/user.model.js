const sql = require("./db.js");

// constructor
const User = function (user) {
  this.email = user.email;
  this.nickname = user.nickname;
  this.password = user.password;
  this.picture = user.picture;
  this.location = user.location;
  this.minor = user.minor;
  this.role = user.role;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", {
      id: res.insertId,
      ...newUser
    });
    result(null, {
      id: res.insertId,
      ...newUser
    });
  });
};

User.findById = (userId, result) => {
  sql.query(`SELECT * FROM user WHERE id = ${userId}`, (err, res) => {
    console.log("result: ", res);
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found User with the id
    result({
      kind: "not_found"
    }, null);
  });
};

User.findByEmail = (reqBody, result) => {
  sql.query(`SELECT * FROM user WHERE email = "${reqBody.email}"`, (err, res) => {
    console.log("result: ", res);
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length > 0) {
      if (reqBody.password === res[0].password) {
        console.log("FounD UseR: ", res[0]);
        result(null, res[0]);
      } else {
        result({
          kind: "wrong_data"
        }, null);
      };
      return;
    }
    // not found User with the email
    result({
      kind: "not_found"
    }, null);
  });
};


User.getAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("user: ", res);
    result(null, res);
  });
};

User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE user SET email = ?, nickname = ?, role = ?, picture =?, location = ?, minor = ?  WHERE id = ?",
    [user.email, user.name, user.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({
          kind: "not_found"
        }, null);
        return;
      }

      console.log("updated user: ", {
        id: id,
        ...user
      });
      result(null, {
        id: id,
        ...user
      });
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found User with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};


module.exports = User;
