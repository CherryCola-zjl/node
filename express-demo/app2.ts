// const express = require("express");
import express from "express";

const app = express();

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "123456") {
    res.send("登录成功!");
  } else {
    res.send("登录失败!");
  }
});

const port = 3000;

app.get("/", (req, res) => {
  res.send("你好111!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
