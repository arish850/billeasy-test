var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    app: "BillEasy Test",
    description: "this is an assignment project",
  });
});

module.exports = router;
