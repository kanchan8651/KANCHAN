const news = require("./dataset/news");
const express = require("express");
const app = express();
const { searchByTerm, searchByCategory } = require("./module/utils");

app.get("/", (req, res) => {
  return res.send(" Welcome to Our News Website");
});

app.get("/news", (req, res) => {
  const { search, category, limit } = req.query;
  let filternews = news;
  if (search) {
    filternews = searchByTerm(search, news);
  }
  if (category) {
    filternews = searchByCategory(category, filternews);
  }
  if (limit) {
    filternews = filternews.slice(0, Number(limit));
  }
  if (filternews.length > 0) {
    return res.send(filternews);
  } else {
    return res.send("News Not Found, please try some different filters");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
