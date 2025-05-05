const express = require("express");
const app = express();
const port = 3000;

const usersRouter = require("./routes/users.js");
app.use("/users", usersRouter);

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
