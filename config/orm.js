const connection = require('../config/connection.js');
function objToSql(ob) {
    let arr = [];
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) { value = "'" + value + "'"; }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
let orm = {
    selectAll:(tableInput, cb)=> {
        let queryString = "SELECT * FROM burgs;"
        connection.query(queryString, (err, result) => {
            if (err) { throw err; }
            cb(result);
        })
    },
    insertOne:(table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += vals;
        queryString += ") ";
        connection.query(queryString, (err, result) => {
            if (err) { throw err; }
            cb(result);
        })
    },
    updateOne:(table, objColVals, condition, cb) => {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, (err, result) =>{
            if (err) { throw err; }
            cb(result);
        });
    }
}
module.exports = orm;

