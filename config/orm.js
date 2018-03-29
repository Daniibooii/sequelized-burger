// Import MySQL connection.
var connection = require("../config/connection.js");

// burger = table, callback = function //
selectAll()
var orm = {
selectAll: function(table, callback) {
  var s = "SELECT * FROM " + table + ";";
  connection.query(s, function(error, result){
    if (error) {
      throw error
    }
    callback (result)
  })
}

}



insertOne()
// insert into


updateOne()
// update everything



module.exports = orm;


// template below //
var connection = require("./connection.js");
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }
  return arr.toString();
}
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // vals is an array of values that we want to save to cols
  // cols are the columns we want to insert the values into
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // objColVals would be the columns and values that you want to update
  // an example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
module.exports = orm;






// directions below //

ORM object
// data from two different systems //

// will be tricky; selecting from tables, then inserting it into MySQL db //
