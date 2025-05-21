const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const router = express.Router();

router.use(
  session({
    secret: "session",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 1000 * 5,
    },
  })
);

router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());

let sessionData = {};

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username !== "admin" || password !== "1234") {
    res.status(403);
    res.send("로그인 실패");
    return;
  }
  sessionData = req.session;
  sessionData.username = username;
  // Double Cookie
  const token = crypto.randomUUID();
  res.cookie("csrf_token", token, {
    secure: true,
  });
  // Double Cookie End
  res.redirect("/csrf_test.html");
});

router.post("/remit", (req, res) => {
  const { to, amount } = req.body;
  if (!req.session.username || req.session.username !== sessionData.username) {
    res.status(403);
    res.send("로그인 필요");
    return;
  }
  // Double Cookie
  if (req.cookies["csrf_token"] !== req.body["csrf_token"]) {
    res.status(403);
    res.send("CSRF 공격 의심");
    return;
  }
  // Double Cookie End
  res.send(`${sessionData.username}님이 ${to}에게 ${amount}원을 송금했습니다.`);
});
module.exports = router;
