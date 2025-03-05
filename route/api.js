const express = require("express");
const router = express.Router();

/**
// 동일 출처 정책
// 00 - 테스트 예시
sudo vim /private/etc/hosts
127.0.0.1 site.example

// 01 - 교차 출처에 요청 전송 제한 확인
await fetch("http://localhost:3000/api", {
  headers: { "X-Token": "aBcDeF1234567890" },
});
await fetch("http://site.example:3000/api", {
  headers: { "X-Token": "aBcDeF1234567890" },
});
await fetch("https://www.naver.com", {
  headers: { "X-Token": "aBcDeF1234567890" },
});
 */

const allowList = ["http://localhost:3000", "http://site.example:3000"];

router.use((req, res, next) => {
  // 접근허가 출처 설정
  if (req.headers.origin && allowList.includes(req.headers.origin)) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  }
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Headers", "X-Token");
  }
  next();
});

router.get("/", (req, res) => {
  res.send({ message: "?" });
});

router.use(express.json());

router.post("/", (req, res) => {
  const body = req.body;
  res.end();
});

module.exports = router;
