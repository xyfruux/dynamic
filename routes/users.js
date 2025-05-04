const express = require("express");
const router = express.Router();

router.get("/id/:id", (req, res) => {
  res.send("User Id " + req.params.id);
});
router.get("/", (req, res) => {
  res.send("User List");
});
router.get("/create", (req, res) => {
  res.send("Create User");
});

module.exports = router;
