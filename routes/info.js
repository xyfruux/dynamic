const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const router = express.Router();

router.use(expressLayouts);

router.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});
router.get("/contact", (req, res) => {
  res.send("Contact Us");
});
router.get("/privacy", (req, res) => {
  res.send("Privacy Policy");
});
router.get("/terms", (req, res) => {
  res.send("Terms of Service");
});

module.exports = router;
