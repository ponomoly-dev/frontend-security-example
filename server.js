const express = require("express");
const api = require("./route/api");
const csrf = require("./route/csrf");
const app = express();
const port = 3000;

// prevent clickjacking -
app.use(
  express.static("public", {
    setHeaders: (res, path, stat) => {
      res.header("X-Frame-Options", "SAMEORIGIN");
    },
  })
);

app.use(express.urlencoded({ extended: true }));

app.use("/api", api);
app.use("/csrf", csrf);
app.get("/", (req, res, next) => {
  res.end("Top Page");
});

app.post("/signup", (req, res, next) => {
  console.log(req.body);
  res.end("Signup Success");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
