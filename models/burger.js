const orm = require("../config/orm.js");
let burger = {
  selectAll: (cb) => {
    orm.selectAll("burgs", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgs", cols, vals, (res) => {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgs", objColVals, condition, (res) => {
      cb(res);
    });
  }
};
module.exports = burger;