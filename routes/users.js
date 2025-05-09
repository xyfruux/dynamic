const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const router = express.Router();

router.use(expressLayouts);

router.get("/id/:id", (req, res) => {
  res.render("test", { title: "User Id", console: req.params.id });
});
router.get("/", (req, res) => {
  res.render("test", { title: "User List", console: "User List" });
});
router.get("/create", (req, res) => {
  res.render("test", { title: "Create User", console: "Create User" });
});

module.exports = router;
