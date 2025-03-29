var express = require("express");
var router = express.Router();
const accessToken = require("../configs/access");
//1. require HfInference object

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//2. create a router post request for text generator

module.exports = router;
