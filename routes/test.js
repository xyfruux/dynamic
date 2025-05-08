const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const router = express.Router();

router.get("/test-layout", (req, res) => {
  res.render("test", { title: "Test Layout", variable: "test" });
});

module.exports = router;
