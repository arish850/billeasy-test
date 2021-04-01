const express = require("express");
const router = express.Router();
const db = require("../services/db");

/* GET employee listing. */
router.get("/", async (req, res) => {
  const users = await db.query(
    "SELECT a.id, a.name, a.city, b.department FROM employee a, department b where a.dep_id=b.id order by a.name"
  );
  res.json(users);
});

// Get employee id
router.get("/:id", async (req, res) => {
  const userByid = await db.query(
    `SELECT * FROM employee where id = '${req.params.id}'`
  );
  if (!userByid) res.status(404).send("Product not found");
  res.json(userByid);
});

module.exports = router;
