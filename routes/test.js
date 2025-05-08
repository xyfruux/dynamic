const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const router = express.Router();

router.use(expressLayouts);

router.get("/test-layout", (req, res) => {
  res.render("test", { title: "Test Layout", console: "testtest" });
});

module.exports = router;
