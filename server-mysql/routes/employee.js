const express = require("express")
const mysql = require("mysql");
const router = express.Router();

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employee_info",
});

router.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;
  db.query(
    "INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/update", (req, res) => {
  const emp_id = req.body.emp_id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE emp_id = ?",
    [wage, emp_id],
    (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err.message);
    } else {
      res.send(result);
      // console.log(result)
    }
  });
});

router.delete("/delete/:emp_id", (req, res) => {
  const emp_id = req.params.emp_id;
  db.query("DELETE FROM employees WHERE emp_id = ?", emp_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
