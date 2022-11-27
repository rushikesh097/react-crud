const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

router.post("/create", (req,res) => {
    Employee.create(req.body)
    .then((result) => {
        res.send(result)
    })
    .catch(err => console.log(err));
})

router.get("/employees", (req, res) => {
  Employee.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.put("/update", (req, res) => {
  Employee.findByIdAndUpdate(req.body._id, {$set: req.body})
  .then((result) => {
    res.send(result);
  })
  .catch((err) => console.log(err));
});

router.get("/search/:name", (req,res) => {
  Employee.find({name: {$regex: req.params.name}})
  .then((result) => {
    res.send(result);
  })
  .catch(err => console.log(err))
})

router.delete("/delete/:id", (req, res) => {
  Employee.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;

