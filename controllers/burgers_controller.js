const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        let burgObject = { burgs: data };
        res.render("index", burgObject);
    });
});

router.post("/", (req, res) => {
    burger.insertOne([
        "burgName", "devoured"
    ], [req.body.burgName, req.body.devoured], () => {
        res.redirect("/");
    });
});

router.put("/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    burger.updateOne({ condition: req.body.condition }, condition, () => {
        res.redirect("/");
    });
});

module.exports = router;
