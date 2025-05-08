const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.send("About Us");
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
