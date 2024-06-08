const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const alert = require("alert-node");
const path = require("path");
const { log } = require("console");

const app = express();

app.use(express.json());
app.use(cors());
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user",
});

app.post("/login", (req, res) => {
  const query1 = "SELECT * FROM management WHERE user = ? AND password = ?";
  con.query(query1, [req.body.user, req.body.password], function (err, result) {
    if (result.length > 0) {
      alert("login completed !!!");
    } else {
      alert("login failed");
    }
  });
});

app.post("/register", (req, res) => {
  const query1 = "SELECT * FROM management WHERE user = ?";
  const query2 =
    "INSERT INTO management (`first-name`, `last-name`, `Email`, `user`, `password`) VALUES (?,?,?,?,?)";
  con.query(query1, [req.body.username], function (err, result) {
    if (result.length > 0) {
      alert("User Already Registered !!!");
    } else {
      con.query(
        query2,
        [
          req.body.fname,
          req.body.lname,
          req.body.email,
          req.body.username,
          req.body.pass,
        ],
        function (err, result) {
          alert("insertion completed !!!");
        }
      );
    }
  });
});

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "build")));
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(3000);
