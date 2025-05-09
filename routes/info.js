const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const router = express.Router();

router.use(expressLayouts);

router.get("/about", (req, res) => {
  res.render("test", { title: "About Us", console: "About Us" });
});
router.get("/contact", (req, res) => {
  res.render("test", { title: "Contact Us", console: "Contact Us" });
});
router.get("/privacy", (req, res) => {
  res.render("test", { title: "Privacy Policy", console: "Privacy Policy" });
});
router.get("/terms", (req, res) => {
  res.render("test", {
    title: "Terms of Service",
    console: "Terms of Service",
  });
});

module.exports = router;
