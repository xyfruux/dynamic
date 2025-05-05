const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

const usersRouter = require("./routes/users.js");
app.use("/users", usersRouter);

app.use(express.static("public"));
app.use(expressLayouts);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404 Not Found" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
