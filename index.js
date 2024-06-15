const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});
let data;
app.post("/newuser", (req, res) => {
  //   console.log(req.body);
  let { user, email, phone, address, gender, age } = req.body;
  data = {
    user: user,
    email: email,
    phone: phone,
    address: address,
    gender: gender,
    age: age,
  };
  res.render("info.ejs", { data });
});

app.get("/edit", (req, res) => {
  //   console.log(data);
  res.render("edit.ejs", { data });
});
